<script lang="ts">
    import 'bootstrap/dist/css/bootstrap.min.css';
    import {onMount, setContext} from 'svelte';
    import {innerWidth} from 'svelte/reactivity/window';
    import {Collapse, Icon, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from "@sveltestrap/sveltestrap";
    import {page} from '$app/stores';

    let {children} = $props();

    // Root-relative routes for correct active detection
    let routes: Record<string, string> = {
        "/services": "Servicios",
        "/pricing": "Precios",
        "/contact": "Contacto",
    };

    onMount(async () => {
        await import('bootstrap/dist/js/bootstrap.bundle.min.js');
    });

    let isNavbarOpen = $state(false);
    let currentYear: number = new Date().getFullYear();

    // This function calculates if the screen is desktop or not and returns a boolean value.
    const isDesktop = () => innerWidth.current >= 992;

    // Set the context value for the getIsDesktop function.
    setContext<() => boolean>('getIsDesktop', isDesktop);

    // Determine if a given route is active based on the current path
    const isActive = (route: string) => {
        const path = $page.url.pathname;
        return path === route || path.startsWith(route + '/');
    };
</script>

<div id="page-content" class="page-content">
    {@render children()}
</div>

<Navbar
        id="navbar"
        container="sm"
        fixed="top"
        class="pb-2 pt-2 rounded-5 mx-auto mt-3 shadow-lg"
        style="background: linear-gradient(135deg, #c8d6ea, #999bde); width: 92%; transition: all 0.3s ease;"
>
    <!--Mobile view-->
    {#if !isDesktop()}
        <NavbarBrand class="me-auto">
            <div class="d-flex align-items-center">
                <img src="/logo-empresa-lateral-04.png" alt="Logo empresa" class="logo-white-glow" style="height:40px"
                     loading="lazy">
            </div>
        </NavbarBrand>
        <NavbarToggler
                class="mb-0 border-0"
                on:click={() => isNavbarOpen = !isNavbarOpen}
                aria-expanded={isNavbarOpen}
                aria-label="Toggle navigation"
        />
        <Collapse navbar isOpen={isNavbarOpen} class="w-100">
            <Nav class="ms-auto">
                {#each Object.entries(routes) as [route, label]}
                    <NavItem class="w-100 my-2">
                        <NavLink href={route} class={`text-white fs-5 py-2 ${isActive(route) ? 'active' : ''}`}
                                 aria-current={isActive(route) ? 'page' : undefined}>{label}</NavLink>
                    </NavItem>
                {/each}
            </Nav>
        </Collapse>
    {:else}
        <Nav class="mx-auto align-items-center gap-2">
            <NavbarBrand class="me-5">
                <div class="d-flex align-items-center">
                    <img src="/logo-empresa-lateral-04.png" alt="Logo empresa" class="logo-white-glow"
                         style="height: 40px" loading="lazy">
                </div>
            </NavbarBrand>
            {#each Object.entries(routes) as [route, label]}
                <NavItem>
                    <NavLink href={route} class={`text-white px-4 fs-5 ${isActive(route) ? 'active' : ''}`}
                             aria-current={isActive(route) ? 'page' : undefined}>{label}</NavLink>
                </NavItem>
            {/each}
        </Nav>
    {/if}
</Navbar>


<!-- Persistent Footer matching the Navbar style and logo -->
<Navbar
        id="footer"
        class="pb-5 pt-3 w-100 m-0 rounded-0"
        style="background: linear-gradient(135deg, #acc7ea, #8486dc); transition: all 0.3s ease;"
>
    <div class="w-100" style="border-top: 1px solid rgba(255,255,255,.35);"></div>
    <div class="d-flex align-items-center justify-content-between w-100 px-2 pt-2">
        <div class="d-flex align-items-center text-white" style="opacity: .9;">
            <img src="/dv_logo.png" alt="Doovate logo" class="logo-white-glow me-2" style="height: 22px" loading="lazy">
            <span style="color: black">© {currentYear} Doovate</span>
        </div>
        <div class="d-flex align-items-center gap-3">
            <a href="https://instagram.com">
                <i class="bi bi-instagram fs-5 text-light"></i>
            </a>

            <a href="https://facebook.com/doovate" target="_blank" rel="noopener" class="text-white">
                <i class="bi bi-facebook fs-5 text-light"></i>
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
        --brand-font: 'Saira', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
    }

    /* Utilities */
    :global(.brand-gradient) {
        background: var(--brand-gradient) !important;
    }

    :global(.gradient-text) {
        background: var(--brand-gradient);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        color: transparent;
        /* Increase perceived intensity without changing brand gradient elsewhere */
        filter: saturate(1.2) contrast(1.08);
        /* Subtle stroke to avoid washed-out edges on large headings */
        -webkit-text-stroke: 0.25px rgba(0, 0, 0, 0.10);
    }

    /* Animated variant for gradient text */
    :global(.gradient-animated) {
        background-size: 200% 200% !important;
        animation: gradientShift 6s ease-in-out infinite;
    }

    @keyframes gradientShift {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }

    @media (prefers-reduced-motion: reduce) {
        :global(.gradient-animated) {
            animation: none !important;
        }
    }

    /* Bootstrap color overrides */
    :global(.text-primary) {
        color: var(--brand-purple) !important;
    }

    :global(.link-primary) {
        color: var(--brand-cyan) !important;
    }

    :global(.link-primary:hover),
    :global(.link-primary:focus) {
        color: var(--brand-purple) !important;
    }

    :global(.border-primary) {
        border-color: var(--brand-cyan) !important;
    }

    :global(.bg-primary) {
        background: var(--brand-gradient) !important;
    }

    :global(.badge.bg-primary),
    :global(.btn .badge.bg-primary) {
        background: var(--brand-gradient) !important;
    }

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
    :global(::selection) {
        background: #15a8ca;
        color: #fff;
    }

    /* Global font family */
    :global(body) {
        font-family: var(--brand-font);
    }

    /* Space from the fixed top navbar and ensure footer sits at bottom */
    #page-content {
        padding-top: 100px; /* navbar height offset (slightly reduced due to thinner navbar) */
        padding-bottom: 60px; /* bottom spacing for all routes */
        min-height: calc(100vh - 88px); /* subtract approx taller footer height */
    }

    @media (max-width: 576px) {
        #page-content {
            padding-left: 8px;
            padding-right: 8px;
        }
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
        opacity: 0.1; /* a bit less pale */
        filter: saturate(1) brightness(1) contrast(1);
        pointer-events: none;
        animation: bg-zoom 40s ease-in-out infinite alternate;
        transform-origin: center;
        will-change: transform;
    }

    @keyframes bg-zoom {
        0% {
            transform: scale(1);
        }
        100% {
            transform: scale(1.6);
        }
    }

    /* Navbar link hover/active with brand colors */
    :global(#navbar .nav-link) {
        border-radius: 9999px; /* round base shape */
        padding: 0.25rem 0.75rem; /* ensure some breathing room for pill */
        display: inline-flex; /* vertically center text inside */
        align-items: center; /* same height alignment */
        transition: background-color .25s ease, color .25s ease, box-shadow .25s ease, transform .2s ease;
    }

    :global(#navbar .nav-link:hover),
    :global(#navbar .nav-link:focus) {
        color: #fff !important;
        background: linear-gradient(135deg, rgba(21, 168, 202, .28), rgba(132, 13, 131, .28));
        box-shadow: 0 0 0 1px rgba(255, 255, 255, .18) inset, 0 6px 14px rgba(0, 0, 0, .08);
        text-decoration: none !important; /* keep it clean */
    }

    :global(#navbar .nav-link:active),
    :global(#navbar .nav-link.active) {
        color: #fff !important;
        background: linear-gradient(135deg, rgba(21, 168, 202, .45), rgba(132, 13, 131, .45));
        box-shadow: 0 0 0 2px rgba(255, 255, 255, .22) inset, 0 4px 10px rgba(0, 0, 0, .12);
    }
</style>
