import Cookies from 'js-cookie';

export async function fetchData(
    endpoint: string,
    methodType: string,
    params?: URLSearchParams,
    body?: any,
) {
    // Server url
    const serverUrl = 'http://localhost:8100'

    // Construct full url
    const queryString = params && params.toString() ? `?${params.toString()}` : '';
    const url = `${serverUrl}/${endpoint}${queryString}`;


    // Return a promise that resolves to the fetched data
    try {
        const res = await fetch(
            url,
            {
                method: methodType,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + Cookies.get('token'),
                },
                // Include body if it exists
                ...body ? {body: JSON.stringify(body)} : {},
            },
        );

        // Check if the response is successful
        if (!res.ok) {
            let errorMessage = null
            if (res.status === 401) {
                errorMessage = 'No autorizado'
            } else if (res.status === 403) {
                errorMessage = 'No tiene permisos para realizar esta acción'
            } else {
                errorMessage = `Error del servidor: ${res.status}`
            }

            // Return error message
            return {
                success: false,
                message: errorMessage,
                data: null,
            }
        }

        // Get Content-Type header
        const contentType = res.headers.get('Content-Type') || '';

        // Check if the response is JSON
        if (contentType.includes('application/json')) {
            // Return json data if successful
            const serverResponse = await res.json();
            return {
                success: serverResponse.success,
                message: serverResponse.message,
                data: serverResponse.data,
            }
        } else if (contentType.includes('application/pdf')){
            // Auto download the pdf if the response is successful
            const serverResponse = await res.blob();

            // Extract pdf name from the Content-Disposition header
            const contentDisposition = res.headers.get('Content-Disposition');
            const pdfName = contentDisposition ? contentDisposition.split('filename=')[1] : 'document.pdf';

            // Create a temporary URL for the pdf
            const pdfUrl = URL.createObjectURL(serverResponse);
            window.open(pdfUrl, '_blank');
            return {
                success: true,
                message: 'PDF descargado exitosamente',
                data: null,
            }
        }
    } catch (err) {
        // console.error('Error fetching data:', err);
        let error = null;
        if (err.message.includes('NetworkError')) {
            error = 'Error de conexión con el servidor'
        } else {
            error = err.message || 'Error de conexión';
        }
        return {
            success: false,
            message: error,
            data: null,
        }
    }
}

