/**
 * Negocio Listo — Landing Page Script
 * Language toggle, FAQ accordion, micro-animations, CTA tracking
 */

// ============================================
// Translations
// ============================================

const translations = {
    es: {
        // Nav
        nav_services: 'Servicios',
        nav_how: 'Cómo Funciona',
        nav_compare: 'Comparación',
        nav_faq: 'Preguntas',
        nav_contact: 'Contacto',

        // Hero
        hero_badge: 'Servicio bilingüe de confianza en Texas',
        hero_headline: 'Hazlo Oficial. Nosotros Hacemos el Papeleo, Tú Haces Negocio.',
        hero_subheadline: 'Formación de LLC en Texas — rápido, bilingüe, sin complicaciones. Precio fijo de $597, sin sorpresas.',
        cta_start: 'Empieza Ahora',
        cta_whatsapp: 'Pregunta en WhatsApp',
        hero_trust: 'Servicio bilingüe \u2022 Precio fijo \u2022 Sin cargos ocultos',

        // Problem
        problem_headline: 'Sabemos lo frustrante que es\u2026',
        problem_1_title: 'Formularios confusos en inglés',
        problem_1_desc: 'Los formularios del gobierno están en inglés y el lenguaje legal es intimidante.',
        problem_2_title: 'Miedo a cometer errores costosos',
        problem_2_desc: 'Un campo incorrecto = rechazo + tarifas perdidas. No puedes darte ese lujo.',
        problem_3_title: '\u201CNotarios\u201D que cobran de más',
        problem_3_desc: 'Operadores sin licencia cobrando $1,500+ por un trámite de $300.',
        problem_4_title: 'No saber por dónde empezar',
        problem_4_desc: '\u00BFtLLC? \u00BFDBA? \u00BFEIN? \u00BFOperating Agreement? Es abrumador.',
        problem_callout: 'No necesitas un abogado para formar tu LLC. Necesitas a alguien que sepa exactamente cómo hacerlo.',

        // Solution
        solution_headline: 'Todo lo que necesitas para formar tu LLC \u2014 en un solo paquete',
        price_label: 'Precio fijo \u2022 Sin sorpresas',
        feat_1_title: 'LLC Certificate of Formation (Form 205)',
        feat_1_desc: 'Presentado ante la Secretaría de Estado de Texas',
        feat_2_title: 'EIN (Número de Identificación Federal)',
        feat_2_desc: 'Lo solicitamos en tu nombre ante el IRS',
        feat_3_title: 'Operating Agreement (Acuerdo Operativo)',
        feat_3_desc: 'Plantilla de autoayuda para miembro único',
        feat_4_title: 'Checklist de pasos siguientes',
        feat_4_desc: 'Guía post-formación para que no te pierdas',
        feat_5_title: 'Servicio completamente bilingüe',
        feat_5_desc: 'Inglés + Español en cada paso del proceso',
        state_fee_note: 'La tarifa estatal de $300 se paga directamente al estado (separada de nuestro servicio).',
        package_highlight: 'Precio fijo. Sin sorpresas. Sin contratos a largo plazo.',
        cta_form_llc: 'Forma Tu LLC Hoy',

        // How it works
        how_headline: 'Cómo Funciona',
        how_subtitle: '4 pasos simples para formalizar tu negocio',
        step_1_title: 'Llena el formulario',
        step_1_desc: 'Completa nuestro formulario de ingreso en línea. Solo toma 5 minutos.',
        step_2_title: 'Llamada de confirmación',
        step_2_desc: 'Una llamada rápida para verificar detalles y recoger información sensible de forma segura.',
        step_3_title: 'Nosotros presentamos todo',
        step_3_desc: 'Presentamos ante la Secretaría de Estado de TX + solicitamos tu EIN con el IRS.',
        step_4_title: 'Recibe tus documentos',
        step_4_desc: 'Certificado de LLC, carta de EIN, plantilla de OA, y guía de pasos siguientes.',
        timeline_badge: 'Tu LLC lista en 5\u20137 días hábiles',

        // Comparison
        compare_headline: '\u00BFPor qué Negocio Listo?',
        compare_subtitle: 'Ellos te venden una plantilla. Nosotros te guiamos paso a paso.',
        col_nl: 'Negocio Listo',
        col_lz: 'LegalZoom',
        col_notario: 'Notario / Doc Prep',
        col_diy: 'Hacerlo Solo',
        row_price: 'Precio',
        row_price_diy: '$300 (solo tarifa estatal)',
        row_bilingual: 'Bilingüe',
        row_bilingual_notario: 'A veces',
        row_personal: 'Servicio Personal',
        row_speed: 'Rapidez',
        speed_nl: '5\u20137 días',
        speed_lz: '7\u201330 días',
        speed_notario: 'Varía',
        speed_diy: 'Si no hay errores',
        row_hidden: 'Cargos Ocultos',
        hidden_notario: 'Común',
        row_whatsapp: 'Soporte WhatsApp',

        // Trust
        trust_headline: 'Quién Está Detrás de Negocio Listo',
        trust_bio: 'Ricardo Gattas-Moras, fundador de Poppy Marketing & Consulting LLC, creó Negocio Listo para servir a la comunidad hispana emprendedora en Texas. Con experiencia en operaciones de negocios y marketing digital, entendemos lo que necesitas para empezar \u2014 y los obstáculos que te frenan.',
        trust_1: 'Servicio de Poppy Marketing & Consulting LLC',
        trust_2: 'Basados en Katy, TX \u2014 conocemos el mercado local',
        trust_3: 'No somos abogados \u2014 somos preparadores de documentos con experiencia',
        disclaimer: 'Negocio Listo es un servicio de preparación de documentos. No somos abogados ni notarios públicos. No proporcionamos asesoría legal. Este servicio se ofrece bajo las disposiciones del TX Gov Code \u00A7406.017.',

        // FAQ
        faq_headline: 'Preguntas Frecuentes',
        faq_1_q: '\u00BFCuánto cuesta formar una LLC?',
        faq_1_a: 'Nuestro servicio cuesta $597 (precio fijo). Además, el estado de Texas cobra una tarifa de $300 que se paga directamente al estado. Total: $897.',
        faq_2_q: '\u00BFCuánto tiempo tarda?',
        faq_2_a: 'Generalmente 5 a 7 días hábiles después de recibir toda tu información.',
        faq_3_q: '\u00BFNecesito un número de seguro social?',
        faq_3_a: 'No necesariamente. Manejamos solicitudes con ITIN a través de la vía de fax con el IRS.',
        faq_4_q: '\u00BFEs lo mismo que un notario?',
        faq_4_a: 'No. NO somos notarios públicos. Somos preparadores de documentos legales. No damos asesoría legal.',
        faq_5_q: '\u00BFQué pasa si mi nombre es rechazado?',
        faq_5_a: 'Volvemos a presentar con un nuevo nombre. Solo pagas la nueva tarifa estatal si aplica. Nuestro servicio no tiene cargo adicional.',
        faq_6_q: '\u00BFPuedo formar mi LLC si no tengo papeles?',
        faq_6_a: 'La formación de la LLC en sí no requiere estatus migratorio. Sin embargo, para el EIN puede ser necesario un ITIN o SSN. Hablemos de tu situación específica.',
        faq_7_q: '\u00BFNecesito un abogado?',
        faq_7_a: 'Para la formación básica de una LLC, no. Para situaciones complejas (múltiples socios, propiedad intelectual, etc.), te referimos a un abogado.',
        faq_8_q: '\u00BFQué incluye el paquete?',
        faq_8_a: 'Incluye: presentación del Certificate of Formation (Form 205) ante TX SOS, solicitud de EIN ante el IRS, plantilla de Operating Agreement, y guía de pasos siguientes post-formación. Todo en servicio bilingüe.',

        // Final CTA
        final_headline: 'Tu negocio merece ser oficial.',
        final_subline: 'Empieza hoy. Recibe tu LLC en días, no semanas.',
        cta_whatsapp_write: 'Escríbenos por WhatsApp',

        // Footer
        footer_tagline: 'Formación de LLC en Texas. Rápido, bilingüe, sin complicaciones.',
        footer_links: 'Enlaces',
        footer_contact: 'Contacto',
        footer_legal: 'Legal',
        footer_privacy: 'Política de Privacidad',
        footer_terms: 'Términos de Servicio',
        footer_disclaimer: 'Negocio Listo es un servicio de preparación de documentos operado por Poppy Marketing & Consulting LLC. No somos abogados ni notarios públicos. No proporcionamos asesoría legal.',
        footer_disclaimer_en: 'Negocio Listo is a document preparation service operated by Poppy Marketing & Consulting LLC. We are not attorneys or notaries public. We do not provide legal advice.',
    },

    en: {
        // Nav
        nav_services: 'Services',
        nav_how: 'How It Works',
        nav_compare: 'Compare',
        nav_faq: 'FAQ',
        nav_contact: 'Contact',

        // Hero
        hero_badge: 'Trusted bilingual service in Texas',
        hero_headline: 'Make It Official. We Handle the Paperwork, You Handle the Business.',
        hero_subheadline: 'Texas LLC Formation \u2014 fast, bilingual, no hassle. Flat rate $597, no surprises.',
        cta_start: 'Get Started Now',
        cta_whatsapp: 'Ask on WhatsApp',
        hero_trust: 'Bilingual service \u2022 Flat rate \u2022 No hidden fees',

        // Problem
        problem_headline: 'We know how frustrating it is\u2026',
        problem_1_title: 'Confusing forms in English',
        problem_1_desc: 'Government forms are in English and the legal jargon is intimidating.',
        problem_2_title: 'Fear of making costly mistakes',
        problem_2_desc: 'One wrong field = rejection + lost fees. You can\u2019t afford that.',
        problem_3_title: '\u201CNotarios\u201D who overcharge',
        problem_3_desc: 'Unlicensed operators charging $1,500+ for a $300 filing.',
        problem_4_title: 'Not knowing where to start',
        problem_4_desc: 'LLC? DBA? EIN? Operating Agreement? It\u2019s overwhelming.',
        problem_callout: 'You don\u2019t need a lawyer to form your LLC. You need someone who knows exactly how to do it.',

        // Solution
        solution_headline: 'Everything you need to form your LLC \u2014 in one package',
        price_label: 'Flat rate \u2022 No surprises',
        feat_1_title: 'LLC Certificate of Formation (Form 205)',
        feat_1_desc: 'Filed with the Texas Secretary of State',
        feat_2_title: 'EIN (Federal Tax ID Number)',
        feat_2_desc: 'We apply on your behalf with the IRS',
        feat_3_title: 'Operating Agreement Template',
        feat_3_desc: 'Self-help packet for single-member LLC',
        feat_4_title: 'Post-formation checklist',
        feat_4_desc: 'Next steps guide so you don\u2019t miss anything',
        feat_5_title: 'Fully bilingual service',
        feat_5_desc: 'English + Spanish at every step of the process',
        state_fee_note: 'The $300 state filing fee is paid directly to the state (separate from our service fee).',
        package_highlight: 'Flat rate. No surprises. No long-term contracts.',
        cta_form_llc: 'Form Your LLC Today',

        // How it works
        how_headline: 'How It Works',
        how_subtitle: '4 simple steps to formalize your business',
        step_1_title: 'Fill out the form',
        step_1_desc: 'Complete our online intake form. It only takes 5 minutes.',
        step_2_title: 'Confirmation call',
        step_2_desc: 'A quick call to verify details and securely collect sensitive information.',
        step_3_title: 'We file everything',
        step_3_desc: 'We file with TX Secretary of State + apply for your EIN with the IRS.',
        step_4_title: 'Receive your documents',
        step_4_desc: 'LLC certificate, EIN letter, OA template, and next steps guide delivered.',
        timeline_badge: 'Your LLC ready in 5\u20137 business days',

        // Comparison
        compare_headline: 'Why Negocio Listo?',
        compare_subtitle: 'They sell you a template. We guide you step by step.',
        col_nl: 'Negocio Listo',
        col_lz: 'LegalZoom',
        col_notario: 'Notario / Doc Prep',
        col_diy: 'Do It Yourself',
        row_price: 'Price',
        row_price_diy: '$300 (state fee only)',
        row_bilingual: 'Bilingual',
        row_bilingual_notario: 'Sometimes',
        row_personal: 'Personal Service',
        row_speed: 'Speed',
        speed_nl: '5\u20137 days',
        speed_lz: '7\u201330 days',
        speed_notario: 'Varies',
        speed_diy: 'If no errors',
        row_hidden: 'Hidden Fees',
        hidden_notario: 'Common',
        row_whatsapp: 'WhatsApp Support',

        // Trust
        trust_headline: 'Who\u2019s Behind Negocio Listo',
        trust_bio: 'Ricardo Gattas-Moras, founder of Poppy Marketing & Consulting LLC, created Negocio Listo to serve the Hispanic entrepreneurial community in Texas. With experience in business operations and digital marketing, we understand what you need to get started \u2014 and the obstacles holding you back.',
        trust_1: 'A service of Poppy Marketing & Consulting LLC',
        trust_2: 'Based in Katy, TX \u2014 we know the local market',
        trust_3: 'We are not lawyers \u2014 we are experienced document preparers',
        disclaimer: 'Negocio Listo is a document preparation service. We are not attorneys or notaries public. We do not provide legal advice. This service is offered under the provisions of TX Gov Code \u00A7406.017.',

        // FAQ
        faq_headline: 'Frequently Asked Questions',
        faq_1_q: 'How much does it cost to form an LLC?',
        faq_1_a: 'Our service costs $597 (flat rate). Additionally, Texas charges a $300 filing fee paid directly to the state. Total: $897.',
        faq_2_q: 'How long does it take?',
        faq_2_a: 'Typically 5 to 7 business days after we receive all your information.',
        faq_3_q: 'Do I need a Social Security number?',
        faq_3_a: 'Not necessarily. We handle ITIN applications through the IRS fax pathway.',
        faq_4_q: 'Is this the same as a notary?',
        faq_4_a: 'No. We are NOT notaries public. We are legal document preparers. We do not provide legal advice.',
        faq_5_q: 'What happens if my name is rejected?',
        faq_5_a: 'We refile with a new name. You only pay the new state fee if applicable. Our service has no additional charge.',
        faq_6_q: 'Can I form an LLC without papers?',
        faq_6_a: 'The LLC formation itself does not require immigration status. However, an ITIN or SSN may be needed for the EIN. Let\u2019s discuss your specific situation.',
        faq_7_q: 'Do I need a lawyer?',
        faq_7_a: 'For basic LLC formation, no. For complex situations (multiple partners, intellectual property, etc.), we refer you to an attorney.',
        faq_8_q: 'What\u2019s included in the package?',
        faq_8_a: 'Includes: Certificate of Formation (Form 205) filed with TX SOS, EIN application with the IRS, Operating Agreement template, and post-formation next steps guide. All in bilingual service.',

        // Final CTA
        final_headline: 'Your business deserves to be official.',
        final_subline: 'Start today. Get your LLC in days, not weeks.',
        cta_whatsapp_write: 'Message Us on WhatsApp',

        // Footer
        footer_tagline: 'Texas LLC Formation. Fast, bilingual, no hassle.',
        footer_links: 'Links',
        footer_contact: 'Contact',
        footer_legal: 'Legal',
        footer_privacy: 'Privacy Policy',
        footer_terms: 'Terms of Service',
        footer_disclaimer: 'Negocio Listo is a document preparation service operated by Poppy Marketing & Consulting LLC. We are not attorneys or notaries public. We do not provide legal advice.',
        footer_disclaimer_en: 'Negocio Listo is a document preparation service operated by Poppy Marketing & Consulting LLC. We are not attorneys or notaries public. We do not provide legal advice.',
    },
};

