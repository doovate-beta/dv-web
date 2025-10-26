<script lang="ts">
    import {
        Button,
        Row,
        Col,
        Icon,
        Container,
        CardBody,
        Card
    } from '@sveltestrap/sveltestrap';
    import ContactSection from '$lib/ContactSection.svelte';

</script>

<svelte:head>
    <title>Doovate - Digitalizamos tu empresa con Odoo</title>
    <meta name="description"
          content="Implementamos y personalizamos Odoo, el ERP más completo del mercado, para digitalizar y optimizar todos los procesos de tu empresa.">
    <meta name="keywords" content="Odoo, ERP, CRM, digitalización empresarial, automatización">
</svelte:head>

<main class="container-fluid py-5 px-0 " style="width: 92%">
    <!-- Intro section -->
    <Container class="py-5 mb-5 mt-3">
        <Row class="align-items-center min-vh-50">
            <Col md={6} class="mb-4 mb-md-0">
                <h1 class="display-5 fw-bold text-body-emphasis mb-4">
                    Digitalizamos tu empresa con
                    <span>Odoo</span>
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

                </div>
            </Col>
            <Col md={6} class="text-center">
                <img
                        src="/Site Stats.svg"
                        alt="Imagen principal del sitio"
                        class="img-fluid rounded object-fit-cover"
                        loading="lazy"
                        style="max-height: 520px; width: 100%;"
                />
            </Col>
        </Row>
    </Container>

    <!-- Everywhere section -->
    <Container fluid class="py-5 bg-light w-100 rounded-5">
        <Row class="align-items-center justify-content-center gx-5 gy-4 px-4 px-md-5 px-lg-0">
            <!-- Image -->
            <Col xs={12} lg={4} class="order-lg-2 text-center">
                <div class="frost-card d-inline-block p-4"
                     style="--frost-radius: 28px; --frost-opacity: .92; --frost-brightness: 1; --frost-blur: 8px;">
                    <img
                            src="/Web devices.gif"
                            alt="Odoo en dispositivos móviles"
                            class="img-fluid"
                            style="max-width: 100%; height: auto;"
                            loading="lazy"
                    />
                </div>
            </Col>

            <!-- Content -->
            <Col xs={12} lg={6} class="order-lg-1 text-center text-lg-start">
                <div class="px-lg-4">
                    <h2 class="display-6 fw-bold text-body-emphasis mb-3">
                        Lleva tus herramientas a cualquier parte
                    </h2>
                    <p class="lead mb-4">
                        Accede a Odoo desde tu navegador en cualquier lugar.
                        Gestiona tu negocio desde escritorio, tablet o móvil
                        con la misma experiencia fluida y completa.
                    </p>
                    <Row class="g-3 justify-content-center justify-content-lg-start">
                        {#each [
                            {icon: 'bi bi-shield-check', text: '100% Seguro'},
                            {icon: 'bi bi-arrow-repeat', text: 'Siempre actualizado'},
                            {icon: 'bi bi-cloud-check', text: 'Sin instalaciones'},
                            {icon: 'bi bi-people', text: 'Multi-usuario'}
                        ] as feature}
                            <Col xs={6} sm={6}>
                                <div class="d-flex align-items-center justify-content-center justify-content-lg-start">
                                    <div class="text-primary me-3 flex-shrink-0">
                                        <i class="{feature.icon} fs-1"></i>
                                    </div>
                                    <span class="fw-medium text-start">{feature.text}</span>
                                </div>
                            </Col>
                        {/each}
                    </Row>
                </div>
            </Col>
        </Row>
    </Container>

    <!-- Steps section -->
    <Container style="scroll-margin-top: 100px;" class="py-5">
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
                <div class="rounded-5 shadow-lg p-4 bg-white">
                    <img
                            src="/Team work.gif"
                            alt="Módulos personalizables de Odoo"
                            class="img-fluid"
                            style="max-width: 100%;"
                            loading="lazy"
                    />
                </div>
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
                    icon: 'bi bi-gear',
                    title: 'Configuración flexible',
                    description: 'Adaptamos cada módulo a tus necesidades específicas'
                },
                {
                    icon: 'bi bi-award',
                    title: 'Equipo experto',
                    description: 'Desarrolladores certificados en Odoo'
                },
                {
                    icon: 'bi bi-headset',
                    title: 'Soporte continuo',
                    description: 'Acompañamiento durante todo el proceso'
                }
            ] as benefit}
                <Col md={4} class="text-center mb-4">
                    <div class="text-primary mb-3">
                        <i class="{benefit.icon} fs-1"></i>
                    </div>
                    <h5 class="fw-bold">{benefit.title}</h5>
                    <p class="text-muted">{benefit.description}</p>
                </Col>
            {/each}
        </Row>
    </Container>

    <!-- Sección Features -->
    <Container fluid class="py-5 bg-light w-100 rounded-5 ">
        <div class="text-center mb-5">
            <h2 class="display-6 fw-bold mb-4">Soluciones que impulsan tu operación</h2>
            <p class="lead text-muted mb-5">
                Personalización a medida, hosting rápido y seguro, e integraciones sin fricción.
            </p>
        </div>

        <Row class="g-4 mb-5 px-5">
            {#each [
                {
                    title: 'Personalización a medida',
                    description: 'Adaptamos Odoo a tus flujos: módulos, campos, reportes y automatizaciones según tu negocio.',
                    icon: 'bi bi-wrench'
                },
                {
                    title: 'Menos herramientas, más control',
                    description: 'Centraliza CRM, ventas, facturación, inventario y proyectos en una sola plataforma.',
                    icon: 'bi bi-diagram-3'
                },
                {
                    title: 'Hosting rápido y seguro',
                    description: 'Disponibilidad desde cualquier lugar, copias de seguridad y monitoreo continuo.',
                    icon: 'bi bi-cloud-check'
                },
                {
                    title: 'Integraciones',
                    description: 'Conecta ecommerce, contabilidad, logística y pasarelas de pago para un flujo sin fricciones.',
                    icon: 'bi bi-link-45deg'
                },
                {
                    title: 'Migración y datos seguros',
                    description: 'Traemos tu información a Odoo con procesos de validación y trazabilidad.',
                    icon: 'bi bi-database-check'
                },
                {
                    title: 'Acompañamiento end‑to‑end',
                    description: 'Descubrimiento, implementación, formación y soporte continuo para tu equipo.',
                    icon: 'bi bi-people-fill'
                }
            ] as feature}
                <Col md={6} lg={4}>
                    <Card class="h-100 border-0 shadow-sm">
                        <CardBody class="text-center">
                            <div class="text-primary mb-3">
                                <i class="{feature.icon} fs-1"></i>
                            </div>
                            <h5 class="fw-bold mb-3">{feature.title}</h5>
                            <p class="text-muted">{feature.description}</p>
                        </CardBody>
                    </Card>
                </Col>
            {/each}
        </Row>

        <!-- Comparación visual mejorada -->
        <Container class="p-4 p-md-5 frost-card"
                   style="--frost-radius: 18px; --frost-opacity: .96; --frost-brightness: 1; --frost-blur: 6px;">
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

    <!-- Sección Contact -->
    <ContactSection/>
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

    /* Tarjeta con fondo editable (radio, opacidad, brillo y blur) */
    .frost-card {
        --frost-radius: 16px;
        --frost-opacity: .9; /* 0–1 */
        --frost-brightness: 1; /* e.g., .9 a 1.2 */
        --frost-blur: 8px; /* e.g., 0px a 20px */

        border-radius: var(--frost-radius);
        background: rgba(255, 255, 255, var(--frost-opacity));
        -webkit-backdrop-filter: blur(var(--frost-blur)) brightness(var(--frost-brightness));
        backdrop-filter: blur(var(--frost-blur)) brightness(var(--frost-brightness));
        box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.08);
    }

    /* Espaciado consistente entre secciones */
    section + section {
        margin-top: 5rem;
    }
</style>
