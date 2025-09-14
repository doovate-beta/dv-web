<script>
    import {Toast, ToastBody, ToastHeader} from "@sveltestrap/sveltestrap";

    export let message = '';
    export let type = '';
    export let show = false;

    let color = ''
    if (type === 'error') {
        color = 'bg-danger';
    } else if (type === 'success') {
        color = 'bg-success';
    } else if (type === 'warning') {
        color = 'bg-warning';
    }
</script>

{#if show}
    <Toast class="me-1 fixed-top position-fixed top-0 start-50 translate-middle-x mt-2" autohide on:close={() => show = false}>
        <ToastHeader class="{color} text-white py-1">
        </ToastHeader>
        <ToastBody>{message}</ToastBody>
    </Toast>
{/if}