<script lang="ts">
    import {
        Card,
        CardBody,
        CardText,
        CardTitle,
        Col,
        Container,
        Row,
        Button,
        Badge, Accordion, AccordionItem
    } from "@sveltestrap/sveltestrap";

    const services =
        [
            {
                "title": "Personalización a medida",
                "description": "Transformamos Odoo en la herramienta perfecta para tu negocio. Diseñamos módulos, campos, reportes y automatizaciones que se ajustan exactamente a tus flujos de trabajo, para que tu equipo trabaje de forma más ágil y eficiente. Realizamos análisis funcional, configuramos permisos por rol, creamos vistas y lógica específica e integramos KPIs y tableros con datos en tiempo real. Trabajamos de forma iterativa para reducir riesgos y acelerar el go‑live.",
                "icon": "🎯",
                "category": "Desarrollo"
            },
            {
                "title": "Menos herramientas, más control",
                "description": "Despídete de múltiples aplicaciones y hojas de cálculo. Centraliza CRM, ventas, facturación, inventario y proyectos en una única plataforma, con datos siempre sincronizados y en tiempo real. Unificamos procesos clave, definimos flujos de aprobación y estandarizamos la información para eliminar duplicidades. Obtén trazabilidad completa del ciclo comercial y operativo, y reportes consistentes que alinean a todo tu equipo.",
                "icon": "⚡",
                "category": "Integración"
            },
            {
                "title": "Hosting rápido y seguro",
                "description": "Garantizamos que tu Odoo esté siempre disponible y protegido. Servidores optimizados, acceso desde cualquier lugar, copias de seguridad automáticas y monitoreo constante. Implementamos hardening de seguridad, SSL, políticas de acceso y alertas proactivas, con escalabilidad según demanda. Incluye actualizaciones planificadas y pruebas de rendimiento para asegurar tiempos de respuesta estables.",
                "image": "/services/mancha.png",
                "icon": "🛡️",
                "category": "Infraestructura",
                "featured": true
            },
            {
                "title": "Integraciones sin fricciones",
                "description": "Conecta tu ecommerce, contabilidad, logística y pasarelas de pago para que la información fluya sin interrupciones. Diseñamos integraciones API‑first con colas y reintentos, mapeo de datos validado y monitoreo de eventos para detectar incidencias. Sincroniza productos, stock, pedidos y facturas con total trazabilidad entre sistemas y menos tareas manuales.",
                "icon": "🔗",
                "category": "Conectividad"
            },
            {
                "title": "Migración y datos seguros",
                "description": "Importamos tu información desde sistemas anteriores con validaciones y trazabilidad en cada paso, para que empieces en Odoo con datos confiables. Ejecutamos limpieza, normalización y deduplicación; definimos plantillas estándar y realizamos cargas piloto antes del traslado final. Entregamos reportes de calidad de datos y un plan de reversión para minimizar riesgos.",
                "icon": "📊",
                "category": "Migración"
            },
            {
                "title": "Acompañamiento end-to-end",
                "description": "Te guiamos en todo el camino: análisis de necesidades, implementación, formación de tu equipo y soporte continuo para garantizar resultados desde el primer día. Trabajamos con roadmap por fases, entregas quincenales y KPIs de adopción. Ofrecemos mesa de ayuda, manuales de uso, sesiones de entrenamiento por rol y mejoras evolutivas para que el sistema crezca con tu organización.",
                "icon": "🤝",
                "category": "Consultoría"
            }
        ]

</script>

