<script lang="ts">
    import {getContext, onMount} from 'svelte';
    import {
        Navbar,
        Nav,
        NavItem,
        NavLink,
        NavbarBrand,
        NavbarToggler,
        Collapse,
        Form,
        FormGroup,
        Input,
        Button,
        Row,
        Col,
        Icon,
        Container,
        CardBody,
        Card
    } from '@sveltestrap/sveltestrap';

    let isNavbarOpen = $state(false);
    let validated = $state(false);
    let isSubmitting = $state(false);

    const getIsDesktop = getContext<() => boolean>('getIsDesktop');
    const largeScreen = $derived(getIsDesktop());

    // Función para manejar el envío del formulario
    const handleSubmit = async (e: Event) => {
        e.preventDefault();
        if (isSubmitting) return;

        validated = true;
        const form = e.target as HTMLFormElement;

        if (form.checkValidity()) {
            isSubmitting = true;
            // Aquí iría la lógica de envío
            await new Promise(resolve => setTimeout(resolve, 1000)); // Simulación
            isSubmitting = false;
            // Mostrar mensaje de éxito o redirigir
        }
    };

    // Cerrar navbar móvil al hacer click en un enlace
    const handleNavClick = () => {
        if (!largeScreen) {
            isNavbarOpen = false;
        }
    };

    onMount(() => {
        import('bootstrap').then(({ScrollSpy}) => {
            new ScrollSpy(document.body, {
                target: '#navbar',
                offset: 100
            });
        });
    });
</script>

<svelte:head>
    <title>Doovate - Digitalizamos tu empresa con Odoo</title>
    <meta name="description"
          content="Implementamos y personalizamos Odoo, el ERP más completo del mercado, para digitalizar y optimizar todos los procesos de tu empresa.">
    <meta name="keywords" content="Odoo, ERP, CRM, digitalización empresarial, automatización">
</svelte:head>

<Navbar
        id="navbar"
        container="sm"
        fixed="top"
        class="pb-2 pt-2 rounded-5 w-75 mx-auto mt-3 shadow-sm"
        style="background-color: #977acd; transition: all 0.3s ease;"
