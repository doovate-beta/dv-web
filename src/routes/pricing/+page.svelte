<script lang="ts">
    // Pricing data structure (in case we want to render dynamically later)
    type Feature = string;
    type Plan = {
        name: string;
        price: string; // discounted price text (shown as actual)
        originalPrice: string; // original price 10% higher (shown strikethrough)
        specs: string;
        features: Feature[];
        highlight?: boolean;
    };

    const plans: Plan[] = [
        {
            name: 'Paquete básico',
            price: 'Desde 60€',
            originalPrice: 'Antes 66€',
            specs: '20 GB disco',
            features: [
                'Instalación limitada de módulos: los 4 más importantes (Ventas, Compras, Facturación, Inventario)',
                '1 backup diario con retención de 2 días',
                'Hasta 10 usuarios'
            ]
        },
        {
            name: 'Paquete medio',
            price: 'Desde 140€',
            originalPrice: 'Antes 154€',
            specs: '50 GB disco',
            highlight: true,
            features: [
                'Acceso a la suite completa de módulos de la versión Community de Odoo (20+ módulos)',
                '1 backup diario con retención de 3 días (ampliables)',
                'Hasta 30 usuarios',
                'Web para tu negocio conectada con los módulos de Odoo',
                'Personalización básica de módulos base de Odoo. Cada módulo se cotiza por hora e incluye mantenimiento posterior'
            ]
        },
        {
            name: 'Paquete plus',
            price: 'Desde 220€',
            originalPrice: 'Antes 242€',
            specs: '75 GB disco',
            features: [
                'Acceso a la suite completa de módulos de la versión Community de Odoo (20+ módulos)',
                '1 backup diario con retención de 6 días (ampliables)',
                'Hasta 60 usuarios',
                'Web para tu negocio conectada con los módulos de Odoo',
                'Personalización básica de módulos base de Odoo. Cada módulo se cotiza por hora e incluye mantenimiento posterior'
            ]
        }
    ];

    const extras: Feature[] = [
        'Migrar a Odoo Enterprise (premium) por 20€ por usuario',
        'Personalización de módulos según alcance (se cotiza)',
        'Incremento de recursos de la máquina con costo adicional',
        'Diseño de página web desde 100€ y mantenimiento desde 20€, basado en tráfico'
    ];
</script>

<section class="container py-5">
    <div class="text-center mb-5">
        <h1 class="display-5 fw-bold">Precios</h1>
        <p class="text-muted mb-0">Elige el plan que mejor se adapte a tu negocio. Todos los planes incluyen soporte
            básico.</p>
    </div>

    <div class="row g-4">
        {#each plans as plan, i}
            <div class="col-12 col-md-6 col-lg-4 d-flex reveal-up" style={`animation-delay: ${i * 120}ms`}>
                <div class={`card shadow-sm mx-1 flex-fill h-100 price-card ${plan.highlight ? 'featured' : ''}`}>
                    <div class="card-header bg-white border-0 pt-4 pb-0">
                        <h3 class="h4 mb-1">{plan.name}</h3>
                        <div class="text-muted">{plan.specs}</div>
                    </div>
                    <div class="card-body pt-3">
                        <div class="mb-2">
                            <span class="text-muted text-decoration-line-through small d-block">{plan.originalPrice}</span>
                        </div>
                        <div class="d-flex align-items-center gap-2 mb-3">
                            <span class="h2 mb-0">{plan.price}</span>
                            <span class="badge bg-primary">-10% ahora</span>
                        </div>
                        <ul class="list-unstyled m-0">
                            {#each plan.features as f}
                                <li class="d-flex gap-2 align-items-start mb-2">
                                    <span class="badge bg-primary"
                                          style="width: 0.6rem; height: 0.6rem; border-radius: 50%; padding:0;"></span>
                                    <span>{f}</span>
                                </li>
                            {/each}
                        </ul>
                    </div>
                    <div class="card-footer bg-white border-0 pb-4">
                        <a href="/contact" class="btn btn-primary w-100">Quiero este plan</a>
                    </div>
                    {#if plan.highlight}
                        <div class="best-choice-badge">BEST CHOICE</div>
                    {/if}
                </div>
            </div>
        {/each}
    </div>

    <div class="row mt-5">
        <div class="col-12 col-lg-10 mx-auto">
            <div class="card shadow-sm">
                <div class="card-header bg-white border-0 pt-4 pb-0 d-flex align-items-center justify-content-between">
                    <h3 class="h4 mb-0">Extras</h3>
                    <span class="badge bg-primary">Opcional</span>
                </div>
                <div class="card-body">
                    <div class="row g-3">
                        {#each extras as item}
                            <div class="col-12 col-md-6">
                                <div class="d-flex gap-2 align-items-start mb-2 bg-light p-3 rounded-3">
                                    <span class="text-primary">•</span>
                                    <span>{item}</span>
                                </div>
                            </div>
                        {/each}
                    </div>
                </div>
                <div class="card-footer bg-white border-0 pb-4">
                    <a href="/contact" class="btn btn-outline-primary">Solicitar cotización</a>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    /* Small helper to ensure cards stretch equally */
    .card .badge.bg-primary {
        background: var(--brand-gradient) !important;
    }

    /* Pricing card hover and gradient border effect */
    .price-card {
        position: relative;
        border: 1px solid rgba(0, 0, 0, 0.06);
        border-radius: 1rem;
        transition: transform 0.25s ease, box-shadow 0.25s ease, border-image 0.25s ease, border 0.25s ease;
        min-height: 560px; /* make the card taller to avoid cramped content */
    }

    .price-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 0.75rem 2rem rgba(0, 0, 0, 0.12);
        border: 2px solid transparent; /* required for border-image */
        border-image: var(--brand-gradient) 1;
        border-radius: 3rem;
    }

    /* Featured (Paquete medio) slightly larger to draw attention */
    .price-card.featured {
        transform: translateY(-4px) scale(1.08);
        z-index: 1;
        box-shadow: 0 0.75rem 2rem rgba(0, 0, 0, 0.12);
        border: 2px solid transparent; /* persistent gradient border for featured */
        border-image: var(--brand-gradient) 1;
        border-radius: 50px;
    }

    .price-card.featured:hover {
        transform: translateY(-10px) scale(1.06);
        border: 2px solid transparent;
        border-image: var(--brand-gradient) 1;
    }

    /* BEST CHOICE ribbon */
    .best-choice-badge {
        position: absolute;
        top: 12px;
        right: -10px;
        background: var(--brand-gradient);
        color: #fff;
        font-weight: 700;
        font-size: 0.75rem;
        padding: 6px 12px;
        border-top-left-radius: 999px;
        border-bottom-left-radius: 999px;
        letter-spacing: .5px;
        box-shadow: 0 6px 16px rgba(0, 0, 0, .15);
        transform: rotate(2deg);
        user-select: none;
        pointer-events: none;
    }

    /* Slide-in from bottom reveal */
    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(24px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .reveal-up {
        opacity: 0;
        animation: slideUp 600ms ease forwards;
    }

    @media (prefers-reduced-motion: reduce) {
        .reveal-up {
            opacity: 1 !important;
            animation: none !important;
            transform: none !important;
        }
    }

    @media (max-width: 576px) {
        .price-card {
            min-height: 500px;
        }
    }
</style>