<Container  sm class="services-section py-5 px-5 rounded-5 bg-light " style="width: 92%">
    <!-- Header de la sección -->
    <div class="text-center mb-5">
        <h2 class="display-5 fw-bold text-dark mb-3">
            ¿Qué ofrecemos?
        </h2>
        <p class="lead text-muted mx-auto services-subtitle">
            Soluciones de principio a fin para que Odoo impulse tu crecimiento
            con seguridad, velocidad y control.
        </p>
    </div>

    <!-- Grid de servicios -->
    <Row class="g-4 mb-5">
        {#each services as service, index}
            <Col xs={12} md={6} lg={4}>
                <Card class="service-card h-100 {service.featured ? 'featured-card' : ''}">
                    <!-- Header de la tarjeta -->
                    <div class="card-header-section">
                        {#if service.image}
                            <div class="image-container position-relative">
                                <img
                                        src={service.image}
                                        alt={service.title}
                                        class="service-image w-100 h-100"
                                        loading="lazy"
                                />
                                <div class="image-overlay">
                                    <span class="service-icon-overlay">{service.icon}</span>
                                </div>
                            </div>
                        {:else}
                            <div class="icon-header d-flex flex-column align-items-center justify-content-center">
                                <span class="service-icon mb-2">{service.icon}</span>
                                <Badge color="light" class="category-badge">
                                    {service.category}
                                </Badge>
                            </div>
                        {/if}
                    </div>

                    <CardBody class="p-4 d-flex flex-column">
                        <div class="flex-grow-1">
                            <CardTitle class="h5 mb-3 text-dark">
                                {service.title}
                            </CardTitle>
                            <CardText class="text-muted service-description">
                                {service.description}
                            </CardText>
                        </div>

                        <div class="mt-3">
                            <Button
                                    color="outline-primary"
                                    size="sm"
                                    class="service-btn w-100"
                                    href="/contact"
                            >
                                Saber más
                                <i class="bi bi-arrow-right ms-1"></i>
                            </Button>
                        </div>
                    </CardBody>

                    {#if service.featured}
                        <div class="featured-badge position-absolute">
                            <i class="bi bi-star-fill"></i>
                        </div>
                    {/if}
                </Card>
            </Col>
        {/each}
    </Row>

    <!-- Call to Action simple -->
    <div class="text-center">
        <div class="cta-section p-4 rounded-3 bg-light border">
            <h3 class="h4 mb-3 text-dark">
                ¿Quieres saber más sobre nuestros servicios?
            </h3>
            <p class="text-muted mb-4">
                Contáctanos para una consulta personalizada y descubre cómo podemos
                ayudarte a optimizar tu negocio con Odoo.
            </p>
            <Button color="primary" size="lg" class="cta-button">
                <i class="bi bi-calendar-check me-2"></i>
                Agenda una consulta
            </Button>
        </div>
    </div>
</Container>

<style>
    .services-section {
        background-color: #f8f9fa;
    }

    .services-badge {
        font-size: 0.875rem;
        padding: 0.5rem 1rem;
        border-radius: 50px;
        font-weight: 500;
    }

    .services-subtitle {
        max-width: 700px;
        font-size: 1.1rem;
        line-height: 1.6;
    }

    .service-card {
        border: none;
        border-radius: 1rem;
        box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
        transition: all 0.3s ease;
        background: white;
        overflow: hidden;
        position: relative;
    }

    .service-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 0.75rem 2rem rgba(0, 0, 0, 0.12);
    }

    .featured-card {
        box-shadow: 0 0.5rem 1.5rem rgba(13, 110, 253, 0.15);
        border: 1px solid rgba(13, 110, 253, 0.1);
    }

    .featured-card:hover {
        box-shadow: 0 1rem 3rem rgba(13, 110, 253, 0.2);
    }

    .card-header-section {
        height: 200px;
        position: relative;
    }

    .image-container {
        height: 100%;
        overflow: hidden;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }

    .service-image {
        object-fit: cover;
        transition: transform 0.5s ease;
    }

    .service-card:hover .service-image {
        transform: scale(1.05);
    }

    .image-overlay {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: rgba(255, 255, 255, 0.95);
        border-radius: 50%;
        width: 3rem;
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
    }

    .service-icon-overlay {
        font-size: 1.25rem;
    }

    .icon-header {
        background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
        height: 100%;
    }

    .service-icon {
        font-size: 3rem;
        line-height: 1;
    }

    .category-badge {
        font-size: 0.75rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        color: #6c757d;
    }

    .service-description {
        font-size: 0.95rem;
        line-height: 1.6;
    }

    .service-btn {
        border-radius: 0.5rem;
        font-weight: 500;
        transition: all 0.2s ease;
        border-width: 1.5px;
    }

    .service-btn:hover {
        transform: translateY(-1px);
        box-shadow: 0 0.25rem 0.5rem rgba(13, 110, 253, 0.25);
    }

    .featured-badge {
        top: 1rem;
        left: 1rem;
        background: #ffc107;
        color: white;
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1rem;
        box-shadow: 0 0.25rem 0.5rem rgba(255, 193, 7, 0.4);
        z-index: 10;
    }

    .cta-section {
        background: linear-gradient(135deg, #ffffff 0%, #f1f3f4 100%);
        border: 1px solid #e9ecef;
    }

    .cta-button {
        border-radius: 0.5rem;
        font-weight: 600;
        padding: 0.75rem 2rem;
        transition: all 0.2s ease;
    }

    .cta-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 0.5rem 1rem rgba(13, 110, 253, 0.25);
    }

    /* Responsive */
    @media (max-width: 768px) {
        .services-subtitle {
            font-size: 1rem;
        }

        .card-header-section {
            height: 160px;
        }

        .service-icon {
            font-size: 2.5rem;
        }

        .display-5 {
            font-size: 2rem;
        }
    }

    @media (min-width: 992px) {
        .services-section {
            padding-left: 2rem;
            padding-right: 2rem;
        }
    }
</style>

