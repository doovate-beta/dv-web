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
        Form, FormGroup, Input, Button, Row, Col, Icon, Container
    } from '@sveltestrap/sveltestrap';

    let isNavbarOpen = $state(false);

    let validated = $state(false);

    // const largeScreen = $derived(innerWidth.current > 800);

    const getIsDesktop = getContext<() => boolean>('getIsDesktop');
    const largeScreen = $derived(getIsDesktop());


    onMount(() => {
        import('bootstrap').then(({ScrollSpy}) => {
            new ScrollSpy(document.body, {
                target: '#navbar',
                offset: 100
            });
        });
    });
</script>


<Navbar id="navbar" sticky="top" container="sm" class="pb-0 pt-3" style="background-color: #977acd;">
    {#if !largeScreen}

        <NavbarBrand class="me-auto">
            <div style="display: flex">
                <img src="/dv_logo.png" alt="Doovate logo" style="height: 30px">
                <p>Doovate</p>
            </div>
        </NavbarBrand>
        <NavbarToggler class="mb-3" on:click={() => isNavbarOpen = !isNavbarOpen} aria-expanded={isNavbarOpen}/>

        <Collapse navbar isOpen={isNavbarOpen}>
            <Nav pills>
                <NavItem>
                    <NavLink href="#intro">Intro</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#features">Soluciones</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#contact">Contacto</NavLink>
                </NavItem>
            </Nav>
        </Collapse>
    {/if}
    {#if largeScreen}
        <Nav pills>
            <NavbarBrand>
                <div style="display: flex">
                    <img src="/dv_logo.png" alt="Doovate logo" style="height: 30px">
                    <p>Doovate</p>
                </div>
            </NavbarBrand>
            <NavItem>
                <NavLink href="#intro">Inicio</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#features">Soluciones</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#contact">Contacto</NavLink>
            </NavItem>
        </Nav>
    {/if}

</Navbar>

<main class="container py-5">
    <section id="intro" style="scroll-margin-top: 50px;">
        <div class="px-4 py-5 mb-5 mt-3 text-center">
            <h1 class="display-5 fw-bold text-body-emphasis">Digitalizamos tu empresa con Odoo</h1>
            <div class="col-lg-8 mx-auto">
                <p class="lead mb-4">
                    Implementamos y personalizamos Odoo para que tus procesos trabajen en un solo lugar:
                    CRM, ventas, facturación, inventario, proyectos, RR. HH. y más. Menos herramientas, más control.
                </p>
                <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <a href="#contact" class="btn btn-primary btn-lg px-4 gap-3">Habla con un experto</a>
                    <a href="#features" class="btn btn-outline-secondary btn-lg px-4">Ver demo</a>
                </div>
            </div>
        </div>
    </section>
    <section id="features" style="scroll-margin-top: 100px;">
        <h2 class="text-center mb-4">Soluciones que impulsan tu operación</h2>
        <p class="text-center text-muted mb-5">Personalización a medida, hosting rápido y seguro, e integraciones sin
            fricción.</p>

        <div class="row g-4">
            <div class="col-12 col-md-6 col-lg-4">
                <div class="h-100 p-4 border rounded-3">
                    <h5>Personalización a medida</h5>
                    <p>Adaptamos Odoo a tus flujos: módulos, campos, reportes y automatizaciones según tu negocio.</p>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
                <div class="h-100 p-4 border rounded-3">
                    <h5>Menos herramientas, más control</h5>
                    <p>Centraliza CRM, ventas, facturación, inventario y proyectos en una sola plataforma.</p>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
                <div class="h-100 p-4 border rounded-3">
                    <h5>Hosting rápido y seguro</h5>
                    <p>Disponibilidad desde cualquier lugar, copias de seguridad y monitoreo continuo.</p>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
                <div class="h-100 p-4 border rounded-3">
                    <h5>Integraciones</h5>
                    <p>Conecta ecommerce, contabilidad, logística y pasarelas de pago para un flujo sin fricciones.</p>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
                <div class="h-100 p-4 border rounded-3">
                    <h5>Migración y datos seguros</h5>
                    <p>Traemos tu información a Odoo con procesos de validación y trazabilidad.</p>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
                <div class="h-100 p-4 border rounded-3">
                    <h5>Acompañamiento end‑to‑end</h5>
                    <p>Descubrimiento, implementación, formación y soporte continuo para tu equipo.</p>
                </div>
            </div>
        </div>

        {#if largeScreen}
            <Container fluid class="mt-5 p-4 p-md-5 bg-light rounded-3">
                <div class="row align-items-center">
                    <div class="col-md-8">
                        <h3 class="mb-3">Menos herramientas. Más resultados.</h3>
                        <p class="mb-0">Antes: hojas de cálculo + CRM + facturación + inventario + proyectos…<br/>Después:
                            todo en Odoo, con datos consistentes y reportes claros.</p>
                    </div>
                    <div class="row g-3 mt-4 align-content-center">
                        <div class="logo-circle col-3">
                            <img class="logo" style="--angle: 0deg" src="/trello_logo.png" alt="Trello logo"/>
                            <img class="logo" style="--angle: 51deg" src="/asana_logo.png" alt="Asana logo"/>
                            <img class="logo" style="--angle: 102deg" src="/asana_logo.png" alt="Asana logo"/>
                            <img class="logo" style="--angle: 154deg" src="/notion_logo.png" alt="Notion logo"/>
                            <img class="logo" style="--angle: 205deg" src="/quickbooks_logo.png" alt="Quickbooks logo"/>
                            <img class="logo" style="--angle: 257deg" src="/dropbox_logo.png" alt="Dropbox logo"/>
                            <img class="logo" style="--angle: 308deg" src="/docusign_logo.png" alt="Docusign logo"/>
                        </div>
                        <div class="col-3 align-content-center text-center">
                            <p style="font-size: 100px">↔</p>
                        </div>
                        <div class="logo-circle col-3 align-content-center ms-5">
                            <img src="/oodo_logo.png" alt="Odoo logo" style="width: 300px; height: auto;"/>
                        </div>
                    </div>
                </div>
            </Container>
        {:else}
            <Container fluid class="mt-5 p-4 p-md-5 bg-light rounded-3">
                <div class="row align-items-center">
                    <div class="col-md-8">
                        <h3 class="mb-3">Menos herramientas. Más resultados.</h3>
                        <p class="mb-0">Antes: hojas de cálculo + CRM + facturación + inventario + proyectos…<br/>Después:
                            todo en Odoo, con datos consistentes y reportes claros.</p>
                    </div>
                    <div class="row g-3 mt-4 align-content-center">
                        <Container fluid class="mt-5 p-4 p-md-5 bg-light rounded-3">
                            <Row class="align-items-center">
                                <Col md="8" lg="7" class="text-center text-md-start">
                                    <h3 class="mb-3">Menos herramientas. Más resultados.</h3>
                                    <p>Centraliza tu flujo de trabajo</p>
                                </Col>

                                <Col xs="12" class="mt-4">
                                    <Row class="g-3 justify-content-center align-items-center">
                                        <!-- Bloque de logos “en círculo” -->
                                        <Col xs="12" md="5" class="order-2 order-md-1">
                                            <Row class="g-3 text-center">
                                                <Col xs="4">
                                                    <div class="p-2 bg-white rounded shadow-sm d-flex justify-content-center align-items-center"
                                                         style="height: 72px;">
                                                        <img src="/dropbox_logo.png" alt="Dropbox logo"
                                                             class="img-fluid" style="max-height: 48px;"/>
                                                    </div>
                                                </Col>
                                                <Col xs="4">
                                                    <div class="p-2 bg-white rounded shadow-sm d-flex justify-content-center align-items-center"
                                                         style="height: 72px;">
                                                        <img src="/trello_logo.png" alt="Trello logo" class="img-fluid"
                                                             style="max-height: 48px;"/>
                                                    </div>
                                                </Col>
                                                <Col xs="4">
                                                    <div class="p-2 bg-white rounded shadow-sm d-flex justify-content-center align-items-center"
                                                         style="height: 72px;">
                                                        <img src="/docusign_logo.png" alt="Docusign logo"
                                                             class="img-fluid" style="max-height: 48px;"/>
                                                    </div>
                                                </Col>

                                                <Col xs="4">
                                                    <div class="p-2 bg-white rounded shadow-sm d-flex justify-content-center align-items-center"
                                                         style="height: 72px;">
                                                        <img src="/asana_logo.png" alt="Asana logo" class="img-fluid"
                                                             style="max-height: 48px;"/>
                                                    </div>
                                                </Col>
                                                <Col xs="4" class="d-flex align-items-center justify-content-center">
                                                    <!-- Centro vacío para simular círculo -->
                                                </Col>
                                                <Col xs="4">
                                                    <div class="p-2 bg-white rounded shadow-sm d-flex justify-content-center align-items-center"
                                                         style="height: 72px;">
                                                        <img src="/notion_logo.png" alt="Notion logo" class="img-fluid"
                                                             style="max-height: 48px;"/>
                                                    </div>
                                                </Col>

                                                <Col xs="4" class="d-none d-sm-block">
                                                    <!-- Hueco inferior-izquierda -->
                                                </Col>
                                                <Col xs="4">
                                                    <div class="p-2 bg-white rounded shadow-sm d-flex justify-content-center align-items-center"
                                                         style="height: 72px;">
                                                        <img src="/quickbooks_logo.png" alt="Quickbooks logo"
                                                             class="img-fluid" style="max-height: 48px;"/>
                                                    </div>
                                                </Col>
                                                <Col xs="4" class="d-none d-sm-block">
                                                    <!-- Hueco inferior-derecha -->
                                                </Col>
                                            </Row>
                                        </Col>

                                        <!-- Flecha -->
                                        <Col xs="12" md="2"
                                             class="d-none d-md-flex justify-content-center order-1 order-md-2">
                                            <div class="display-4" aria-hidden="true">→</div>
                                        </Col>

                                        <!-- Logo Odoo -->
                                        <Col xs="12" md="5" class="order-3 text-center">
                                            <div class="p-3 bg-white rounded shadow-sm d-inline-flex">
                                                <img src="/oodo_logo.png" alt="Odoo logo" class="img-fluid"
                                                     style="max-width: 240px; height: auto;"/>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </Container>
        {/if}
    </section>

    <section id="contact" class="mt-5" style="scroll-margin-top: 100px;">
        <div class="text-center mb-4">
            <h2>¿Listo para comenzar?</h2>
            <p class="text-muted">Agenda una llamada y recibe una propuesta adaptada a tu negocio.</p>
        </div>
        <Row>
            <Col>
                <Form {validated} on:submit={(e) => e.preventDefault()}>
                    <FormGroup floating label="Nombre">
                        <Input feedback="Por favor ingresa tu nombre" placeholder="Nombre" required/>
                    </FormGroup>
                    <FormGroup floating label="Correo electrónico">
                        <Input placeholder="Correo electrónico"
                               feedback="Por favor ingresa un correo electrónico válido"
                               required type="email"/>
                    </FormGroup>
                    <FormGroup floating label="Teléfono">
                        <Input placeholder="Teléfono" feedback="Por favor ingresa un teléfono válido" required
                               type="tel"/>
                    </FormGroup>
                    <FormGroup floating label="Empresa">
                        <Input placeholder="Empresa" feedback="Por favor ingresa tu empresa" required/>
                    </FormGroup>
                    <FormGroup floating label="Mensaje">
                        <Input style="min-height: 200px" type="textarea" placeholder="Mensaje"
                               feedback="Por favor ingresa un mensaje" required/>
                    </FormGroup>
                    <Button type="submit" style="width: 300px" on:click={() => validated = true}>Enviar</Button>
                </Form>
            </Col>
            <Col>
                <div>
                    <h3>¿Dónde encontrarnos?</h3>
                    <div style="display: flex">
                        <Icon class="pe-3" name="geo-alt-fill"/>
                        <p>
                            Doovate S.A. de C.V.<br/>
                            Etc...
                        </p>
                    </div>
                    <div style="display: flex">
                        <Icon class="pe-3" name="telephone-fill"/>
                        <p>676765765</p>
                    </div>
                    <div style="display: flex">
                        <Icon class="pe-3" name="envelope-fill"/>
                        <p>correo@ejemplo.com</p>
                    </div>
                </div>
            </Col>
        </Row>
        <div class="d-flex justify-content-center mt-5">
            <a href="mailto:contacto@doovate.com" class="btn btn-success btn-lg me-2">Agendar llamada</a>
            <a href="https://wa.me/XXXXXXXXXXX" target="_blank" class="btn btn-outline-success btn-lg">Hablar por
                WhatsApp</a>
        </div>
    </section>
</main>

<style>

    /* Ajusta el tamaño total del círculo y el radio aquí */
    .logo-circle {
        position: relative;
        width: 280px; /* diámetro del círculo */
        height: 280px;
        margin: 0 auto; /* centrar */
    }

    .logo-circle .logo {
        position: absolute;
        top: 50%;
        left: 50%;
        /* radio al que se separan del centro (diámetro/2 - mitad del tamaño del logo) */
        --radius: 105px;

        /* Técnica de “rotate → translate → rotate back” para distribución circular */
        transform: rotate(var(--angle)) translate(var(--radius)) rotate(calc(-1 * var(--angle)));

        /* Tamaño de cada logo (ajústalo a tu gusto) */
        height: 48px;
        width: auto;

        /* Centrado exacto en su punto de anclaje */
        transform-origin: center center;
    }

    /* Opcional: adaptación responsiva */
    @media (max-width: 576px) {
        .logo-circle {
            width: 220px;
            height: 220px;
        }

        .logo-circle .logo {
            --radius: 80px;
            height: 40px;
        }
    }
</style>
