<script lang="ts">
    import 'bootstrap/dist/css/bootstrap.min.css';
    import {onMount, setContext} from 'svelte';
    import {innerWidth} from 'svelte/reactivity/window';
    import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from "@sveltestrap/sveltestrap";

    let {children} = $props();

    onMount(async () => {
        await import('bootstrap/dist/js/bootstrap.bundle.min.js');
        // Removed custom active-state management so nav items are not persisted as selected
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
        style="background-color: rgba(255,255,255,0.92); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.95); transition: all 0.3s ease;"
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
        style="background-color: rgba(15,23,42,0.72); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); border-top: 1px solid rgba(255,255,255,0.15); transition: all 0.3s ease;"
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

    /* Glassmorphism theme */
    :root {
        --glass-bg: rgba(255, 255, 255, 0.08);
        --glass-border: rgba(255, 255, 255, 0.18);
        --glass-shadow: 0 10px 30px rgba(2, 6, 23, 0.35);
        --brand-grad-start: #6d7cff; /* indigo */
        --brand-grad-end: #a855f7;   /* purple */
        --text-on-glass: #f3f4f6;    /* light text */
    }

    /* Utility */
    :global(.glass) {
        background: var(--glass-bg) !important;
        border: 1px solid var(--glass-border) !important;
        box-shadow: var(--glass-shadow) !important;
        backdrop-filter: blur(12px) !important;
        -webkit-backdrop-filter: blur(12px) !important;
        border-radius: 16px !important;
        color: var(--text-on-glass);
    }

    /* Cards become glass by default */
    :global(.card) {
        background: var(--glass-bg);
        border: 1px solid var(--glass-border);
        box-shadow: var(--glass-shadow);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border-radius: 18px;
        color: var(--text-on-glass);
    }
    :global(.card .card-title),
    :global(.card h5),
    :global(.card h4),
    :global(.card h3) {
        color: #ffffff;
    }

    /* Make previously solid backgrounds translucent */
    :global(.bg-light) { background-color: rgba(255,255,255,0.06) !important; }
    :global(.bg-white) { background-color: rgba(255,255,255,0.08) !important; }

    /* Make the two light sections (#everywhere and #features) lighter with rounded corners */
    :global(section.bg-light) {
        background-color: rgba(255, 255, 255, 0.4) !important; /* lighter */
        border-radius: 24px; /* rounded borders */
        border: 1px solid rgba(255, 255, 255, 0.4);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        box-shadow: var(--glass-shadow);
        overflow: hidden; /* ensure rounding clips inner content */
    }

    /* Inputs on glass */
    :global(.form-control),
    :global(input[type="text"]),
    :global(input[type="email"]),
    :global(textarea) {
        background: rgba(255,255,255,0.06);
        border: 1px solid var(--glass-border);
        color: var(--text-on-glass);
    }
    :global(.form-control::placeholder) { color: rgba(243,244,246,0.7); }

    /* Buttons */
    :global(.btn-primary) {
        background-image: linear-gradient(135deg, var(--brand-grad-start), var(--brand-grad-end));
        border: 0;
        color: #fff;
        box-shadow: 0 8px 20px rgba(104, 81, 255, 0.35);
    }
    :global(.btn-primary:hover) {
        filter: brightness(1.08);
        transform: translateY(-1px);
    }
    :global(.btn-light) {
        background-color: rgba(255,255,255,0.85);
        color: #0b1220;
        border: 0;
    }

    /* Navbar link hover/active simplified: text shadow only */
    :global(#navbar .nav-link) { color: #0b1220 !important; transition: text-shadow .25s ease, color .25s ease; }
    :global(#navbar .nav-link:hover),
    :global(#navbar .nav-link:focus) {
            text-shadow: 0 0 6px rgba(0,0,0,0.25);
        }
    :global(#navbar .nav-link.active) {
            text-shadow: 0 0 10px rgba(0,0,0,0.35);
            color: #0b1220 !important;
        }
    :global(#footer .nav-link) { color: #fff !important; }
    :global(#footer .nav-link:hover) {
            background-color: rgba(255,255,255,0.12);
            border-radius: 10px;
        }

    /* Typography: dark text inside the lighter (whitened) sections */
    :global(section.bg-light),
    :global(section.bg-light p),
    :global(section.bg-light .lead),
    :global(section.bg-light li),
    :global(section.bg-light small),
    :global(section.bg-light a) {
        color: #0b1220 !important;
    }

    /* Headings inside light sections */
    :global(section.bg-light h1),
    :global(section.bg-light h2),
    :global(section.bg-light h3),
    :global(section.bg-light h4),
    :global(section.bg-light h5),
    :global(section.bg-light h6) {
        color: #0b1220 !important;
    }

    /* Cards placed inside light sections also use dark text */
    :global(section.bg-light .card) { color: #0b1220 !important; }
    :global(section.bg-light .card h1),
    :global(section.bg-light .card h2),
    :global(section.bg-light .card h3),
    :global(section.bg-light .card h4),
    :global(section.bg-light .card h5),
    :global(section.bg-light .card h6) { color: #0b1220 !important; }

    /* Global default: make text and headings white outside light sections */
    :global(body) { color: #f3f4f6; }
    :global(h1),
    :global(h2),
    :global(h3),
    :global(h4),
    :global(h5),
    :global(h6) { color: #ffffff !important; }
</style>
