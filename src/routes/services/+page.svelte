<script lang="ts">
    import {
        Card,
        CardBody,
        CardDeck,
        CardImg,
        CardText,
        CardTitle,
        Col,
        Container,
        Row
    } from "@sveltestrap/sveltestrap";

    const services =
        [
            {
                "title": "Personalización a medida",
                "description": "Transformamos Odoo en la herramienta perfecta para tu negocio. Diseñamos módulos, campos, reportes y automatizaciones que se ajustan exactamente a tus flujos de trabajo, para que tu equipo trabaje de forma más ágil y eficiente."
            },
            {
                "title": "Menos herramientas, más control",
                "description": "Despídete de múltiples aplicaciones y hojas de cálculo. Centraliza CRM, ventas, facturación, inventario y gestión de proyectos en una única plataforma, con datos siempre sincronizados y en tiempo real."
            },
            {
                "title": "Hosting rápido y seguro",
                "description": "Garantizamos que tu Odoo esté siempre disponible y protegido. Ofrecemos servidores optimizados, acceso desde cualquier lugar, copias de seguridad automáticas y monitoreo constante para máxima tranquilidad."
            },
            {
                "title": "Integraciones sin fricciones",
                "description": "Conecta tu ecommerce, contabilidad, logística y pasarelas de pago para que toda la información fluya sin interrupciones. Menos tareas manuales, menos errores y más tiempo para hacer crecer tu negocio."
            },
            {
                "title": "Migración y datos seguros",
                "description": "Importamos tu información desde sistemas anteriores con procesos de validación y trazabilidad en cada paso, para que no pierdas nada importante y empieces en Odoo con datos confiables."
            },
            {
                "title": "Acompañamiento end-to-end",
                "description": "Te guiamos en todo el camino: análisis de necesidades, implementación, formación de tu equipo y soporte continuo para garantizar que aproveches al máximo Odoo desde el primer día."
            }
        ]
</script>

<Container fluid>
    <Row>
        {#each services as service}
            <Col md={8} lg={4}>
                <Card>
                    <CardBody>
                        <CardImg src="/piezes.png"></CardImg>
                        <CardTitle>{service.title}</CardTitle>
                        <CardText>{service.description}</CardText>
                    </CardBody>
                </Card>
            </Col>
        {/each}
    </Row>
</Container>