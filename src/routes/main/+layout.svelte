<script>
    import {Styles} from '@sveltestrap/sveltestrap';
    import {onMount} from "svelte";
    import Cookies from "js-cookie";
    import {initKeycloak, logout} from '$lib/auth/keycloak';
    import {goto} from "$app/navigation";

    let {children} = $props();

    const options = {
        "main/reports": "Reportes",
        "main/about": "Más información",
        "main/options": "Opciones",
    }
    let selected_option = $state(options["main/about"])
    let isAuthenticated = $state(false);
    let isLoading = $state(true);

    onMount(async () => {
        goto('/main/about')

        try {
            const authenticated = await initKeycloak();
            isAuthenticated = authenticated;
        } catch (error) {
            console.error('Error initializing Keycloak:', error);
        } finally {
            isLoading = false;
        }
    });

    function handleLogout() {
        logout();
    }
</script>

<Styles/>

<header class="p-3 text-bg-dark">
    <div class="container bg-dark">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start --bs-success">
            <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                <img
                        src="/doovate_logo.png"
                        alt="Company Logo"
                        width="65"
                        height="40"
                        class="me-2"
                >
            </a>
            {#if isAuthenticated}
                <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    {#each Object.entries(options) as [key, value]}
                        <li>
                            <a
                                    href={`/${key}`}
                                    class="nav-link px-2"
                                    class:text-white={value !== selected_option}
                                    class:text-secondary={value === selected_option}
                                    onclick={() => {selected_option = value}}
                                    data-sveltekit-preload-data="off"
                            >
                                {value}
                            </a>
                        </li>
                    {/each}
                </ul>
            {/if}
            <div class="text-end">
                {#if isLoading}
                    <div class="spinner-border text-light text-end d-block" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                {:else}
                    <div class="dropdown text-end">
                        <a
                            class="d-block link-body-emphasis text-decoration-none dropdown-toggle d-flex align-items-center gap-2"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            href="#"
                        >
                            <img
                                src="https://github.com/mdo.png"
                                alt="mdo"
                                width="32"
                                height="32"
                                class="rounded-circle"
                            >
                            <span class="text-white">{Cookies.get('username')}</span>
                        </a>
                        <ul class="dropdown-menu text-small">
                            <li><a class="dropdown-item" href="#">New project...</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Settings</a></li>
                            <li><a class="dropdown-item" href="#">Profile</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><button class="dropdown-item" onclick={handleLogout}>Cerrar sesión</button></li>
                        </ul>
                    </div>
                {/if}
            </div>
        </div>
    </div>
</header>

{@render children()}