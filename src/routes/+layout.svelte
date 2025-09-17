<script lang="ts">
    import 'bootstrap/dist/css/bootstrap.min.css';
    import {onMount, setContext} from 'svelte';
    import {MediaQuery} from 'svelte/reactivity';
    import {browser} from '$app/environment';

    import {
        innerWidth,
    } from 'svelte/reactivity/window';

    let isNavbarOpen = $state(false);

    // const largeScreen = $derived(innerWidth.current > 800);

    onMount(async () => {
        await import('bootstrap/dist/js/bootstrap.bundle.min.js');
    });

    // Crea una función que devuelva si es desktop
    const getIsDesktop = () => innerWidth.current >= 992;

    // Expón la función
    setContext<() => boolean>('getIsDesktop', getIsDesktop);


</script>
<slot/>