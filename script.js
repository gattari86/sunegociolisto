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
        hero_headline: 'Forma tu LLC en Texas, sin complicaciones.',
        hero_subheadline: 'Nosotros hacemos el papeleo. T\u00FA te enfocas en tu negocio.',
        cta_start: 'Empieza Ahora',
        cta_whatsapp_start: 'Empezar por WhatsApp',
        cta_see_price: 'Ver nuestros planes',
        hero_compliance: 'Servicio de preparaci\u00F3n y presentaci\u00F3n de documentos. No asesor\u00EDa legal o fiscal.',
        trust_strip_1: 'Servicio biling\u00FCe',
        trust_strip_2: 'Soporte en Texas',
        trust_strip_3: 'Respuesta r\u00E1pida por WhatsApp',
        trust_metric_label: 'd\u00EDas h\u00E1biles promedio',
        hero_stat_price: 'desde \u2014 pago \u00FAnico',
        hero_stat_bilingual: 'servicio biling\u00FCe',

        // Problem
        problem_headline: 'Sabemos lo frustrante que es\u2026',
        problem_1_title: 'Formularios confusos en inglés',
        problem_1_desc: 'Los formularios del gobierno están en inglés y el lenguaje legal es intimidante.',
        problem_2_title: 'Miedo a cometer errores costosos',
        problem_2_desc: 'Un campo incorrecto = rechazo + tarifas perdidas. No puedes darte ese lujo.',
        problem_3_title: '\u201CNotarios\u201D que cobran de más',
        problem_3_desc: 'Operadores sin licencia cobrando $1,500+ por un trámite de $300.',
        problem_4_title: 'No saber por dónde empezar',
        problem_4_desc: '\u00BFLLC? \u00BFDBA? \u00BFEIN? \u00BFOperating Agreement? Es abrumador.',
        problem_callout: 'No necesitas un abogado para formar tu LLC. Necesitas a alguien que sepa exactamente cómo hacerlo.',

        // Solution
        solution_headline: 'Elige el plan que mejor se ajuste a tu negocio',
        solution_subtitle: 'Ambos planes incluyen servicio completamente bilingüe y entrega en 5\u20137 días hábiles.',
        tier_esencial_name: 'Esencial',
        tier_completo_name: 'Completo',
        tier_price_label: '+ $300 tarifa estatal',
        tier_recommended: 'Recomendado',
        cta_choose_esencial: 'Elegir Esencial',
        cta_choose_completo: 'Elegir Completo',
        feat_wa_basic_title: 'Soporte WhatsApp',
        feat_wa_basic_desc: 'Durante el proceso de presentación',
        feat_wa_full_title: 'Soporte WhatsApp completo',
        feat_wa_full_desc: 'Durante el proceso + 30 días post-formación',
        feat_ra_title: 'Agente Registrado \u2014 A\u00F1o 1 incluido',
        feat_ra_desc: 'Protege tu direcci\u00F3n personal del registro p\u00FAblico. Renovaci\u00F3n: $149/a\u00F1o.',
        feat_memo_title: 'Gu\u00EDa de Pr\u00F3ximos Pasos',
        feat_memo_desc: 'Documento personalizado post-formaci\u00F3n',
        price_nl_table: '$297\u2013$497 <span class="price-once">(pago \u00FAnico + tarifa estatal)</span>',
        price_lz_table: '$0 + $249+<span class="price-recurring">/a\u00F1o en cargos</span>',
        feat_1_title: 'Certificado de Formaci\u00F3n de LLC (Form 205)',
        feat_1_desc: 'Presentado ante la Secretar\u00EDa de Estado de Texas',
        feat_2_title: 'N\u00FAmero de Identificaci\u00F3n Fiscal (EIN)',
        feat_2_desc: 'Lo solicitamos en tu nombre ante el IRS',
        feat_3_title: 'Acuerdo Operativo (Operating Agreement)',
        feat_3_desc: 'Plantilla de autoayuda para miembro \u00FAnico',
        feat_4_title: 'Lista de pasos siguientes',
        feat_4_desc: 'Gu\u00EDa post-formaci\u00F3n para que no te pierdas',
        state_fee_note: 'La tarifa estatal de $300 se paga directamente al estado (separada de nuestro servicio).',
        addon_dba_title: 'Complemento: DBA (Certificado de Nombre Asumido) \u2014 $99',
        addon_dba_desc: '\u00BFTu negocio opera con un nombre diferente al de tu LLC? Presentamos tu DBA ante el condado y la Secretar\u00EDa de Estado. Tarifa estatal de $25 se paga por separado.',
        package_highlight: 'Precios transparentes. Sin sorpresas. Sin contratos a largo plazo.',

        // Tier Comparison Matrix
        tier_compare_heading: 'Compara los planes',
        tier_col_feature: 'Incluido',
        tier_col_esencial: 'Esencial',
        tier_col_completo: 'Completo',
        tier_row_llc: 'Certificado de Formaci\u00F3n (Form 205)',
        tier_row_ein: 'Solicitud de EIN',
        tier_row_checklist: 'Lista post-formaci\u00F3n',
        tier_row_whatsapp: 'Soporte WhatsApp',
        tier_wa_basic: 'Durante la presentaci\u00F3n',
        tier_wa_full: 'Completo + 30 d\u00EDas',
        tier_row_oa: 'Acuerdo Operativo',
        tier_row_ra: 'Agente Registrado A\u00F1o 1',
        tier_row_memo: 'Gu\u00EDa de Pr\u00F3ximos Pasos',
        tier_row_price: 'Precio',

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
        step_4_desc: 'Certificado de LLC, carta de EIN, checklist de pasos siguientes, y m\u00E1s seg\u00FAn tu plan.',
        timeline_badge: 'Tu LLC lista en 5\u20137 días hábiles',

        // Comparison
        compare_headline: '\u00BFPor qué Negocio Listo?',
        compare_subtitle: 'Ellos te venden una plantilla. Nosotros te guiamos paso a paso.',
        col_nl: 'Negocio Listo',
        col_lz: 'LegalZoom',
        col_notario: 'Notario / Doc Prep',
        col_diy: 'Hacerlo Solo',
        row_price: '<strong>Precio</strong>',
        row_price_diy: '$300 (solo tarifa estatal)',
        row_bilingual: '<strong>Bilingüe</strong>',
        row_bilingual_notario: 'A veces',
        row_personal: '<strong>Servicio Personal</strong>',
        row_speed: '<strong>Rapidez</strong>',
        speed_nl: '5\u20137 días',
        speed_lz: '7\u201330 días',
        speed_notario: 'Varía',
        speed_diy: 'Si no hay errores',
        row_hidden: '<strong>Cargos Ocultos</strong>',
        hidden_notario: 'Común',
        row_whatsapp: '<strong>Soporte WhatsApp</strong>',
        row_ein: '<strong>EIN Incluido</strong>',
        ein_lz: '$70+ extra',
        ein_notario: 'Var\u00EDa',
        ein_diy: 'Debes hacerlo t\u00FA',
        row_oa: '<strong>Acuerdo Operativo</strong>',
        oa_nl: 'Plan Completo',
        oa_lz: '$99+ extra',
        oa_notario: 'No usualmente',
        oa_diy: 'Debes redactarlo t\u00FA',
        row_ra: '<strong>Agente Registrado</strong>',
        ra_nl: 'A\u00F1o 1 incluido (Completo)',
        ra_lz: '$249/a\u00F1o',
        scroll_hint: 'Desliza para ver m\u00E1s',

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
        faq_1_a: 'Ofrecemos dos planes: Esencial ($297) y Completo ($497, incluye Acuerdo Operativo y Agente Registrado A\u00F1o 1). Adem\u00E1s, el estado de Texas cobra una tarifa de $300 que se paga directamente al estado.',
        faq_2_q: '\u00BFCuánto tiempo tarda?',
        faq_2_a: 'Generalmente 5 a 7 días hábiles después de recibir toda tu información.',
        faq_3_q: '\u00BFNecesito un número de seguro social?',
        faq_3_a: 'No necesariamente. Manejamos solicitudes con ITIN a través de la vía de fax con el IRS.',
        faq_4_q: '\u00BFEs lo mismo que un notario?',
        faq_4_a: 'No \u2014 y eso es algo positivo. A diferencia de \u201Cnotarios\u201D sin licencia que cobran de m\u00E1s y operan sin supervisi\u00F3n, nosotros somos preparadores de documentos registrados bajo TX Gov Code \u00A7406.017. Operamos con precio fijo transparente, recibos de todo, y cero promesas legales falsas.',
        faq_5_q: '\u00BFQué pasa si mi nombre es rechazado?',
        faq_5_a: 'Volvemos a presentar con un nuevo nombre. Solo pagas la nueva tarifa estatal si aplica. Nuestro servicio no tiene cargo adicional.',
        faq_6_q: '\u00BFPuedo formar mi LLC si no tengo papeles?',
        faq_6_a: 'S\u00ED. La formaci\u00F3n de la LLC no requiere estatus migratorio ni n\u00FAmero de seguro social. Para el EIN, aceptamos ITIN \u2014 lo tramitamos por la v\u00EDa de fax con el IRS, que es el proceso oficial para solicitantes con ITIN. Miles de emprendedores inmigrantes forman LLCs en Texas cada a\u00F1o. Tu situaci\u00F3n migratoria es confidencial y no se comparte con ninguna agencia.',
        faq_7_q: '\u00BFNecesito un abogado?',
        faq_7_a: 'Para la formación básica de una LLC, no. Para situaciones complejas (múltiples socios, propiedad intelectual, etc.), te referimos a un abogado.',
        faq_8_q: '\u00BFQué incluye cada plan?',
        faq_8_a: 'Ambos planes incluyen: Certificado de Formaci\u00F3n de LLC (Form 205), solicitud de EIN, y lista de pasos post-formaci\u00F3n. El plan Completo agrega: plantilla de Acuerdo Operativo, Agente Registrado A\u00F1o 1, gu\u00EDa de pr\u00F3ximos pasos, y soporte WhatsApp extendido por 30 d\u00EDas. Todo en servicio biling\u00FCe.',

        // Final CTA
        final_headline: 'Tu negocio merece ser oficial.',
        final_subline: 'Empieza hoy. Recibe tu LLC en días, no semanas.',
        cta_whatsapp_write: 'Escríbenos por WhatsApp',

        // Lead Form
        form_title: '\u00BFPrefieres que te contactemos?',
        form_subtitle: 'Llena este formulario y te llamamos en 1 d\u00EDa h\u00E1bil. Sin compromiso.',
        form_name_label: 'Nombre',
        form_phone_label: 'Teléfono / WhatsApp',
        form_service_label: 'Servicio de interés',
        form_service_placeholder: 'Selecciona un plan',
        form_option_esencial: 'Esencial ($297 + tarifa estatal)',
        form_option_completo: 'Completo ($497 + tarifa estatal)',
        form_option_unsure: 'No estoy seguro',
        form_name_placeholder: 'Tu nombre completo',
        form_message_label: 'Mensaje (opcional)',
        form_message_placeholder: 'Algo que quieras que sepamos...',
        form_submit: 'Enviar Solicitud',
        form_error: 'Error \u2014 intenta de nuevo',
        form_success: 'Recibimos tu solicitud. Te contactaremos pronto por WhatsApp.',
        form_disclaimer: 'No somos abogados. Servicio de preparación de documentos bajo TX Gov Code \u00A7406.017.',

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
        hero_headline: 'Form Your LLC in Texas, No Complications.',
        hero_subheadline: 'We handle the paperwork. You focus on your business.',
        cta_start: 'Get Started Now',
        cta_whatsapp_start: 'Start on WhatsApp',
        cta_see_price: 'See Our Plans',
        hero_compliance: 'Document preparation and filing service. Not legal or tax advice.',
        trust_strip_1: 'Bilingual service',
        trust_strip_2: 'Texas-based support',
        trust_strip_3: 'Fast WhatsApp response',
        trust_metric_label: 'avg. business days',
        hero_stat_price: 'starting \u2014 one-time fee',
        hero_stat_bilingual: 'bilingual service',

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
        solution_headline: 'Choose the plan that fits your business',
        solution_subtitle: 'Both plans include fully bilingual service and delivery in 5\u20137 business days.',
        tier_esencial_name: 'Essential',
        tier_completo_name: 'Complete',
        tier_price_label: '+ $300 state filing fee',
        tier_recommended: 'Recommended',
        cta_choose_esencial: 'Choose Essential',
        cta_choose_completo: 'Choose Complete',
        feat_wa_basic_title: 'WhatsApp Support',
        feat_wa_basic_desc: 'During the filing process',
        feat_wa_full_title: 'Full WhatsApp Support',
        feat_wa_full_desc: 'During filing + 30 days post-formation',
        feat_ra_title: 'Registered Agent \u2014 Year 1 included',
        feat_ra_desc: 'Keeps your home address off the public record. Renewal: $149/year.',
        feat_memo_title: 'Next Steps Memo',
        feat_memo_desc: 'Personalized post-formation guide',
        price_nl_table: '$297\u2013$497 <span class="price-once">(one-time + state fee)</span>',
        price_lz_table: '$0 + $249+<span class="price-recurring">/year in fees</span>',
        feat_1_title: 'LLC Certificate of Formation (Form 205)',
        feat_1_desc: 'Filed with the Texas Secretary of State',
        feat_2_title: 'EIN (Federal Tax ID Number)',
        feat_2_desc: 'We apply on your behalf with the IRS',
        feat_3_title: 'Operating Agreement Template',
        feat_3_desc: 'Self-help packet for single-member LLC',
        feat_4_title: 'Post-formation checklist',
        feat_4_desc: 'Next steps guide so you don\u2019t miss anything',
        state_fee_note: 'The $300 state filing fee is paid directly to the state (separate from our service fee).',
        addon_dba_title: 'Add-On: DBA (Assumed Name Certificate) \u2014 $99',
        addon_dba_desc: 'Will your business operate under a different name than your LLC? We file your DBA with the county and TX Secretary of State. $25 state fee paid separately.',
        package_highlight: 'Transparent pricing. No surprises. No long-term contracts.',

        // Tier Comparison Matrix
        tier_compare_heading: 'Compare the plans',
        tier_col_feature: 'Included',
        tier_col_esencial: 'Essential',
        tier_col_completo: 'Complete',
        tier_row_llc: 'LLC Filing (Form 205)',
        tier_row_ein: 'EIN Application',
        tier_row_checklist: 'Post-formation checklist',
        tier_row_whatsapp: 'WhatsApp Support',
        tier_wa_basic: 'During filing',
        tier_wa_full: 'Full + 30 days',
        tier_row_oa: 'Operating Agreement',
        tier_row_ra: 'Registered Agent Year 1',
        tier_row_memo: 'Next Steps Memo',
        tier_row_price: 'Price',

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
        step_4_desc: 'LLC certificate, EIN letter, post-formation checklist, and more depending on your plan.',
        timeline_badge: 'Your LLC ready in 5\u20137 business days',

        // Comparison
        compare_headline: 'Why Negocio Listo?',
        compare_subtitle: 'They sell you a template. We guide you step by step.',
        col_nl: 'Negocio Listo',
        col_lz: 'LegalZoom',
        col_notario: 'Notario / Doc Prep',
        col_diy: 'Do It Yourself',
        row_price: '<strong>Price</strong>',
        row_price_diy: '$300 (state fee only)',
        row_bilingual: '<strong>Bilingual</strong>',
        row_bilingual_notario: 'Sometimes',
        row_personal: '<strong>Personal Service</strong>',
        row_speed: '<strong>Speed</strong>',
        speed_nl: '5\u20137 days',
        speed_lz: '7\u201330 days',
        speed_notario: 'Varies',
        speed_diy: 'If no errors',
        row_hidden: '<strong>Hidden Fees</strong>',
        hidden_notario: 'Common',
        row_whatsapp: '<strong>WhatsApp Support</strong>',
        row_ein: '<strong>EIN Included</strong>',
        ein_lz: '$70+ extra',
        ein_notario: 'Varies',
        ein_diy: 'Must do yourself',
        row_oa: '<strong>Operating Agreement</strong>',
        oa_nl: 'Complete plan',
        oa_lz: '$99+ extra',
        oa_notario: 'Not usually',
        oa_diy: 'Must draft yourself',
        row_ra: '<strong>Registered Agent</strong>',
        ra_nl: 'Year 1 included (Complete)',
        ra_lz: '$249/year',
        scroll_hint: 'Swipe to see more',

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
        faq_1_a: 'We offer two plans: Essential ($297) and Complete ($497, includes Operating Agreement and Registered Agent Year 1). Additionally, Texas charges a $300 filing fee paid directly to the state.',
        faq_2_q: 'How long does it take?',
        faq_2_a: 'Typically 5 to 7 business days after we receive all your information.',
        faq_3_q: 'Do I need a Social Security number?',
        faq_3_a: 'Not necessarily. We handle ITIN applications through the IRS fax pathway.',
        faq_4_q: 'Is this the same as a notary?',
        faq_4_a: 'No \u2014 and that\u2019s a good thing. Unlike unlicensed \u201Cnotarios\u201D who overcharge and operate without oversight, we are registered document preparers under TX Gov Code \u00A7406.017. We operate with a transparent flat rate, receipts for everything, and zero false legal promises.',
        faq_5_q: 'What happens if my name is rejected?',
        faq_5_a: 'We refile with a new name. You only pay the new state fee if applicable. Our service has no additional charge.',
        faq_6_q: 'Can I form an LLC without papers?',
        faq_6_a: 'Yes. LLC formation does not require immigration status or a Social Security number. For the EIN, we accept ITINs \u2014 we process it through the IRS fax pathway, which is the official process for ITIN applicants. Thousands of immigrant entrepreneurs form LLCs in Texas every year. Your immigration status is confidential and is not shared with any agency.',
        faq_7_q: 'Do I need a lawyer?',
        faq_7_a: 'For basic LLC formation, no. For complex situations (multiple partners, intellectual property, etc.), we refer you to an attorney.',
        faq_8_q: 'What\u2019s included in each plan?',
        faq_8_a: 'Both plans include: Certificate of Formation (Form 205), EIN application, and post-formation checklist. The Complete plan adds: Operating Agreement template, Registered Agent Year 1, next steps memo, and 30-day extended WhatsApp support. All in bilingual service.',

        // Final CTA
        final_headline: 'Your business deserves to be official.',
        final_subline: 'Start today. Get your LLC in days, not weeks.',
        cta_whatsapp_write: 'Message Us on WhatsApp',

        // Lead Form
        form_title: 'Prefer us to reach out?',
        form_subtitle: 'Fill out this form and we\u2019ll call you within 1 business day. No obligation.',
        form_name_label: 'Name',
        form_phone_label: 'Phone / WhatsApp',
        form_service_label: 'Service of interest',
        form_service_placeholder: 'Select a plan',
        form_option_esencial: 'Esencial ($297 + state fee)',
        form_option_completo: 'Completo ($497 + state fee)',
        form_option_unsure: 'Not sure yet',
        form_name_placeholder: 'Your full name',
        form_message_label: 'Message (optional)',
        form_message_placeholder: 'Anything you want us to know...',
        form_submit: 'Send Request',
        form_error: 'Error \u2014 please try again',
        form_success: 'We received your request. We\u2019ll contact you soon via WhatsApp.',
        form_disclaimer: 'We are not attorneys. Document preparation service under TX Gov Code \u00A7406.017.',

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

        // GA4: track language switch
        if (window.gtag) {
            gtag('event', 'lang_switch', { language: this.currentLang });
        }

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
                ? 'Formación de LLC en Texas — rápido, bilingüe, sin complicaciones. Desde $297 + tarifa estatal. Negocio Listo te ayuda a formalizar tu negocio.'
                : 'Texas LLC Formation — fast, bilingual, no hassle. From $297 + state fee. Negocio Listo helps you formalize your business.';
        }

        // Swap all data-i18n elements
        const elements = document.querySelectorAll('[data-i18n]');
        const langData = translations[this.currentLang];

        // Keys that contain HTML markup
        const htmlKeys = new Set(['price_nl_table', 'price_lz_table', 'row_price', 'row_bilingual', 'row_personal', 'row_speed', 'row_hidden', 'row_whatsapp', 'row_ein', 'row_oa', 'row_ra']);

        elements.forEach((el) => {
            const key = el.getAttribute('data-i18n');
            if (langData[key]) {
                if (htmlKeys.has(key)) {
                    el.innerHTML = langData[key];
                } else {
                    el.textContent = langData[key];
                }
            }
        });

        // Swap placeholders on inputs/textareas
        document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (langData[key]) el.placeholder = langData[key];
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

        // Toggle footer disclaimers — show only active language
        const disclaimerEs = document.getElementById('disclaimerEs');
        const disclaimerEn = document.getElementById('disclaimerEn');
        if (disclaimerEs && disclaimerEn) {
            if (this.currentLang === 'es') {
                disclaimerEs.classList.remove('lang-hidden');
                disclaimerEn.classList.add('lang-hidden');
            } else {
                disclaimerEs.classList.add('lang-hidden');
                disclaimerEn.classList.remove('lang-hidden');
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

            // GA4: track FAQ expand
            if (window.gtag) {
                const qText = question.textContent.trim().substring(0, 80);
                gtag('event', 'faq_expand', { question_text: qText });
            }
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

        this.hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            this.navMobile.classList.toggle('open');
        });

        // Close on link click
        this.navMobile.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                this.navMobile.classList.remove('open');
            });
        });

        // Close on outside click
        document.addEventListener('click', (e) => {
            if (!this.navMobile.contains(e.target) && !this.hamburger.contains(e.target)) {
                this.navMobile.classList.remove('open');
            }
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

        // Animate only key structural elements — not every element on the page
        const selectors = [
            '.tier-card-web',
            '.section-header',
            '.problem-callout',
            '.comparison-table-wrapper',
            '.hero-stats-bar',
        ];

        document.querySelectorAll(selectors.join(', ')).forEach((el, index) => {
            el.classList.add('animate-on-scroll');
            // Add stagger class for grid items
            const stagger = (index % 8) + 1;
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
        const href = document.querySelector(`[data-cta="${ctaId}"]`)?.href || '';

        // Google Analytics — differentiate WhatsApp vs phone vs general CTA
        if (window.gtag) {
            let eventName = 'cta_click';
            if (href.includes('wa.me')) {
                eventName = 'whatsapp_click';
                gtag('event', 'conversion', { send_to: 'AW-17962571856/qbcICODl_fobENCwnPVC', value: 50.0, currency: 'USD' });
            } else if (href.includes('tel:')) {
                eventName = 'phone_click';
                gtag('event', 'conversion', { send_to: 'AW-17962571856/riTzCITtifsbENCwnPVC', value: 50.0, currency: 'USD' });
            }
            gtag('event', eventName, { cta_id: ctaId, cta_text: text });
        }

        // Meta Pixel — Lead for WhatsApp, Contact for phone
        if (window.fbq) {
            if (href.includes('wa.me')) fbq('track', 'Lead', { content_name: ctaId });
            else if (href.includes('tel:')) fbq('track', 'Contact', { content_name: ctaId });
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
    try {
        if (window.lucide) {
            lucide.createIcons();
        }
    } catch (e) {
        console.warn('Lucide icons failed to load:', e);
    }

    // Initialize all modules
    const langToggle = new LanguageToggle();
    new FAQAccordion();
    new HeaderController();
    new MobileMenu();
    new MicroAnimationController();
    new CTATracker();
    new SmoothScroller();
    new MobileStickyController();

    // Lead capture form — inline submit, no redirect
    const leadForm = document.getElementById('nlLeadForm');
    if (leadForm) {
        leadForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const formData = new FormData(leadForm);
            const submitBtn = document.getElementById('formSubmitBtn');
            const successMsg = document.getElementById('formSuccess');
            submitBtn.disabled = true;
            submitBtn.textContent = '...';

            fetch(leadForm.action, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' },
            })
            .then(function (response) {
                if (response.ok) {
                    leadForm.style.display = 'none';
                    if (successMsg) successMsg.style.display = 'flex';
                    // Track conversion
                    if (window.gtag) {
                        gtag('event', 'lead_form_submit', { service: formData.get('service') });
                        gtag('event', 'conversion', { send_to: 'AW-17962571856/58DKCPr_mv0bENCwnPVC', value: 50.0, currency: 'USD' });
                    }
                    if (window.fbq) {
                        fbq('track', 'Lead', { content_name: 'lead_form', content_category: formData.get('service') });
                    }
                } else {
                    submitBtn.disabled = false;
                    submitBtn.textContent = translations[langToggle.currentLang].form_error;
                }
            })
            .catch(function () {
                submitBtn.disabled = false;
                submitBtn.textContent = translations[langToggle.currentLang].form_error;
            });
        });
    }

    // Comparison table scroll-end detection (hide fade when scrolled to end)
    const compWrapper = document.getElementById('comparisonWrapper');
    if (compWrapper) {
        compWrapper.addEventListener('scroll', function () {
            const atEnd = this.scrollLeft + this.clientWidth >= this.scrollWidth - 4;
            this.classList.toggle('scrolled-end', atEnd);
        });
    }

    // GA4: Scroll depth tracking (50%, 75%, 90%)
    if (window.gtag) {
        const scrollThresholds = [50, 75, 90];
        const scrollFired = new Set();
        window.addEventListener('scroll', function () {
            const scrollPct = Math.round(
                (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
            );
            scrollThresholds.forEach(function (threshold) {
                if (scrollPct >= threshold && !scrollFired.has(threshold)) {
                    scrollFired.add(threshold);
                    gtag('event', 'scroll_depth', { percent: threshold });
                }
            });
        }, { passive: true });
    }
});
