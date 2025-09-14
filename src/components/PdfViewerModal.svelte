<script>
    import {
        Button,
        Form,
        FormGroup,
        Icon,
        Input,
        Modal,
        ModalBody,
        ModalFooter,
        ModalHeader,
        TabContent,
        TabPane
    } from '@sveltestrap/sveltestrap';
    import PdfViewer from "svelte-pdf";
    import {fetchData} from "$lib/http/fetch.js";

    // Modal props
    export let open = false;
    let fullscreen = false;
    // PdfViewer props
    let reportId;
    let name;
    let description;
    let pdfData;
    let previewData;
    let previewParameters;

    // Toggles the modal
    const toggle = () => {
        fullscreen = !fullscreen;
        open = !open;
    };

    // Allows toggling the modal from outside the component
    export function toggleModal(newReportId, newName, newDescription, newPdfData, newPreviewData, newPreviewParameters) {
        console.log(newReportId, newName, newDescription, newPdfData, newPreviewData, newPreviewParameters);

        // Ahora sí funciona la asignación
        reportId = newReportId;
        name = newName;
        description = newDescription;
        pdfData = newPdfData;
        previewData = newPreviewData;
        previewParameters = newPreviewParameters;

        console.log('Variables asignadas:', {reportId, name, description});
        toggle();
    }

    // Delete the item at the specified index
    function removeAt(index) {
        if (index === 0) return;
        previewData.data = previewData.data.filter((_, i) => i !== index);
    }

    // Add new item at the end of the array
    function addNewDataRow() {
        const newEmptyItem = {};
        // Add a new empty item to the end of the array
        for (const key in previewData.data[0]) {
            newEmptyItem[key] = '';
        }

        // Ensure the index is within bounds
        const i = Number.isInteger(previewData.data.length) ? Math.min(Math.max(previewData.data.length, 0), previewData.data.length) : previewData.data.length;

        // Insert the new item at the specified index
        previewData.data = [
            ...previewData.data.slice(0, i),
            newEmptyItem,
            ...previewData.data.slice(i),
        ];
    }

    // Get preview data from the server with the provided parameters
    async function getPreviewPdf() {
        const params = new URLSearchParams({
            reportId: reportId
        })

        const body = {
            previewData: JSON.stringify(previewData),
            previewParameters: JSON.stringify(previewParameters)
        }
        const serverResponse = await fetchData(
            'reports/download',
            'POST',
            params,
            body,
        )
        console.log(serverResponse)
    }

    async function updatePreviewPdf() {
        const params = new URLSearchParams({
            reportId: reportId
        })
        const body = {
            previewData: JSON.stringify(previewData),
            previewParameters: JSON.stringify(previewParameters)
        }

        // Get preview data from the server with the provided parameters
        const serverResponse = await fetchData(
            'reports/updatePreview',
            'PUT',
            params,
            body,
        )
        console.log(serverResponse)
    }

</script>

<Modal isOpen={open} {toggle} {fullscreen}>
    <ModalHeader {toggle}>Detalles PDF</ModalHeader>
    <ModalBody>
        <div class="flex-column align-items-center">
            <div class="container-fluid" style="margin-top: -30px">
                <div class="row">
                    <div class="col-auto">
                        {#if pdfData}
                            <PdfViewer
                                    data={pdfData}
                                    scale={0.8}
                                    showButtons={["navigation", "zoom","download", "pageInfo"]}
                                    showBorder={false}
                            />
                        {/if}
                    </div>
                    <div class="col">
                        <div class="mt-5 px-1">
                            <h3>{name}</h3>
                            <p class="text-muted">{description}</p>
                        </div>
                        <div class="container-fluid px-0"
                        >
                            <TabContent>
                                <TabPane tabId="alpha" tab="Parámetros" active>
                                    <Form class="pt-3 px-1">
                                        {#if previewParameters && previewParameters.parameters}
                                            {#each previewParameters.parameters as param, i}
                                                {#each Object.keys(param) as key}
                                                    <FormGroup floating label={key}>
                                                        <Input bind:value={previewParameters.parameters[i][key]}/>
                                                    </FormGroup>
                                                {/each}
                                            {/each}
                                        {/if}
                                    </Form>
                                </TabPane>
                                <TabPane tabId="bravo" tab="Datos">
                                    <div class="border rounded m-3 h-100 mx-1">
                                        <table class="table table-hover mb-0">
                                            <thead class="table-light sticky-top">
                                            {#if previewData && previewData.data && previewData.data.length > 0}
                                                <tr>
                                                    <th class="col-auto"></th>
                                                    {#each Object.entries(previewData.data[0]) as [key, value]}
                                                        <th class="text-nowrap">{key}</th>
                                                    {/each}
                                                </tr>
                                            {/if}
                                            </thead>
                                            <tbody>
                                            {#if previewData && previewData.data}
                                                {#each previewData.data as item, index}
                                                    <tr>
                                                        <td class="text-center">
                                                            <button
                                                                    type="button"
                                                                    class="btn btn-outline-danger btn-sm"
                                                                    on:click={() => removeAt(index)}
                                                                    aria-label="Eliminar">
                                                                <Icon name="trash"/>
                                                            </button>
                                                        </td>
                                                        {#each Object.entries(item) as [key, value]}
                                                            <td contenteditable="true"
                                                                bind:textContent={item[key]}
                                                                class="text-nowrap">
                                                                {value}
                                                            </td>
                                                        {/each}
                                                    </tr>
                                                {/each}
                                            {/if}
                                            </tbody>
                                        </table>
                                    </div>
                                    <!--Button for adding new row-->
                                    <div class="text-center mx-3">
                                        <button
                                                type="button"
                                                class="btn btn-outline-primary btn-sm"
                                                on:click={addNewDataRow}
                                                aria-label="Añadir">
                                            <Icon name="plus-square"/>
                                            Añadir fila
                                        </button>
                                    </div>
                                </TabPane>
                            </TabContent>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </ModalBody>
    <ModalFooter>
        <Button color="primary" onclick={getPreviewPdf}>Pasar datos de demo</Button>
        <Button color="primary" onclick={updatePreviewPdf}>Actualizar previsualización</Button>
        <Button color="secondary" onclick={toggle}>Cancelar</Button>
    </ModalFooter>
</Modal>
