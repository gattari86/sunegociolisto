/* ============================================================
   Negocio Listo -- Intake Form Controller (7-step wizard)
   Handles: navigation, validation, i18n, conditional logic,
   form submission (Formspree), GA4 step tracking.
   ============================================================ */
(function () {
  'use strict';

  // ----------------------------------------------------------
  // State
  // ----------------------------------------------------------
  let currentStep = 1;
  const totalSteps = 6;
  let currentLang = 'es';

  // ----------------------------------------------------------
  // Step metadata
  // ----------------------------------------------------------
  const stepNames = {
    es: [
      'Tu Informacion Personal',
      'Tu Negocio',
      'Estructura de tu LLC',
      'Agente Registrado y Oficina',
      'Detalles del Registro',
      'Casi Listo'
    ],
    en: [
      'Your Personal Information',
      'Your Business',
      'LLC Structure',
      'Registered Agent & Office',
      'Registration Details',
      'Almost Done'
    ]
  };

  const stepIds = [
    'personal_info',
    'business_info',
    'llc_structure',
    'registered_agent',
    'registration_details',
    'review_submit'
  ];

  // ----------------------------------------------------------
  // Translations
  // ----------------------------------------------------------
  var T = {
    es: {
      // Progress (reference -- label is built dynamically)
      progress_label: 'Paso 1 de 7 -- Tu Informacion Personal',

      // Step titles and subtitles
      step1_title: 'Tu Informacion Personal',
      step1_subtitle: 'Empecemos con tus datos de contacto.',
      step2_title: 'Tu Negocio',
      step2_subtitle: 'Cuentanos sobre el negocio que quieres formar.',
      step3_title: 'Estructura de tu LLC',
      step3_subtitle: 'Como se va a manejar tu LLC.',
      step4_title: 'Agente Registrado y Oficina',
      step4_subtitle: 'Informacion sobre tu agente registrado y oficina principal.',
      step5_title: 'Detalles del Registro',
      step5_subtitle: 'Informacion adicional para completar tu registro de LLC y solicitud de EIN.',
      step6_title: 'Casi Listo',
      step6_subtitle: 'Un par de cosas mas y estamos listos.',

      // Step 1 labels
      label_full_name: 'Nombre completo',
      ph_full_name: 'Ej: Maria Garcia Lopez',
      label_email: 'Correo electronico',
      ph_email: 'tu@correo.com',
      label_phone: 'Telefono / WhatsApp',
      ph_phone: '(000) 000-0000',
      label_preferred_contact: 'Metodo de contacto preferido',
      contact_call: 'Llamada',
      contact_text: 'Texto',
      label_preferred_language: 'Idioma preferido para comunicacion',
      lang_spanish: 'Espanol',
      lang_english: 'Ingles',
      label_mailing_address: 'Direccion postal',
      label_street: 'Calle y numero',
      ph_street: '123 Main St, Apt 4',
      label_city: 'Ciudad',
      ph_city: 'Houston',
      label_state: 'Estado',
      label_zip: 'Codigo postal',
      ph_zip: '77493',

      // Step 2 labels
      label_llc_name_1: 'Nombre de tu LLC (primera opcion)',
      ph_llc_name_1: 'Ej: Garcia Landscaping LLC',
      hint_llc_name: 'El nombre de tu LLC debe terminar en "LLC". Verificaremos disponibilidad con el estado.',
      label_llc_name_2: 'Nombre de tu LLC (segunda opcion)',
      ph_llc_name_2: 'Ej: Garcia Services LLC',
      hint_llc_name_2: 'Opcional. En caso de que tu primera opcion no este disponible.',
      label_business_description: 'Descripcion del negocio',
      ph_business_description: 'Ej: Servicio de jardineria y mantenimiento de areas verdes',
      label_business_desc: 'Descripcion del negocio',
      ph_business_desc: 'Ej: Servicio de jardineria y mantenimiento de areas verdes',
      hint_business_desc: 'Describe brevemente lo que hace tu negocio. Esto se usa para el registro.',
      label_num_owners: 'Numero de duenos (miembros)',
      label_ssn_itin: 'Situacion de SSN / ITIN',
      hint_ssn_itin: 'Esto es solo para saber como tramitamos tu EIN. Tu numero NO se pide en este formulario -- lo pedimos por telefono de manera segura.',
      ssn_option: 'Tengo SSN',
      itin_option: 'Tengo ITIN',
      neither_option: 'No tengo ninguno',
      unsure_option: 'No estoy seguro',
      unsure_ssn: 'No estoy seguro',

      // Step 3 labels
      label_management_type: 'Tipo de administracion',
      mgmt_member_title: 'Manejado por miembros (Member-Managed)',
      mgmt_member_desc: 'Tu, como dueno, tomas las decisiones del dia a dia. La opcion mas comun para negocios pequenos.',
      mgmt_manager_title: 'Manejado por gerente (Manager-Managed)',
      mgmt_manager_desc: 'Un gerente designado maneja el negocio. Util si tienes socios que no participan en las operaciones.',
      mgmt_unsure_title: 'No estoy seguro',
      mgmt_unsure_desc: 'No te preocupes -- lo revisamos juntos en la llamada de confirmacion.',
      label_additional_owners: 'Nombres de los otros duenos',
      ph_additional_owners: 'Nombre completo de cada dueno adicional, uno por linea',
      hint_additional_owners: 'Escribe el nombre completo de cada dueno adicional, uno por linea.',

      // Step 4 labels
      hint_ra: 'Un agente registrado recibe documentos legales por ti. Si usas el nuestro, tu direccion personal no aparece en el registro publico.',
      label_ra_preference: 'Preferencia de agente registrado',
      ra_nl_title: 'Negocio Listo lo proporciona',
      ra_nl_desc: 'Nosotros actuamos como tu agente registrado. Incluido el primer ano en el plan Completo, o $149/ano.',
      ra_self_title: 'Yo mismo / mi direccion',
      ra_self_desc: 'Tu actuas como tu propio agente registrado usando tu direccion personal.',
      ra_unsure_title: 'No estoy seguro',
      ra_unsure_desc: 'No te preocupes -- te ayudamos a decidir en la llamada.',
      label_ra_address: 'Direccion del agente registrado',
      label_office_same: 'Tu oficina principal es la misma que tu direccion postal?',
      office_same_yes: 'Si, es la misma',
      office_same_no: 'No, es diferente',
      office_yes: 'Si, es la misma',
      office_no: 'No, es diferente',
      label_office_address: 'Direccion de la oficina principal',

      // Step 5 labels
      label_need_dba: 'Necesitas un DBA?',
      hint_dba: 'Un DBA (Doing Business As) te permite operar bajo un nombre diferente al de tu LLC. Tiene un costo adicional de $99.',
      dba_yes_title: 'Si, necesito un DBA',
      dba_yes_desc: 'Quiero operar bajo un nombre comercial diferente al de mi LLC.',
      dba_no_title: 'No, no necesito DBA',
      dba_no_desc: 'Voy a operar bajo el nombre de mi LLC.',
      dba_unsure_title: 'No estoy seguro',
      dba_unsure_desc: 'Lo revisamos en la llamada.',
      label_dba_name: 'Nombre DBA deseado',
      ph_dba_name: 'Ej: Garcia Lawn Care',
      label_filing_speed: 'Velocidad de presentacion',
      speed_standard_title: 'Estandar (incluido)',
      speed_standard_desc: '2-3 dias habiles despues de que el estado procese. Sin costo adicional.',
      speed_expedited_title: 'Expedido (+$25 tarifa estatal)',
      speed_expedited_desc: '1 dia habil. La tarifa de $25 se paga directamente al estado de Texas.',
      label_effective_date: 'Fecha efectiva de la LLC',
      effective_upon_filing: 'Al momento de registrar (lo mas comun)',
      effective_specific: 'Fecha especifica',
      label_effective_date_pick: 'Fecha efectiva deseada',

      // Step 6 labels
      label_start_date: 'Fecha de inicio del negocio',
      label_business_start_date: 'Fecha de inicio del negocio',
      hint_start_date: 'Si aun no has empezado, pon la fecha aproximada en que planeas operar.',
      hint_business_start_date: 'Si aun no has empezado, pon la fecha aproximada en que planeas operar.',
      label_primary_activity: 'Actividad principal del negocio',
      ph_primary_activity: 'Ej: Jardineria y mantenimiento',
      hint_primary_activity: 'Describe en pocas palabras la actividad principal. Esto va en la solicitud del EIN.',
      label_expect_employees: 'Esperas contratar empleados en los proximos 12 meses?',
      employees_yes: 'Si',
      employees_no: 'No',
      employees_unsure: 'No estoy seguro',
      label_fiscal_year: 'Fin del ano fiscal',
      label_fiscal_year_end: 'Fin del ano fiscal',
      hint_fiscal_year: 'Casi todos los negocios pequenos usan diciembre. Si no estas seguro, deja diciembre.',
      month_december_rec: 'Diciembre (recomendado)',
      month_january: 'Enero',
      month_february: 'Febrero',
      month_march: 'Marzo',
      month_april: 'Abril',
      month_may: 'Mayo',
      month_june: 'Junio',
      month_july: 'Julio',
      month_august: 'Agosto',
      month_september: 'Septiembre',
      month_october: 'Octubre',
      month_november: 'Noviembre',

      // Step 7 labels
      label_referral: 'Como nos encontraste?',
      label_referral_source: 'Como nos encontraste?',
      referral_select: 'Selecciona una opcion',
      referral_placeholder: 'Selecciona una opcion',
      referral_google: 'Google',
      referral_facebook: 'Facebook / Instagram',
      referral_whatsapp: 'WhatsApp',
      referral_friend: 'Recomendacion de un amigo/familiar',
      referral_other: 'Otro',
      label_notes: 'Notas adicionales',
      label_additional_notes: 'Notas adicionales',
      ph_notes: 'Algo mas que quieras que sepamos...',
      ph_additional_notes: 'Algo mas que quieras que sepamos...',
      consent_text: 'Entiendo y acepto que Negocio Listo / Poppy Marketing & Consulting LLC no es un bufete de abogados, no ofrece asesoramiento legal, y que los servicios se limitan a la preparacion de documentos conforme al TX Gov Code \u00A7406.017. La informacion proporcionada sera utilizada exclusivamente para preparar mis documentos de formacion de LLC.',

      // Buttons
      btn_next: 'Siguiente',
      btn_back: 'Atras',
      btn_submit: 'Enviar Formulario',
      btn_submitting: 'Enviando...',

      // Success
      success_title: 'Recibimos tu informacion',
      success_message: 'Revisaremos tus datos y te contactaremos dentro de 1 dia habil para confirmar los detalles de tu LLC.',
      success_whatsapp: 'Escribenos por WhatsApp si tienes preguntas',
      success_home: 'Volver al inicio',

      // Disclaimers
      mini_disclaimer: 'Negocio Listo no es un bufete de abogados. Servicio de preparacion de documentos.',
      footer_disclaimer: 'Negocio Listo es un DBA de Poppy Marketing & Consulting LLC. No somos abogados ni ofrecemos asesoramiento legal. Servicio de preparacion de documentos conforme al TX Gov Code \u00A7406.017.',

      // Validation errors
      error_required: 'Este campo es obligatorio',
      error_email: 'Ingresa un correo electronico valido',
      error_phone: 'Ingresa un numero de telefono valido',
      error_zip: 'Ingresa un codigo postal valido (5 digitos)',
      error_select_option: 'Selecciona una opcion',
      error_consent: 'Debes aceptar los terminos para continuar',
      error_form_submit: 'Hubo un error. Intentalo de nuevo.'
    },

    en: {
      // Progress (reference -- label is built dynamically)
      progress_label: 'Step 1 of 7 -- Your Personal Information',

      // Step titles and subtitles
      step1_title: 'Your Personal Information',
      step1_subtitle: 'Let\'s start with your contact information.',
      step2_title: 'Your Business',
      step2_subtitle: 'Tell us about the business you want to form.',
      step3_title: 'LLC Structure',
      step3_subtitle: 'How your LLC will be managed.',
      step4_title: 'Registered Agent & Office',
      step4_subtitle: 'Information about your registered agent and principal office.',
      step5_title: 'Registration Details',
      step5_subtitle: 'Additional information to complete your LLC registration and EIN application.',
      step6_title: 'Almost Done',
      step6_subtitle: 'A couple more things and we\'re all set.',

      // Step 1 labels
      label_full_name: 'Full name',
      ph_full_name: 'Ex: Maria Garcia Lopez',
      label_email: 'Email address',
      ph_email: 'you@email.com',
      label_phone: 'Phone / WhatsApp',
      ph_phone: '(000) 000-0000',
      label_preferred_contact: 'Preferred contact method',
      contact_call: 'Call',
      contact_text: 'Text',
      label_preferred_language: 'Preferred communication language',
      lang_spanish: 'Spanish',
      lang_english: 'English',
      label_mailing_address: 'Mailing address',
      label_street: 'Street address',
      ph_street: '123 Main St, Apt 4',
      label_city: 'City',
      ph_city: 'Houston',
      label_state: 'State',
      label_zip: 'Zip code',
      ph_zip: '77493',

      // Step 2 labels
      label_llc_name_1: 'LLC name (first choice)',
      ph_llc_name_1: 'Ex: Garcia Landscaping LLC',
      hint_llc_name: 'Your LLC name must end in "LLC". We will verify availability with the state.',
      label_llc_name_2: 'LLC name (second choice)',
      ph_llc_name_2: 'Ex: Garcia Services LLC',
      hint_llc_name_2: 'Optional. In case your first choice is not available.',
      label_business_description: 'Business description',
      ph_business_description: 'Ex: Landscaping and lawn maintenance services',
      label_business_desc: 'Business description',
      ph_business_desc: 'Ex: Landscaping and lawn maintenance services',
      hint_business_desc: 'Briefly describe what your business does. This is used for registration.',
      label_num_owners: 'Number of owners (members)',
      label_ssn_itin: 'SSN / ITIN status',
      hint_ssn_itin: 'This is only to know how we process your EIN. Your number is NOT collected in this form -- we ask for it securely by phone.',
      ssn_option: 'I have an SSN',
      itin_option: 'I have an ITIN',
      neither_option: 'I don\'t have either',
      unsure_option: 'I\'m not sure',
      unsure_ssn: 'I\'m not sure',

      // Step 3 labels
      label_management_type: 'Management type',
      mgmt_member_title: 'Member-Managed',
      mgmt_member_desc: 'You, as the owner, make day-to-day decisions. The most common option for small businesses.',
      mgmt_manager_title: 'Manager-Managed',
      mgmt_manager_desc: 'A designated manager runs the business. Useful if you have partners who are not involved in operations.',
      mgmt_unsure_title: 'I\'m not sure',
      mgmt_unsure_desc: 'Don\'t worry -- we\'ll review this together on the confirmation call.',
      label_additional_owners: 'Names of other owners',
      ph_additional_owners: 'Full name of each additional owner, one per line',
      hint_additional_owners: 'Write the full name of each additional owner, one per line.',

      // Step 4 labels
      hint_ra: 'A registered agent receives legal documents on your behalf. If you use ours, your personal address won\'t appear in public records.',
      label_ra_preference: 'Registered agent preference',
      ra_nl_title: 'Negocio Listo provides it',
      ra_nl_desc: 'We act as your registered agent. Included the first year with the Completo plan, or $149/year.',
      ra_self_title: 'Myself / my address',
      ra_self_desc: 'You act as your own registered agent using your personal address.',
      ra_unsure_title: 'I\'m not sure',
      ra_unsure_desc: 'Don\'t worry -- we\'ll help you decide on the call.',
      label_ra_address: 'Registered agent address',
      label_office_same: 'Is your principal office the same as your mailing address?',
      office_same_yes: 'Yes, it\'s the same',
      office_same_no: 'No, it\'s different',
      office_yes: 'Yes, it\'s the same',
      office_no: 'No, it\'s different',
      label_office_address: 'Principal office address',

      // Step 5 labels
      label_need_dba: 'Do you need a DBA?',
      hint_dba: 'A DBA (Doing Business As) allows you to operate under a different name than your LLC. Additional cost: $99.',
      dba_yes_title: 'Yes, I need a DBA',
      dba_yes_desc: 'I want to operate under a different business name than my LLC.',
      dba_no_title: 'No, I don\'t need a DBA',
      dba_no_desc: 'I will operate under my LLC name.',
      dba_unsure_title: 'I\'m not sure',
      dba_unsure_desc: 'We\'ll review it on the call.',
      label_dba_name: 'Desired DBA name',
      ph_dba_name: 'Ex: Garcia Lawn Care',
      label_filing_speed: 'Filing speed',
      speed_standard_title: 'Standard (included)',
      speed_standard_desc: '2-3 business days after state processing. No additional cost.',
      speed_expedited_title: 'Expedited (+$25 state fee)',
      speed_expedited_desc: '1 business day. The $25 fee is paid directly to the state of Texas.',
      label_effective_date: 'LLC effective date',
      effective_upon_filing: 'Upon filing (most common)',
      effective_specific: 'Specific date',
      label_effective_date_pick: 'Desired effective date',

      // Step 6 labels
      label_start_date: 'Business start date',
      label_business_start_date: 'Business start date',
      hint_start_date: 'If you haven\'t started yet, enter the approximate date you plan to operate.',
      hint_business_start_date: 'If you haven\'t started yet, enter the approximate date you plan to operate.',
      label_primary_activity: 'Primary business activity',
      ph_primary_activity: 'Ex: Landscaping and maintenance',
      hint_primary_activity: 'Briefly describe the main activity. This goes on the EIN application.',
      label_expect_employees: 'Do you expect to hire employees in the next 12 months?',
      employees_yes: 'Yes',
      employees_no: 'No',
      employees_unsure: 'I\'m not sure',
      label_fiscal_year: 'Fiscal year end',
      label_fiscal_year_end: 'Fiscal year end',
      hint_fiscal_year: 'Most small businesses use December. If you\'re not sure, leave December.',
      month_december_rec: 'December (recommended)',
      month_january: 'January',
      month_february: 'February',
      month_march: 'March',
      month_april: 'April',
      month_may: 'May',
      month_june: 'June',
      month_july: 'July',
      month_august: 'August',
      month_september: 'September',
      month_october: 'October',
      month_november: 'November',

      // Step 7 labels
      label_referral: 'How did you find us?',
      label_referral_source: 'How did you find us?',
      referral_select: 'Select an option',
      referral_placeholder: 'Select an option',
      referral_google: 'Google',
      referral_facebook: 'Facebook / Instagram',
      referral_whatsapp: 'WhatsApp',
      referral_friend: 'Friend/family recommendation',
      referral_other: 'Other',
      label_notes: 'Additional notes',
      label_additional_notes: 'Additional notes',
      ph_notes: 'Anything else you\'d like us to know...',
      ph_additional_notes: 'Anything else you\'d like us to know...',
      consent_text: 'I understand and agree that Negocio Listo / Poppy Marketing & Consulting LLC is not a law firm, does not provide legal advice, and services are limited to document preparation under TX Gov Code \u00A7406.017. The information provided will be used exclusively to prepare my LLC formation documents.',

      // Buttons
      btn_next: 'Next',
      btn_back: 'Back',
      btn_submit: 'Submit Form',
      btn_submitting: 'Submitting...',

      // Success
      success_title: 'We received your information',
      success_message: 'We\'ll review your information and contact you within 1 business day to confirm your LLC details.',
      success_whatsapp: 'Message us on WhatsApp if you have questions',
      success_home: 'Back to home',

      // Disclaimers
      mini_disclaimer: 'Negocio Listo is not a law firm. Document preparation service.',
      footer_disclaimer: 'Negocio Listo is a DBA of Poppy Marketing & Consulting LLC. We are not attorneys and do not provide legal advice. Document preparation service under TX Gov Code \u00A7406.017.',

      // Validation errors
      error_required: 'This field is required',
      error_email: 'Enter a valid email address',
      error_phone: 'Enter a valid phone number',
      error_zip: 'Enter a valid zip code (5 digits)',
      error_select_option: 'Select an option',
      error_consent: 'You must accept the terms to continue',
      error_form_submit: 'There was an error. Please try again.'
    }
  };

  // ----------------------------------------------------------
  // DOM references (set in init)
  // ----------------------------------------------------------
  var form;
  var card;

  // ----------------------------------------------------------
  // Translation application
  // ----------------------------------------------------------
  function applyTranslations() {
    var t = T[currentLang];

    // textContent translations
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key]) {
        el.textContent = t[key];
      }
    });

    // placeholder translations
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (t[key]) {
        el.placeholder = t[key];
      }
    });

    // Update progress label to match current step
    updateProgressLabel();
  }

  // ----------------------------------------------------------
  // Toggle display helpers
  // ----------------------------------------------------------
  function updateToggleDisplay() {
    var toggle = document.getElementById('langToggle');
    if (!toggle) return;
    var spans = toggle.querySelectorAll('span');
    if (spans.length < 2) return;
    if (currentLang === 'es') {
      spans[0].className = 'lang-active';
      spans[1].className = 'lang-inactive';
    } else {
      spans[0].className = 'lang-inactive';
      spans[1].className = 'lang-active';
    }
  }

  function updateProgressLabel() {
    var label = document.getElementById('progressLabel');
    if (!label) return;
    var stepWord = currentLang === 'es' ? 'Paso' : 'Step';
    var ofWord = currentLang === 'es' ? 'de' : 'of';
    label.textContent = stepWord + ' ' + currentStep + ' ' + ofWord + ' ' + totalSteps + ' -- ' + stepNames[currentLang][currentStep - 1];
  }

  // ----------------------------------------------------------
  // Step navigation
  // ----------------------------------------------------------
  function showStep(step) {
    // Update active wizard step
    document.querySelectorAll('.wizard-step').forEach(function (el) {
      el.classList.remove('active');
    });
    var target = document.querySelector('.wizard-step[data-step="' + step + '"]');
    if (target) {
      target.classList.add('active');
    }

    // Update progress bar segments
    document.querySelectorAll('.progress-segment').forEach(function (seg) {
      var segNum = parseInt(seg.getAttribute('data-seg'), 10);
      seg.classList.remove('active', 'completed');
      if (segNum < step) {
        seg.classList.add('completed');
      } else if (segNum === step) {
        seg.classList.add('active');
      }
    });

    // Update progress label
    updateProgressLabel();

    // Update aria
    var progressBar = document.querySelector('.progress-bar');
    if (progressBar) {
      progressBar.setAttribute('aria-valuenow', String(step));
    }

    // Scroll to top of card
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // GA4 tracking
    trackStep(step);
  }

  function nextStep() {
    if (!validateStep(currentStep)) {
      scrollToFirstError();
      return;
    }
    if (currentStep < totalSteps) {
      currentStep++;
      showStep(currentStep);
    }
  }

  function prevStep() {
    if (currentStep > 1) {
      clearErrors();
      currentStep--;
      showStep(currentStep);
    }
  }

  // ----------------------------------------------------------
  // Validation
  // ----------------------------------------------------------
  function validateStep(step) {
    clearErrors();
    var valid = true;

    switch (step) {
      case 1:
        valid = validateRequired('full_name', 'error_required') && valid;
        valid = validateEmail('email') && valid;
        valid = validatePhone('phone') && valid;
        valid = validateRadioGroup('preferred_contact', 'error_select_option') && valid;
        valid = validateRadioGroup('preferred_language', 'error_select_option') && valid;
        valid = validateRequired('mailing_street', 'error_required') && valid;
        valid = validateRequired('mailing_city', 'error_required') && valid;
        valid = validateRequired('mailing_state', 'error_required') && valid;
        valid = validateZip('mailing_zip') && valid;
        // Return early pattern avoided -- all fields checked so all errors show at once
        break;

      case 2:
        valid = validateRequired('llc_name_1', 'error_required') && valid;
        valid = validateRequired('business_description', 'error_required') && valid;
        valid = validateRadioGroup('num_owners', 'error_select_option') && valid;
        valid = validateRadioGroup('ssn_itin_status', 'error_select_option') && valid;
        break;

      case 3:
        valid = validateRadioGroup('management_type', 'error_select_option') && valid;
        // additional_owners required only if num_owners > 1 and group is visible
        var ownersGroup = document.getElementById('additionalOwnersGroup');
        if (ownersGroup && ownersGroup.classList.contains('visible')) {
          var ownersField = document.getElementById('additionalOwners');
          if (!ownersField || !ownersField.value.trim()) {
            showError(ownersField, 'error_required');
            valid = false;
          }
        }
        break;

      case 4:
        valid = validateRadioGroup('ra_preference', 'error_select_option') && valid;
        // If self, validate RA address fields
        var raPref = getRadioValue('ra_preference');
        if (raPref === 'self') {
          valid = validateRequired('ra_street', 'error_required') && valid;
          valid = validateRequired('ra_city', 'error_required') && valid;
          valid = validateRequired('ra_state', 'error_required') && valid;
          valid = validateZip('ra_zip') && valid;
        }
        valid = validateRadioGroup('office_same_as_mailing', 'error_select_option') && valid;
        var officeSame = getRadioValue('office_same_as_mailing');
        if (officeSame === 'no') {
          valid = validateRequired('office_street', 'error_required') && valid;
          valid = validateRequired('office_city', 'error_required') && valid;
          valid = validateRequired('office_state', 'error_required') && valid;
          valid = validateZip('office_zip') && valid;
        }
        break;

      case 5:
        valid = validateRadioGroup('effective_date_type', 'error_select_option') && valid;
        var effType = getRadioValue('effective_date_type');
        if (effType === 'specific_date') {
          valid = validateRequired('effective_date', 'error_required') && valid;
        }
        valid = validateRequired('business_start_date', 'error_required') && valid;
        valid = validateRequired('primary_activity', 'error_required') && valid;
        valid = validateRadioGroup('expect_employees', 'error_select_option') && valid;
        break;

      case 6:
        var consentBox = document.getElementById('consent');
        if (!consentBox || !consentBox.checked) {
          showError(consentBox, 'error_consent');
          valid = false;
        }
        break;
    }

    return valid;
  }

  // -- Validation helpers --

  function validateRequired(fieldName, messageKey) {
    var field = form.querySelector('[name="' + fieldName + '"]');
    if (!field) return true;
    if (!field.value.trim()) {
      showError(field, messageKey);
      return false;
    }
    return true;
  }

  function validateEmail(fieldName) {
    var field = form.querySelector('[name="' + fieldName + '"]');
    if (!field) return true;
    var val = field.value.trim();
    if (!val) {
      showError(field, 'error_required');
      return false;
    }
    // Basic email regex
    var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(val)) {
      showError(field, 'error_email');
      return false;
    }
    return true;
  }

  function validatePhone(fieldName) {
    var field = form.querySelector('[name="' + fieldName + '"]');
    if (!field) return true;
    var val = field.value.trim();
    if (!val) {
      showError(field, 'error_required');
      return false;
    }
    // Strip formatting characters and check length
    var digits = val.replace(/[\s()\-+.]/g, '');
    if (digits.length < 7) {
      showError(field, 'error_phone');
      return false;
    }
    return true;
  }

  function validateZip(fieldName) {
    var field = form.querySelector('[name="' + fieldName + '"]');
    if (!field) return true;
    var val = field.value.trim();
    if (!val) {
      showError(field, 'error_required');
      return false;
    }
    if (!/^[0-9]{5}$/.test(val)) {
      showError(field, 'error_zip');
      return false;
    }
    return true;
  }

  function validateRadioGroup(groupName, messageKey) {
    var checked = document.querySelector('input[name="' + groupName + '"]:checked');
    if (!checked) {
      // Find the group container to apply error styling
      var firstRadio = document.querySelector('input[name="' + groupName + '"]');
      if (firstRadio) {
        var container = firstRadio.closest('.radio-inline-group') ||
                        firstRadio.closest('.radio-cards') ||
                        firstRadio.closest('.radio-group') ||
                        firstRadio.closest('.form-group');
        showErrorOnGroup(container, messageKey);
      }
      return false;
    }
    return true;
  }

  function validateSelect(fieldName, messageKey) {
    var field = form.querySelector('[name="' + fieldName + '"]');
    if (!field) return true;
    if (!field.value) {
      showError(field, messageKey);
      return false;
    }
    return true;
  }

  function getRadioValue(groupName) {
    var checked = document.querySelector('input[name="' + groupName + '"]:checked');
    return checked ? checked.value : null;
  }

  // -- Error display --

  function showError(field, messageKey) {
    if (!field) return;
    var group = field.closest('.form-group') || field.closest('.consent-group');
    if (!group) return;
    group.classList.add('has-error');

    // Find or create error element
    var errorEl = group.querySelector('.field-error');
    if (!errorEl) {
      errorEl = document.createElement('p');
      errorEl.className = 'field-error';
      errorEl.style.color = '#D32F2F';
      errorEl.style.fontSize = '0.85rem';
      errorEl.style.marginTop = '0.25rem';
      group.appendChild(errorEl);
    }
    errorEl.textContent = T[currentLang][messageKey] || messageKey;
    errorEl.style.display = 'block';
  }

  function showErrorOnGroup(container, messageKey) {
    if (!container) return;
    // Walk up to .form-group if we're in a radio sub-container
    var group = container.closest('.form-group');
    if (group) {
      group.classList.add('has-error');
    }
    container.classList.add('has-error');

    // Find or create error element in the parent form-group
    var target = group || container;
    var errorEl = target.querySelector('.field-error');
    if (!errorEl) {
      errorEl = document.createElement('p');
      errorEl.className = 'field-error';
      errorEl.style.color = '#D32F2F';
      errorEl.style.fontSize = '0.85rem';
      errorEl.style.marginTop = '0.25rem';
      target.appendChild(errorEl);
    }
    errorEl.textContent = T[currentLang][messageKey] || messageKey;
    errorEl.style.display = 'block';
  }

  function clearErrors() {
    document.querySelectorAll('.has-error').forEach(function (el) {
      el.classList.remove('has-error');
    });
    document.querySelectorAll('.field-error').forEach(function (el) {
      el.style.display = 'none';
    });
  }

  function scrollToFirstError() {
    var first = document.querySelector('.has-error');
    if (first) {
      first.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  // ----------------------------------------------------------
  // Conditional logic
  // ----------------------------------------------------------
  function toggleConditional(groupId, show) {
    var group = document.getElementById(groupId);
    if (!group) return;
    if (show) {
      group.classList.add('visible');
    } else {
      group.classList.remove('visible');
      // Clear all inputs inside
      group.querySelectorAll('input, textarea, select').forEach(function (input) {
        if (input.type === 'checkbox' || input.type === 'radio') {
          input.checked = false;
        } else {
          input.value = '';
        }
        input.removeAttribute('required');
      });
    }
  }

  function setupConditionalLogic() {
    // num_owners: show additional owners group when > 1
    document.querySelectorAll('input[name="num_owners"]').forEach(function (radio) {
      radio.addEventListener('change', function () {
        var val = this.value;
        if (val !== '1') {
          toggleConditional('additionalOwnersGroup', true);
          var textarea = document.getElementById('additionalOwners');
          if (textarea) textarea.setAttribute('required', '');
        } else {
          toggleConditional('additionalOwnersGroup', false);
        }
      });
    });

    // ra_preference: show RA address when self
    document.querySelectorAll('input[name="ra_preference"]').forEach(function (radio) {
      radio.addEventListener('change', function () {
        var val = this.value;
        if (val === 'self') {
          toggleConditional('raAddressGroup', true);
          var fields = ['ra_street', 'ra_city', 'ra_state', 'ra_zip'];
          fields.forEach(function (name) {
            var f = form.querySelector('[name="' + name + '"]');
            if (f) f.setAttribute('required', '');
          });
        } else {
          toggleConditional('raAddressGroup', false);
        }
      });
    });

    // office_same_as_mailing: show office address when no
    document.querySelectorAll('input[name="office_same_as_mailing"]').forEach(function (radio) {
      radio.addEventListener('change', function () {
        var val = this.value;
        if (val === 'no') {
          toggleConditional('officeAddressGroup', true);
          var fields = ['office_street', 'office_city', 'office_state', 'office_zip'];
          fields.forEach(function (name) {
            var f = form.querySelector('[name="' + name + '"]');
            if (f) f.setAttribute('required', '');
          });
        } else {
          toggleConditional('officeAddressGroup', false);
        }
      });
    });

    // effective_date_type: show date picker when specific_date
    document.querySelectorAll('input[name="effective_date_type"]').forEach(function (radio) {
      radio.addEventListener('change', function () {
        var val = this.value;
        if (val === 'specific_date') {
          toggleConditional('effectiveDateGroup', true);
          var f = form.querySelector('[name="effective_date"]');
          if (f) f.setAttribute('required', '');
        } else {
          toggleConditional('effectiveDateGroup', false);
        }
      });
    });
  }

  // ----------------------------------------------------------
  // Radio selection class fallback (for Safari / no :has())
  // ----------------------------------------------------------
  function setupRadioSelection() {
    document.querySelectorAll('.radio-inline input, .radio-card input').forEach(function (radio) {
      radio.addEventListener('change', function () {
        var groupName = this.name;
        // Remove selected from all siblings in this group
        document.querySelectorAll('input[name="' + groupName + '"]').forEach(function (r) {
          var parent = r.closest('.radio-inline, .radio-card');
          if (parent) {
            parent.classList.remove('selected');
          }
        });
        // Add selected to current
        var parent = this.closest('.radio-inline, .radio-card');
        if (parent) {
          parent.classList.add('selected');
        }
      });
    });
  }

  // ----------------------------------------------------------
  // Form submission
  // ----------------------------------------------------------
  function handleSubmit() {
    if (!validateStep(7)) {
      scrollToFirstError();
      return;
    }

    var submitBtn = form.querySelector('[data-action="submit"]');
    if (!submitBtn) return;

    // Disable button and show submitting text
    submitBtn.disabled = true;
    submitBtn.textContent = T[currentLang].btn_submitting;

    // Set hidden fields
    var fullName = (form.querySelector('[name="full_name"]') || {}).value || '';
    var llcName = (form.querySelector('[name="llc_name_1"]') || {}).value || '';
    var emailVal = (form.querySelector('[name="email"]') || {}).value || '';

    var subjectField = document.getElementById('hiddenSubject');
    if (subjectField) {
      subjectField.value = 'Intake: ' + fullName + ' -- ' + llcName;
    }

    var replyToField = document.getElementById('hiddenReplyTo');
    if (replyToField) {
      replyToField.value = emailVal;
    }

    var langField = document.getElementById('hiddenLang');
    if (langField) {
      langField.value = currentLang;
    }

    var timestampField = document.getElementById('hiddenTimestamp');
    if (timestampField) {
      timestampField.value = new Date().toISOString();
    }

    // Submit via fetch
    fetch('https://formspree.io/f/xjgeqapb', {
      method: 'POST',
      body: new FormData(form),
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(function (response) {
      if (response.ok) {
        // Success
        form.style.display = 'none';
        var successEl = document.getElementById('intakeSuccess');
        if (successEl) {
          successEl.style.display = 'block';
        }

        // Re-initialize Lucide icons for the success icon
        if (window.lucide) {
          lucide.createIcons();
        }

        // GA4 conversion event
        if (window.gtag) {
          gtag('event', 'intake_complete', {});
        }

        // Scroll to top of card
        if (card) {
          card.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        throw new Error('Form submission failed');
      }
    })
    .catch(function () {
      // Re-enable button
      submitBtn.disabled = false;
      submitBtn.textContent = T[currentLang].error_form_submit;

      // Restore original text after 3 seconds
      setTimeout(function () {
        submitBtn.textContent = T[currentLang].btn_submit;
      }, 3000);
    });
  }

  // ----------------------------------------------------------
  // GA4 step tracking
  // ----------------------------------------------------------
  function trackStep(step) {
    if (window.gtag) {
      gtag('event', 'intake_step_view', {
        step_number: step,
        step_name: stepIds[step - 1]
      });
    }
  }

  // ----------------------------------------------------------
  // Event delegation for nav buttons
  // ----------------------------------------------------------
  function setupNavigation() {
    document.addEventListener('click', function (e) {
      var btn = e.target.closest('button[data-action]');
      if (!btn) return;
      if (btn.dataset.action === 'next') nextStep();
      if (btn.dataset.action === 'prev') prevStep();
      if (btn.dataset.action === 'submit') handleSubmit();
    });

    // Enter key handling -- advance to next step unless in a textarea
    form.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
        e.preventDefault();
        if (currentStep < totalSteps) {
          nextStep();
        }
      }
    });

    // Prevent default form submission entirely
    form.addEventListener('submit', function (e) {
      e.preventDefault();
    });
  }

  // ----------------------------------------------------------
  // Init
  // ----------------------------------------------------------
  function init() {
    form = document.getElementById('intakeForm');
    card = document.querySelector('.intake-card');

    if (!form) return;

    // Detect language from URL
    var params = new URLSearchParams(window.location.search);
    if (params.get('lang') === 'en') {
      currentLang = 'en';
    }

    // Apply translations
    applyTranslations();

    // Update toggle display
    updateToggleDisplay();

    // Set initial lang attribute
    document.documentElement.lang = currentLang;

    // Set initial hidden lang value
    var hiddenLang = document.getElementById('hiddenLang');
    if (hiddenLang) {
      hiddenLang.value = currentLang;
    }

    // Set up language toggle listener
    var langToggle = document.getElementById('langToggle');
    if (langToggle) {
      langToggle.addEventListener('click', function () {
        currentLang = currentLang === 'es' ? 'en' : 'es';
        applyTranslations();
        updateToggleDisplay();
        updateProgressLabel();
        document.documentElement.lang = currentLang;
        var hl = document.getElementById('hiddenLang');
        if (hl) {
          hl.value = currentLang;
        }
        // Update URL param without reload
        var url = new URL(window.location);
        if (currentLang === 'en') {
          url.searchParams.set('lang', 'en');
        } else {
          url.searchParams.delete('lang');
        }
        history.replaceState({}, '', url);
      });
    }

    // Set up conditional logic listeners
    setupConditionalLogic();

    // Set up radio selection class fallback
    setupRadioSelection();

    // Set up navigation event delegation
    setupNavigation();

    // Apply .selected to any pre-checked radios on load (fallback for no :has())
    document.querySelectorAll('.radio-inline input:checked, .radio-card input:checked').forEach(function (radio) {
      var parent = radio.closest('.radio-inline, .radio-card');
      if (parent) parent.classList.add('selected');
    });

    // Show step 1
    showStep(1);

    // Initialize Lucide icons
    if (window.lucide) {
      lucide.createIcons();
    }

    // Track initial step
    trackStep(1);
  }

  document.addEventListener('DOMContentLoaded', init);
})();
