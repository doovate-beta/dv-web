<script lang="ts">
    import 'bootstrap/dist/css/bootstrap.min.css';
    import {onMount, setContext} from 'svelte';
    import {innerWidth} from 'svelte/reactivity/window';
    import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from "@sveltestrap/sveltestrap";

    let {children} = $props();

    onMount(async () => {
        await import('bootstrap/dist/js/bootstrap.bundle.min.js');
    });

    let isNavbarOpen = $state(false);
    let currentYear: number = new Date().getFullYear();

    // This function calculates if the screen is desktop or not and returns a boolean value.
    const getIsDesktop = () => innerWidth.current >= 992;

    // Set the context value for the getIsDesktop function.
    setContext<() => boolean>('getIsDesktop', getIsDesktop);
</script>

<div id="page-content" class="page-content">
    {@render children()}
</div>

<Navbar
        id="navbar"
        container="sm"
        fixed="top"
        class="pb-2 pt-2 rounded-5 w-75 mx-auto mt-3 shadow-lg"
        style="background-color: #ffffff; transition: all 0.3s ease;"
>
    {#if !getIsDesktop()}
        <NavbarBrand class="me-auto">
            <div class="d-flex align-items-center">
                <img src="/dv_logo.png" alt="Doovate logo" class="me-2" style="height: 30px" loading="lazy">
                <span class="fw-bold text-dark">Doovate</span>
            </div>
        </NavbarBrand>
        <NavbarToggler
                class="mb-3 border-0"
                on:click={() => isNavbarOpen = !isNavbarOpen}
                aria-expanded={isNavbarOpen}
                aria-label="Toggle navigation"
        />

        <Collapse navbar isOpen={isNavbarOpen}>
            <Nav class="ms-auto">
                <NavItem>
                    <NavLink href="/" class="text-dark">Inicio</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/services" class="text-dark">Servicios</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/contact" class="text-dark">Contacto</NavLink>
                </NavItem>
            </Nav>
        </Collapse>
    {:else}
        <Nav underline class="mx-auto">
            <NavbarBrand class="me-4">
                <div class="d-flex align-items-center">
                    <img src="/dv_logo.png" alt="Doovate logo" class="me-2" style="height: 30px" loading="lazy">
                    <span class="fw-bold text-dark">Doovate</span>
                </div>
            </NavbarBrand>
            <NavItem>
                <NavLink href="/" class="text-dark px-3">Inicio</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/services" class="text-dark px-3">Servicios</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/contact" class="text-dark px-3">Contacto</NavLink>
            </NavItem>
        </Nav>
    {/if}
</Navbar>



<!-- Persistent Footer matching the Navbar style and logo -->
<Navbar
        id="footer"
        class="pb-5 pt-3 w-100 m-0 rounded-0"
        style="background-color: #977acd; transition: all 0.3s ease;"
>
    <div class="w-100" style="border-top: 1px solid rgba(255,255,255,.35);"></div>
    <div class="d-flex align-items-center justify-content-between w-100 px-2 pt-2">
        <div class="d-flex align-items-center text-white" style="opacity: .9;">
            <img src="/dv_logo.png" alt="Doovate logo" class="me-2" style="height: 22px" loading="lazy">
            <span>© {currentYear} Doovate</span>
        </div>
        <div class="d-flex align-items-center gap-3">
            <a href="https://instagram.com/doovate" target="_blank" rel="noopener" class="text-white" style="opacity:.85;">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.6" viewBox="0 0 24 24">
                    <rect x="3" y="3" width="18" height="18" rx="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
                </svg>
            </a>
            <a href="https://facebook.com/doovate" target="_blank" rel="noopener" class="text-white" style="opacity:.85;">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06C2 17.08 5.66 21.2 10.44 22v-6.99H7.9v-2.95h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.95h-2.34V22C18.34 21.2 22 17.08 22 12.06z"/>
                </svg>
            </a>
        </div>
    </div>
</Navbar>


<style>
    /* Global full-page animated background image */
    :global(html), :global(body) {
        height: 100%;
    }
    :global(body) {
        position: relative;
        background: none;
    }
    :global(body)::before {
        content: "";
        position: fixed;
        inset: 0;
        background-image: url('/images/hero.jpg');
        background-size: cover;
        background-position: center center;
        will-change: transform;
        transform: scale(1);
        animation: bgKenBurns 90s ease-in-out infinite alternate;
        z-index: -1;
        pointer-events: none;
    }
    @keyframes bgKenBurns {
        from { transform: scale(1); }
        to { transform: scale(1.2); }
    }

    /* Space from the fixed top navbar and ensure footer sits at bottom */
    #page-content {
        padding-top: 90px; /* navbar height offset */
        padding-bottom: 60px; /* bottom spacing for all routes */
        min-height: calc(100vh - 88px); /* subtract approx taller footer height */
    }

    @media (max-width: 576px) {
        #page-content { padding-left: 8px; padding-right: 8px; }
    }
</style>
