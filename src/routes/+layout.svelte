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

    // This function calculates if the screen is desktop or not and returns a boolean value.
    const getIsDesktop = () => innerWidth.current >= 992;

    // Set the context value for the getIsDesktop function.
    setContext<() => boolean>('getIsDesktop', getIsDesktop);
</script>

{@render children()}

<Navbar
        id="navbar"
        container="sm"
        fixed="top"
        class="pb-2 pt-2 rounded-5 w-75 mx-auto mt-3 shadow-lg"
        style="background-color: #977acd; transition: all 0.3s ease;"
>
    {#if !getIsDesktop()}
        <NavbarBrand class="me-auto">
            <div class="d-flex align-items-center">
                <img src="/dv_logo.png" alt="Doovate logo" class="me-2" style="height: 30px" loading="lazy">
                <span class="fw-bold text-white">Doovate</span>
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
                    <NavLink href="#" class="text-white">Inicio</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#services" class="text-white">Servicios</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#contact" class="text-white">Contacto</NavLink>
                </NavItem>
            </Nav>
        </Collapse>
    {:else}
        <Nav underline class="mx-auto">
            <NavbarBrand class="me-4">
                <div class="d-flex align-items-center">
                    <img src="/dv_logo.png" alt="Doovate logo" class="me-2" style="height: 30px" loading="lazy">
                    <span class="fw-bold text-white">Doovate</span>
                </div>
            </NavbarBrand>
            <NavItem>
                <NavLink href="/" class="text-white px-3">Inicio</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/services" class="text-white px-3">Servicios</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/contact" class="text-white px-3">Contacto</NavLink>
            </NavItem>
        </Nav>
    {/if}
</Navbar>
