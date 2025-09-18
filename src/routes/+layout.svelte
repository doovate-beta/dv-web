<script lang="ts">
    import 'bootstrap/dist/css/bootstrap.min.css';
    import {onMount, setContext} from 'svelte';

    import {
        innerWidth,
    } from 'svelte/reactivity/window';

    onMount(async () => {
        await import('bootstrap/dist/js/bootstrap.bundle.min.js');
    });

    // This function calculates if the screen is desktop or not and returns a boolean value.
    const getIsDesktop = () => innerWidth.current >= 992;

    // Set the context value for the getIsDesktop function.
    setContext<() => boolean>('getIsDesktop', getIsDesktop);
</script>
<slot/>