>
    {#if !largeScreen}
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
            <Nav pills class="ms-auto">
                <NavItem>
                    <NavLink href="#intro" class="text-white" on:click={handleNavClick}>Inicio</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#features" class="text-white" on:click={handleNavClick}>Soluciones</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#contact" class="text-white" on:click={handleNavClick}>Contacto</NavLink>
                </NavItem>
            </Nav>
        </Collapse>
    {:else}
        <Nav pills class="mx-auto">
            <NavbarBrand class="me-4">
                <div class="d-flex align-items-center">
                    <img src="/dv_logo.png" alt="Doovate logo" class="me-2" style="height: 30px" loading="lazy">
                    <span class="fw-bold text-white">Doovate</span>
                </div>
            </NavbarBrand>
            <NavItem>
                <NavLink href="#intro" class="text-white px-3">Inicio</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#features" class="text-white px-3">Soluciones</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#contact" class="text-white px-3">Contacto</NavLink>
            </NavItem>
        </Nav>
    {/if}
</Navbar>

<main class="container-fluid py-5">
    <!-- Sección Intro -->
    <section id="intro" style="scroll-margin-top: 50px;" class="mb-5">
        <Container class="py-5 mb-5 mt-3">
            <Row class="align-items-center min-vh-50">
                <Col md={6} class="mb-4 mb-md-0">
                    <h1 class="display-5 fw-bold text-body-emphasis mb-4">
                        Digitalizamos tu empresa con
                        <span class="text-primary">Odoo</span>
                    </h1>
                    <p class="lead mb-4">
                        Implementamos y personalizamos Odoo, el ERP más completo del mercado,
                        para que todos tus procesos trabajen en un solo lugar:
                        CRM, ventas, facturación, inventario, proyectos, RR. HH. y más.
                    </p>
                    <div class="d-grid gap-3 d-sm-flex">
                        <Button color="primary" size="lg" href="#contact" class="px-4 py-3">
                            <Icon name="person-fill" class="me-2"/>
                            Habla con un experto
                        </Button>
                        <Button color="outline-secondary" size="lg" href="#features" class="px-4 py-3">
                            <Icon name="play-fill" class="me-2"/>
                            Ver demo
                        </Button>
                    </div>
                </Col>
                <Col md={6} class="text-center">
                    <img
                            src="/Design.png"
                            alt="Sistema Odoo en pantalla de computadora"
                            class="img-fluid rounded shadow-lg"
                            loading="lazy"
                            style="max-height: 500px;"
                    />
                </Col>
            </Row>
        </Container>
    </section>

    <!-- Sección Everywhere -->
    <section id="everywhere" style="scroll-margin-top: 100px;" class="py-5 bg-light">
        <Container>
            <Row class="align-items-center">
                <Col lg={6} class="order-lg-2 text-center mb-4 mb-lg-0">
                    <img
                            src="/phone.png"
                            alt="Odoo en dispositivos móviles"
                            class="img-fluid drop-shadow"
                            style="max-width: 400px;"
                            loading="lazy"
                    />
                </Col>
                <Col lg={6} class="order-lg-1">
                    <div class="pe-lg-4">
                        <h2 class="display-6 fw-bold text-body-emphasis mb-3">
                            Lleva tus herramientas a cualquier parte
                        </h2>
                        <p class="lead mb-4">
                            Accede a Odoo desde tu navegador en cualquier lugar.
                            Gestiona tu negocio desde escritorio, tablet o móvil
                            con la misma experiencia fluida y completa.
                        </p>
                        <Row class="g-3">
                            {#each [
                                {icon: 'shield-check', text: '100% Seguro'},
                                {icon: 'arrow-repeat', text: 'Siempre actualizado'},
                                {icon: 'cloud-check', text: 'Sin instalaciones'},
                                {icon: 'people', text: 'Multi-usuario'}
                            ] as feature}
                                <Col sm={6}>
                                    <div class="d-flex align-items-center">
                                        <div class="text-primary me-3">
                                            <Icon name={feature.icon} size="24"/>
                                        </div>
                                        <span class="fw-medium">{feature.text}</span>
                                    </div>
                                </Col>
                            {/each}
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>

    <!-- Sección Steps -->
    <section id="steps" style="scroll-margin-top: 100px;" class="py-5">
        <Container>
            <div class="text-center mb-5">
                <h2 class="display-6 fw-bold text-body-emphasis mb-3">
                    Haz tuyo Odoo
                </h2>
                <p class="lead mx-auto" style="max-width: 600px;">
                    Personalizamos Odoo a tu medida, implementando los módulos necesarios
                    para tu funcionamiento y desarrollando soluciones personalizadas
                    para tu empresa
                </p>
            </div>

            <Row class="align-items-center">
                <Col lg={6} class="text-center mb-4 mb-lg-0">
                    <img
                            src="/piezes.png"
                            alt="Módulos personalizables de Odoo"
                            class="img-fluid"
                            style="max-width: 500px;"
                            loading="lazy"
                    />
                </Col>

                <Col lg={6}>
                    <div class="ps-lg-4">
                        <h3 class="h4 fw-bold mb-4">Nuestro proceso de personalización</h3>

                        <div class="d-flex flex-column gap-3">
                            {#each [
                                {
                                    step: 1,
                                    title: 'Análisis de necesidades',
                                    description: 'Estudiamos tus procesos actuales y identificamos oportunidades de mejora',
                                    color: 'primary'
                                },
                                {
                                    step: 2,
                                    title: 'Selección de módulos',
                                    description: 'Elegimos los módulos ideales y configuramos funcionalidades específicas',
                                    color: 'primary'
                                },
                                {
                                    step: 3,
                                    title: 'Desarrollo personalizado',
                                    description: 'Creamos soluciones únicas adaptadas a tus procesos específicos',
                                    color: 'primary'
                                },
                                {
                                    step: null,
                                    title: 'Implementación y soporte',
                                    description: 'Desplegamos la solución y te acompañamos en la adopción',
                                    color: 'success'
                                }
                            ] as process}
                                <Card class="border-0 shadow-sm h-100">
                                    <CardBody class="d-flex align-items-start">
                                        <div
                                                class="bg-{process.color} text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                                                style="width: 40px; height: 40px; flex-shrink: 0;"
                                        >
                                            {#if process.step}
                                                <span class="fw-bold">{process.step}</span>
                                            {:else}
                                                <Icon name="check"/>
                                            {/if}
                                        </div>
                                        <div>
                                            <h5 class="fw-bold mb-1">{process.title}</h5>
                                            <p class="text-muted mb-0">{process.description}</p>
                                        </div>
                                    </CardBody>
                                </Card>
                            {/each}
                        </div>
                    </div>
                </Col>
            </Row>

            <!-- Beneficios adicionales -->
            <Row class="mt-5 pt-4">
                {#each [
                    {
                        icon: 'gear',
                        title: 'Configuración flexible',
                        description: 'Adaptamos cada módulo a tus necesidades específicas'
                    },
                    {
                        icon: 'award',
                        title: 'Equipo experto',
                        description: 'Desarrolladores certificados en Odoo'
                    },
                    {
                        icon: 'headset',
                        title: 'Soporte continuo',
                        description: 'Acompañamiento durante todo el proceso'
                    }
                ] as benefit}
                    <Col md={4} class="text-center mb-4">
                        <div class="text-primary mb-3">
                            <Icon name={benefit.icon} size="48"/>
                        </div>
                        <h5 class="fw-bold">{benefit.title}</h5>
                        <p class="text-muted">{benefit.description}</p>
                    </Col>
                {/each}
            </Row>
        </Container>
    </section>

    <!-- Sección Features -->
    <section id="features" style="scroll-margin-top: 100px;" class="py-5 bg-light">
        <Container>
            <div class="text-center mb-5">
                <h2 class="display-6 fw-bold mb-4">Soluciones que impulsan tu operación</h2>
                <p class="lead text-muted mb-5">
                    Personalización a medida, hosting rápido y seguro, e integraciones sin fricción.
                </p>
            </div>

            <Row class="g-4 mb-5">
                {#each [
                    {
                        title: 'Personalización a medida',
                        description: 'Adaptamos Odoo a tus flujos: módulos, campos, reportes y automatizaciones según tu negocio.',
                        icon: 'wrench'
                    },
                    {
                        title: 'Menos herramientas, más control',
                        description: 'Centraliza CRM, ventas, facturación, inventario y proyectos en una sola plataforma.',
                        icon: 'diagram-3'
                    },
                    {
                        title: 'Hosting rápido y seguro',
                        description: 'Disponibilidad desde cualquier lugar, copias de seguridad y monitoreo continuo.',
                        icon: 'cloud-check'
                    },
                    {
                        title: 'Integraciones',
                        description: 'Conecta ecommerce, contabilidad, logística y pasarelas de pago para un flujo sin fricciones.',
                        icon: 'link-45deg'
                    },
                    {
                        title: 'Migración y datos seguros',
                        description: 'Traemos tu información a Odoo con procesos de validación y trazabilidad.',
                        icon: 'database-check'
                    },
                    {
                        title: 'Acompañamiento end‑to‑end',
                        description: 'Descubrimiento, implementación, formación y soporte continuo para tu equipo.',
                        icon: 'people-fill'
                    }
                ] as feature}
                    <Col md={6} lg={4}>
                        <Card class="h-100 border-0 shadow-sm">
                            <CardBody class="text-center">
                                <div class="text-primary mb-3">
                                    <Icon name={feature.icon} size="48"/>
                                </div>
                                <h5 class="fw-bold mb-3">{feature.title}</h5>
                                <p class="text-muted">{feature.description}</p>
                            </CardBody>
                        </Card>
                    </Col>
                {/each}
            </Row>

            <!-- Comparación visual mejorada -->
            <Container fluid class="p-4 p-md-5 bg-white rounded-4 shadow-sm">
                <Row class="align-items-center">
                    <Col md={12} class="text-center mb-4">
                        <h3 class="fw-bold mb-3">Menos herramientas. Más resultados.</h3>
                        <p class="lead">
                            Antes: múltiples herramientas desconectadas<br>
                            Después: todo en Odoo, datos consistentes y reportes claros
                        </p>
                    </Col>

                    <Col md={12}>
                        <Row class="align-items-center justify-content-center">
                            <!-- Herramientas múltiples -->
                            <Col md={5} class="mb-4 mb-md-0">
                                <div class="text-center mb-3">
                                    <h5 class="text-muted">Herramientas dispersas</h5>
                                </div>
                                <Row class="g-2">
                                    {#each [
                                        {logo: '/trello_logo.png', name: 'Trello'},
                                        {logo: '/asana_logo.png', name: 'Asana'},
                                        {logo: '/notion_logo.png', name: 'Notion'},
                                        {logo: '/quickbooks_logo.png', name: 'Quickbooks'},
                                        {logo: '/dropbox_logo.png', name: 'Dropbox'},
                                        {logo: '/docusign_logo.png', name: 'Docusign'}
                                    ] as tool}
                                        <Col xs={4}>
                                            <div class="p-2 bg-light rounded shadow-sm d-flex justify-content-center align-items-center"
                                                 style="height: 80px;">
                                                <img
                                                        src={tool.logo}
                                                        alt="{tool.name} logo"
                                                        class="img-fluid"
                                                        style="max-height: 48px;"
                                                        loading="lazy"
                                                />
                                            </div>
                                        </Col>
                                    {/each}
                                </Row>
                            </Col>

                            <!-- Flecha -->
                            <Col md={2} class="text-center">
                                <div class="display-1 text-primary" aria-label="se convierte en">
                                    →
                                </div>
                            </Col>

                            <!-- Odoo único -->
                            <Col md={5}>
                                <div class="text-center mb-3">
                                    <h5 class="text-primary">Una sola solución</h5>
                                </div>
                                <div class="text-center">
                                    <div class="p-4 bg-primary bg-opacity-10 rounded-4 shadow-sm d-inline-flex">
                                        <img
                                                src="/oodo_logo.png"
                                                alt="Odoo logo"
                                                class="img-fluid"
                                                style="max-width: 200px; height: auto;"
                                                loading="lazy"
                                        />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Container>
    </section>

    <!-- Sección Contact -->
    <section id="contact" class="py-5" style="scroll-margin-top: 100px;">
        <Container>
            <div class="text-center mb-5">
                <h2 class="display-6 fw-bold">¿Listo para comenzar?</h2>
                <p class="lead text-muted">Agenda una llamada y recibe una propuesta adaptada a tu negocio.</p>
            </div>

            <Row class="g-5">
                <Col lg={7}>
                    <Card class="shadow-sm border-0">
                        <CardBody class="p-4">
                            <h4 class="mb-4">Cuéntanos sobre tu proyecto</h4>
                            <Form {validated} on:submit={handleSubmit}>
                                <Row class="g-3">
                                    <Col md={6}>
                                        <FormGroup floating label="Nombre">
                                            <Input
                                                    feedback="Por favor ingresa tu nombre"
                                                    placeholder="Nombre"
                                                    required
                                                    disabled={isSubmitting}
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup floating label="Correo electrónico">
                                            <Input
                                                    placeholder="Correo electrónico"
                                                    feedback="Por favor ingresa un correo válido"
                                                    required
                                                    type="email"
                                                    disabled={isSubmitting}
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup floating label="Teléfono">
                                            <Input
                                                    placeholder="Teléfono"
                                                    feedback="Por favor ingresa un teléfono válido"
                                                    required
                                                    type="tel"
                                                    disabled={isSubmitting}
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup floating label="Empresa">
                                            <Input
                                                    placeholder="Empresa"
                                                    feedback="Por favor ingresa tu empresa"
                                                    required
                                                    disabled={isSubmitting}
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col xs={12}>
                                        <FormGroup floating label="Mensaje">
                                            <Input
                                                    style="min-height: 120px"
                                                    type="textarea"
                                                    placeholder="Cuéntanos sobre tu proyecto y necesidades..."
                                                    feedback="Por favor ingresa un mensaje"
                                                    required
                                                    disabled={isSubmitting}
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col xs={12}>
                                        <Button
                                                type="submit"
                                                color="primary"
                                                size="lg"
                                                disabled={isSubmitting}
                                                class="w-100"
                                        >
                                            {#if isSubmitting}
                                                <div class="spinner-border spinner-border-sm me-2" role="status"
                                                     aria-hidden="true"></div>
                                                Enviando...
                                            {:else}
                                                <Icon name="send" class="me-2"/>
                                                Enviar mensaje
                                            {/if}
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>

                <Col lg={5}>
                    <div class="h-100 d-flex flex-column justify-content-between">
                        <div>
                            <h4 class="mb-4">¿Dónde encontrarnos?</h4>
                            <div class="d-flex mb-3">
                                <Icon name="geo-alt-fill" class="text-primary me-3 mt-1"/>
                                <div>
                                    <strong>Doovate S.A. de C.V.</strong><br>
                                    Dirección completa<br>
                                    Ciudad, Estado, CP
                                </div>
                            </div>
                            <div class="d-flex mb-3">
                                <Icon name="telephone-fill" class="text-primary me-3 mt-1"/>
                                <a href="tel:676765765" class="text-decoration-none">676 765 765</a>
                            </div>
                            <div class="d-flex mb-4">
                                <Icon name="envelope-fill" class="text-primary me-3 mt-1"/>
                                <a href="mailto:contacto@doovate.com"
                                   class="text-decoration-none">contacto@doovate.com</a>
                            </div>
                        </div>

                        <div class="d-grid gap-2">
                            <Button href="mailto:contacto@doovate.com" color="success" size="lg">
                                <Icon name="calendar-check" class="me-2"/>
                                Agendar llamada
                            </Button>
                            <Button href="https://wa.me/XXXXXXXXXXX" target="_blank" color="outline-success" size="lg">
                                <Icon name="whatsapp" class="me-2"/>
                                Hablar por WhatsApp
                            </Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
</main>

<style>
    /* Smooth scroll behavior */
    :global(html) {
        scroll-behavior: smooth;
    }

    /* Altura mínima para la sección hero */
    .min-vh-50 {
        min-height: 50vh;
    }

    /* Efecto de sombra suave para imágenes */
    .drop-shadow {
        filter: drop-shadow(0 10px 25px rgba(0, 0, 0, 0.1));
    }

    /* Transiciones suaves para botones */
    :global(.btn) {
        transition: all 0.3s ease;
    }

    /* Hover effects para cards */
    :global(.card:hover) {
        transform: translateY(-2px);
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
        transition: all 0.3s ease;
    }

    /* Mejora visual del navbar */
    :global(#navbar .nav-link:hover) {
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 0.375rem;
        transition: background-color 0.3s ease;
    }

    /* Espaciado consistente entre secciones */
    section + section {
        margin-top: 5rem;
    }

    /* Loading spinner personalizado */
    .spinner-border-sm {
        width: 1rem;
        height: 1rem;
    }
</style>
