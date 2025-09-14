<script>
    import 'bootstrap/dist/css/bootstrap.min.css'
    import {onMount} from "svelte";

    onMount(async () => {
        // Import bootstrap js on the client only
        await import('bootstrap/dist/js/bootstrap.bundle.min.js')
    })
</script>

<slot/>