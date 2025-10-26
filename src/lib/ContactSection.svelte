<script lang="ts">
    import {onMount} from 'svelte';
    import {
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

    let validated = $state(false);
    let isSubmitting = $state(false);
    let nextUrlInput: HTMLInputElement | null = null;

    // Mantener placeholder por si en el futuro se usa envío manual
    const handleSubmit = async (e: Event) => {
        e.preventDefault();
        if (isSubmitting) return;

        validated = true;
        const form = e.target as HTMLFormElement;

        if (form.checkValidity()) {
            isSubmitting = true;
            await new Promise((resolve) => setTimeout(resolve, 1000));
            isSubmitting = false;
        }
    };

    onMount(() => {
        // Asegura que FormSubmit redirija a nuestro dominio absoluto
        try {
            if (typeof window !== 'undefined' && nextUrlInput) {
                nextUrlInput.value = `${window.location.origin}/gracias`;
            }
        } catch {
        }
    });
</script>

<!-- Sección Contact (reusable) -->
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
                        <Form {validated} action="https://formsubmit.co/sysadmin@doovate.com" method="POST">
                            <!-- FormSubmit configuration -->
                            <input type="hidden" name="_subject" value="Nuevo mensaje desde doovate.com"/>
                            <input type="hidden" name="_template" value="table"/>
                            <input type="hidden" name="_captcha" value="false"/>
                            <input type="text" name="_honey" style="display:none" tabindex="-1" autocomplete="off"/>
                            <!-- Redirect after submit: set dynamically to absolute /gracias URL for FormSubmit -->
                            <input type="hidden" name="_next" value="/gracias" bind:this={nextUrlInput}/>
                            <Row class="g-3">
                                <Col md={6}>
                                    <FormGroup floating label="Nombre">
                                        <Input
                                                name="name"
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
                                                name="email"
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
                                                name="phone"
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
                                                name="company"
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
                                                name="message"
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
                                <strong>Doovate C.B. </strong><br>
                                Dirección completa<br>
                                Ciudad, Estado, CP
                            </div>
                        </div>
                        <div class="d-flex mb-3">
                            <Icon name="telephone-fill" class="text-primary me-3 mt-1"/>
                            <a href="tel:613289829" class="text-decoration-none">613 489 829</a>
                        </div>
                        <div class="d-flex mb-4">
                            <Icon name="envelope-fill" class="text-primary me-3 mt-1"/>
                            <a href="mailto:sysadmin@doovate.com" class="text-decoration-none">sysadmin@doovate.com</a>
                        </div>
                    </div>

                    <div class="d-grid gap-2">

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

<style>
    /* Loading spinner personalizado para este componente */
    .spinner-border-sm {
        width: 1rem;
        height: 1rem;
    }
</style>
