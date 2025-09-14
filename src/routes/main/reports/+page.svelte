<script>
    import Toaster from '../../../components/Toaster.svelte'
    import CustomModal from '../../../components/PdfViewerModal.svelte'
    import {onMount} from "svelte";
    import Cookies from "js-cookie";
    import PdfViewer from "svelte-pdf";

    let customModal

    let clicked = $state();
    // Estados reactivos
    let loading = $state(false);
    let data = $state(null);
    let error = $state(null);
    let showToaster = $state(false);

    onMount(async () => {
        loading = true;

        const params = new URLSearchParams({
                'companyId': Cookies.get('company_id')
            }
        )

        try {
            const res = await fetch(
                'http://localhost:8100/reports/loadData?' + params.toString(),
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + Cookies.get('token'),
                    },

                });

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
                error = errorMessage;
                showToaster = true;
                return;
            }

            // Return data
            console.log(Cookies.get('token'));
            data = await res.json();
            // data = await res.text();
            error = null;

        } catch (err) {
            console.error('Error fetching data:', err);
            if (err.message.includes('NetworkError')) {
                error = 'Error de conexión con el servidor'
            } else {
                error = err.message || 'Error de conexión';
            }
            showToaster = true;
        } finally {
            loading = false;
        }
    });
</script>

<style>
    .card-grid {
        --gap: 1rem;
        --card-width: 250px;
    }

    .card-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(var(--card-width), 100%), 1fr));
        gap: var(--gap);
    }
</style>

<CustomModal bind:this={customModal}/>

{#if loading}
    <div class="d-flex justify-content-center my-4">
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Cargando...</span>
        </div>
    </div>
{:else if error}
    <Toaster
            message={error}
            show={showToaster}
            type="danger"
            on:close={() => showToaster = false}
    />
{:else if data}
    <div class="container-fluid px-5 mt-5">
        <div class="card-grid card-container">
            {#each data.data as report}
                <div class="card border-bottom-5">
                    <div class="mt-2 d-flex justify-content-center align-items-center">
                        <PdfViewer class="card-img-top"
                                   data={atob(report.pdfPreview)}
                                   showButtons={[]}
                                   scale={0.4}
                                   showBorder={false}/>
                    </div>
                    <div class="card-body position-absolute bottom-0 start-0 w-100 h-50 bg-dark rounded-bottom d-flex flex-column">
                        <div>
                            <h5 class="card-title text-light">{report.name}</h5>
                            <p class="card-text text-light text-truncate"
                               title={report.description}>
                                {report.description}
                            </p>
                        </div>
                        <div class="mt-auto d-flex justify-content-center gap-2">
                            <a href="#" class="btn btn-primary">Ver prueba</a>

                            <a href="#"
                               class="btn btn-primary"
                               onclick={() => customModal.toggleModal(
       report.reportId,
       report.name,
       report.description,
       atob(report.pdfPreview),
       JSON.parse(report.previewData),
       JSON.parse(report.previewParameters)
   )}>
                                Expandir
                            </a>

                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
{/if}