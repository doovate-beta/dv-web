<script>
    import PdfViewer from "svelte-pdf";
    import {Button, Form, FormGroup, Icon, Input, TabContent, TabPane} from '@sveltestrap/sveltestrap';
    import {fetchData} from "$lib/http/fetch.js";

    export let reportId;
    export let name;
    export let description;
    export let pdfData;
    export let previewData;
    export let previewParameters;

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

<div class="flex-column align-items-center">
    <div class="container-fluid" style="margin-top: -30px">
        <div class="row">
            <div class="col-auto">
                <PdfViewer
                        data={pdfData}
                        scale={0.8}
                        showButtons={["navigation", "zoom","download", "pageInfo"]}
                        showBorder={false}
                />
            </div>
            <div class="col">
                <div class="mt-5 px-1">
                    <h3>{name}</h3>
                    <p class="text-muted">{description}</p>
                </div>
                <div class="container-fluid px-0">
                    <TabContent class="overflow-y-auto overflow-x-hidden" style="max-height: calc(100vh - 70px);">
                        <TabPane tabId="alpha" tab="Parámetros" active>
                            <Form class="pt-3 px-1 ">
                                {#each previewParameters.parameters as param, i}
                                    {#each Object.keys(param) as key}
                                        <FormGroup floating label={key}>
                                            <Input bind:value={previewParameters.parameters[i][key]}/>
                                        </FormGroup>
                                    {/each}
                                {/each}
                            </Form>
                        </TabPane>
                        <TabPane tabId="bravo" tab="Datos">
                            <table class="table table-responsive table-hover mt-3 mx-1">
                                <tbody>
                                <!-- Table header-->
                                {#each previewData.data as item, index}
                                    {#if index === 0}
                                        <tr>
                                            <th></th>
                                            {#each Object.entries(item) as [key, value]}
                                                <th>{key}</th>
                                            {/each}
                                        </tr>
                                    {/if}
                                {/each}
                                <!-- Body of the table-->
                                {#each previewData.data as item, index}
                                    <tr>
                                        <th>
                                            <button
                                                    type="button"
                                                    class="btn btn-outline-danger btn-sm"
                                                    on:click={() => removeAt(index)}
                                                    aria-label="Eliminar">
                                                <Icon name="trash"/>
                                            </button>
                                        </th>
                                        {#each Object.entries(item) as [key, value]}
                                            <td contenteditable="true" bind:textContent={item[key]}>{value}</td>
                                        {/each}
                                    </tr>
                                {/each}
                                <tr>
                                    <td colspan="{Object.keys(previewData.data[0] || {}).length + 1}"
                                        class="text-center">
                                        <button
                                                type="button"
                                                class="btn btn-outline-primary btn-sm"
                                                on:click={addNewDataRow}
                                                aria-label="Añadir">
                                            <Icon name="plus-square"/>
                                        </button>
                                    </td>
                                </tr>

                                </tbody>
                            </table>

                        </TabPane>
                    </TabContent>
                    <div class="px-1">

                        <Button onclick={() => console.log(previewParameters.parameters)}>Imprimir datos
                        </Button>
                        <Button onclick={getPreviewPdf}>Pasar datos de demo</Button>
                        <Button onclick={updatePreviewPdf}>Actualizar previsualización</Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