// ============================================
// Language Toggle
// ============================================

class LanguageToggle {
    constructor() {
        this.currentLang = 'es';
        this.toggle = document.getElementById('langToggle');
        this.init();
    }

    init() {
        // Check URL param
        const params = new URLSearchParams(window.location.search);
        if (params.get('lang') === 'en') {
            this.currentLang = 'en';
        }

        this.applyLanguage();

        if (this.toggle) {
            this.toggle.addEventListener('click', () => this.switchLanguage());
        }
    }

    switchLanguage() {
        this.currentLang = this.currentLang === 'es' ? 'en' : 'es';
        this.applyLanguage();

        // Update URL without reload
        const url = new URL(window.location);
        if (this.currentLang === 'en') {
            url.searchParams.set('lang', 'en');
        } else {
            url.searchParams.delete('lang');
        }
        window.history.replaceState({}, '', url);
    }

    applyLanguage() {
        // Update html lang attribute
        document.documentElement.lang = this.currentLang;

        // Update meta description
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.content = this.currentLang === 'es'
                ? 'Formación de LLC en Texas — rápido, bilingüe, sin complicaciones. Precio fijo de $597. Negocio Listo te ayuda a formalizar tu negocio.'
                : 'Texas LLC Formation — fast, bilingual, no hassle. Flat rate $597. Negocio Listo helps you formalize your business.';
        }

