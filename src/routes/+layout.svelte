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
        class="pb-2 pt-2 rounded-5 mx-auto mt-3 shadow-lg"
        style="background: linear-gradient(135deg, #15a8ca, #840d83); width: 92%; transition: all 0.3s ease;"
>
    {#if !getIsDesktop()}
        <NavbarBrand class="me-auto">
            <div class="d-flex align-items-center">
                <img src="/dv_logo.png" alt="Doovate logo" class="logo-white-glow me-2" style="height:36px" loading="lazy">
                <span class="fw-bold text-white fs-4">Doovate</span>
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
                    <NavLink href="/" class="text-white fs-5 py-2">Inicio</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/services" class="text-white fs-5 py-2">Servicios</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/contact" class="text-white fs-5 py-2">Contacto</NavLink>
                </NavItem>
            </Nav>
        </Collapse>
    {:else}
        <Nav underline class="mx-auto">
            <NavbarBrand class="me-4">
                <div class="d-flex align-items-center">
                    <img src="/dv_logo.png" alt="Doovate logo" class="logo-white-glow me-2" style="height: 36px" loading="lazy">
                    <span class="fw-bold text-white fs-4">Doovate</span>
                </div>
            </NavbarBrand>
            <NavItem>
                <NavLink href="/" class="text-white px-4 fs-5">Inicio</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/services" class="text-white px-4 fs-5">Servicios</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/contact" class="text-white px-4 fs-5">Contacto</NavLink>
            </NavItem>
        </Nav>
    {/if}
</Navbar>



<!-- Persistent Footer matching the Navbar style and logo -->
<Navbar
        id="footer"
        class="pb-5 pt-3 w-100 m-0 rounded-0"
        style="background: linear-gradient(135deg, #15a8ca, #840d83); transition: all 0.3s ease;"
>
    <div class="w-100" style="border-top: 1px solid rgba(255,255,255,.35);"></div>
    <div class="d-flex align-items-center justify-content-between w-100 px-2 pt-2">
        <div class="d-flex align-items-center text-white" style="opacity: .9;">
            <img src="/dv_logo.png" alt="Doovate logo" class="logo-white-glow me-2" style="height: 22px" loading="lazy">
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
    /* Brand theme overrides */
    :root {
        --brand-cyan: #15a8ca;
        --brand-purple: #840d83;
        --brand-gradient: linear-gradient(135deg, #15a8ca, #840d83);
    }

    /* Utilities */
    :global(.brand-gradient) { background: var(--brand-gradient) !important; }
    :global(.gradient-text) {
        background: var(--brand-gradient);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        color: transparent;
    }

    /* Bootstrap color overrides */
    :global(.text-primary) { color: var(--brand-purple) !important; }
    :global(.link-primary) { color: var(--brand-cyan) !important; }
    :global(.link-primary:hover),
    :global(.link-primary:focus) { color: var(--brand-purple) !important; }

    :global(.border-primary) { border-color: var(--brand-cyan) !important; }

    :global(.bg-primary) { background: var(--brand-gradient) !important; }
    :global(.badge.bg-primary),
    :global(.btn .badge.bg-primary) { background: var(--brand-gradient) !important; }

    :global(.btn-primary) {
        color: #fff !important;
        background: var(--brand-gradient) !important;
        background-color: var(--brand-cyan) !important; /* fallback */
        border-color: var(--brand-purple) !important;
    }
    :global(.btn-primary:hover),
    :global(.btn-primary:focus),
    :global(.btn-primary:active),
    :global(.btn-primary.active),
    :global(.show > .btn-primary.dropdown-toggle) {
        color: #fff !important;
        background: linear-gradient(135deg, #1296b5, #6d0f6c) !important;
        border-color: #6d0f6c !important;
    }

    :global(.btn-outline-primary) {
        color: var(--brand-purple) !important;
        border-color: var(--brand-purple) !important;
        background-color: transparent !important;
    }
    :global(.btn-outline-primary:hover),
    :global(.btn-outline-primary:focus),
    :global(.btn-outline-primary:active) {
        color: #fff !important;
        background: var(--brand-gradient) !important;
        border-color: var(--brand-purple) !important;
    }

    :global(.btn-primary:focus),
    :global(.btn-outline-primary:focus) {
        box-shadow: 0 0 0 0.25rem rgba(132, 13, 131, 0.25) !important;
    }

    /* Text selection highlight */
    :global(::selection) { background: #15a8ca; color: #fff; }

    /* Space from the fixed top navbar and ensure footer sits at bottom */
    #page-content {
        padding-top: 100px; /* navbar height offset (slightly reduced due to thinner navbar) */
        padding-bottom: 60px; /* bottom spacing for all routes */
        min-height: calc(100vh - 88px); /* subtract approx taller footer height */
    }

    @media (max-width: 576px) {
        #page-content { padding-left: 8px; padding-right: 8px; }
    }

    /* Pale global background image using /images/hero.jpg */
    :global(body) {
        background-color: #f8f9fa; /* light fallback in case image is missing */
        min-height: 100vh;
    }
    :global(body)::before {
        content: "";
        position: fixed;
        inset: 0;
        z-index: -1;
        background-image: url('/images/hero.jpg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        opacity: 0.1 ; /* a bit less pale */
        filter: saturate(1) brightness(1) contrast(1);
        pointer-events: none;
        animation: bg-zoom 40s ease-in-out infinite alternate;
        transform-origin: center;
        will-change: transform;
    }

    @keyframes bg-zoom {
        0% { transform: scale(1); }
        100% { transform: scale(1.6); }
    }
</style>
