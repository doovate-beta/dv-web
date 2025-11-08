<script lang="ts">
    import { onMount } from 'svelte';
    import { Button, Container, Row, Col, Icon, Card, CardBody } from '@sveltestrap/sveltestrap';

    // Optional: auto-redirect back home after a short delay
    const REDIRECT_SECONDS = 8;
    let secondsLeft = REDIRECT_SECONDS;

    onMount(() => {
        const interval = setInterval(() => {
            secondsLeft -= 1;
            if (secondsLeft <= 0) {
                clearInterval(interval);
                if (typeof window !== 'undefined') window.location.href = '/';
            }
        }, 1000);
    });
</script>

<svelte:head>
    <title>¡Gracias! | Doovate</title>
    <meta name="robots" content="noindex" />
    <meta name="description" content="Gracias por contactarnos. Hemos recibido tu mensaje y nos pondremos en contacto contigo muy pronto." />
</svelte:head>

<main class="container-fluid py-5 px-0" style="width: 92%">
    <Container class="py-5 mt-4">
        <Row class="justify-content-center">
            <Col md={10} lg={8}>
                <Card class="shadow-sm border-0">
                    <CardBody class="p-5 text-center">
                        <div class="mb-3">
                            <Icon name="check-circle-fill" class="text-success" style="font-size: 3rem;" />
                        </div>
                        <h1 class="fw-bold mb-3">¡Gracias por contactarnos!</h1>
                        <p class="lead text-muted mb-4">
                            Tu mensaje ha sido recibido correctamente. Nuestro equipo se pondrá en contacto contigo muy pronto.
                        </p>
                        <div class="d-grid d-sm-inline-flex gap-3 justify-content-center align-items-center">
                            <Button color="primary" size="lg" href="/">
                                <Icon name="house-fill" class="me-2"/>Volver al inicio
                            </Button>
                            <span class="text-muted small">Redirigiendo automáticamente en {secondsLeft}s…</span>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </Container>
</main>

<style>
    :global(.text-success) { color: #28a745 !important; }
</style>