        // Swap all data-i18n elements
        const elements = document.querySelectorAll('[data-i18n]');
        const langData = translations[this.currentLang];

        elements.forEach((el) => {
            const key = el.getAttribute('data-i18n');
            if (langData[key]) {
                el.textContent = langData[key];
            }
        });

        // Update toggle button display
        if (this.toggle) {
            const active = this.toggle.querySelector('.lang-active');
            const inactive = this.toggle.querySelector('.lang-inactive');
            if (active && inactive) {
                active.textContent = this.currentLang.toUpperCase();
                inactive.textContent = this.currentLang === 'es' ? 'EN' : 'ES';
            }
        }
    }
}

// ============================================
// FAQ Accordion
// ============================================

class FAQAccordion {
    constructor() {
        this.items = document.querySelectorAll('.faq-item');
        this.init();
    }

    init() {
        this.items.forEach((item) => {
            const question = item.querySelector('.faq-question');
            if (question) {
                question.addEventListener('click', () => this.toggleItem(item));
            }
        });
    }

    toggleItem(item) {
        const isActive = item.classList.contains('active');
        const answer = item.querySelector('.faq-answer');
        const question = item.querySelector('.faq-question');

        // Close all
        this.items.forEach((i) => {
            i.classList.remove('active');
            const a = i.querySelector('.faq-answer');
            const q = i.querySelector('.faq-question');
            if (a) a.style.maxHeight = '0';
            if (q) q.setAttribute('aria-expanded', 'false');
        });

        // Open clicked (if it wasn't already open)
        if (!isActive && answer) {
            item.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + 'px';
            if (question) question.setAttribute('aria-expanded', 'true');
        }
    }
}

// ============================================
// Header Scroll Behavior
// ============================================

class HeaderController {
    constructor() {
        this.header = document.getElementById('header');
        this.init();
    }

    init() {
        if (!this.header) return;

        window.addEventListener('scroll', throttle(() => {
            if (window.scrollY > 20) {
                this.header.classList.add('scrolled');
            } else {
                this.header.classList.remove('scrolled');
            }
        }, 100));
    }
}

// ============================================
// Mobile Menu
// ============================================

class MobileMenu {
    constructor() {
        this.hamburger = document.getElementById('hamburger');
        this.navMobile = document.getElementById('navMobile');
        this.init();
    }

    init() {
        if (!this.hamburger || !this.navMobile) return;

        this.hamburger.addEventListener('click', () => {
            this.navMobile.classList.toggle('open');
        });

        // Close on link click
        this.navMobile.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                this.navMobile.classList.remove('open');
            });
        });
    }
}

// ============================================
// Micro Animation Controller
// ============================================

class MicroAnimationController {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -40px 0px',
        };
        this.init();
    }

    init() {
        if (!('IntersectionObserver' in window)) return;
        this.observeElements();
    }

    observeElements() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, this.observerOptions);

        // Add animate-on-scroll class to target elements
        const selectors = [
            '.problem-card',
            '.step',
            '.package-card',
            '.faq-item',
            '.trust-signal',
            '.section-header',
            '.problem-callout',
            '.timeline-badge',
            '.comparison-table-wrapper',
        ];

        document.querySelectorAll(selectors.join(', ')).forEach((el, index) => {
            el.classList.add('animate-on-scroll');
            // Add stagger class for grid items
            const stagger = (index % 4) + 1;
            el.classList.add('stagger-' + stagger);
            observer.observe(el);
        });
    }
}

// ============================================
// CTA Tracking
// ============================================

class CTATracker {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll('[data-cta]').forEach((el) => {
            el.addEventListener('click', (e) => {
                const ctaId = e.currentTarget.getAttribute('data-cta');
                this.track(ctaId, e.currentTarget.textContent.trim());
            });
        });
    }

    track(ctaId, text) {
        // Google Analytics
        if (window.gtag) {
            gtag('event', 'cta_click', { cta_id: ctaId });
        }

        // Local storage log
        try {
            const events = JSON.parse(localStorage.getItem('nl_events') || '[]');
            events.push({
                type: 'cta_click',
                cta_id: ctaId,
                text: text,
                timestamp: new Date().toISOString(),
            });
            if (events.length > 50) events.shift();
            localStorage.setItem('nl_events', JSON.stringify(events));
        } catch (e) {
            // Silent fail
        }
    }
}

// ============================================
// Smooth Scrolling
// ============================================

class SmoothScroller {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                if (href === '#') return;

                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    });
                }
            });
        });
    }
}

// ============================================
// Mobile Sticky CTA visibility
// ============================================

class MobileStickyController {
    constructor() {
        this.sticky = document.getElementById('mobileStickyCtA');
        this.hero = document.getElementById('hero');
        this.init();
    }

    init() {
        if (!this.sticky || !this.hero) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // Hide sticky when hero is visible, show when scrolled past
                    if (entry.isIntersecting) {
                        this.sticky.style.transform = 'translateY(100%)';
                        this.sticky.style.opacity = '0';
                    } else {
                        this.sticky.style.transform = 'translateY(0)';
                        this.sticky.style.opacity = '1';
                    }
                });
            },
            { threshold: 0.3 }
        );

        // Start hidden
        this.sticky.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
        this.sticky.style.transform = 'translateY(100%)';
        this.sticky.style.opacity = '0';

        observer.observe(this.hero);
    }
}

// ============================================
// Utility Functions
// ============================================

function throttle(func, limit) {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
}

// ============================================
// Initialize Everything
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    if (window.lucide) {
        lucide.createIcons();
    }

    // Initialize all modules
    new LanguageToggle();
    new FAQAccordion();
    new HeaderController();
    new MobileMenu();
    new MicroAnimationController();
    new CTATracker();
    new SmoothScroller();
    new MobileStickyController();
});
