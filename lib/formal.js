Formal = {
  initialize: function() {
    $('form').on('submit', this.validateAndSubmitForm);
    $('input', 'textarea').on('keydown', this.unmarkInvalidField);
  },

  validateAndSubmitForm: function() {
    var $form = $(this);
    $form.find('.invalid').removeClass('invalid');

    if ($form.hasClass('skip-validations')) return true;
    if (Formal.validateForm($form)) Formal.submitFormOrTriggerValidationCallback(this);

    return false;
  },

  submitFormOrTriggerValidationCallback: function(form) {
    var hasValidationCallback = !!$._data(form, 'events')['validated'];
    if (hasValidationCallback) {
      $(form).trigger('validated')
    } else {
      Formal.submitForm.call(form);
    }
  },

  unmarkInvalidField: function() {
    var $field = $(this);
    $field.removeClass('invalid');
  },

  submitForm: function() {
    var $form = $(this);
    $form.get(0).submit();
  },

  validateForm: function($form) {
    var isValid = true;

    $form.find('input, textarea').each(function(index, field) {
      var $field = $(field);

      if (!Formal.validateField($field)) {
        $field.addClass('invalid');
        isValid = false;
      };
    })

    $form.find('.invalid').first().focus();

    return isValid;
  },

  validateField: function($field) {
    return (
      Formal.validatePresence($field) &&
      Formal.validatePhoneNumber($field) &&
      Formal.validateEmail($field) &&
      Formal.validateNumber($field) &&
      Formal.validateLength($field)
    );
  },

  validatePresence: function($field) {
    if (!$field.hasClass('validate-presence')) return true;
    return !!$field.val().trim();
  },

  validatePhoneNumber: function($field) {
    if (!$field.hasClass('validate-phone-number')) return true;
    return !!($field.val().replace(/[^0-9]/g, '').length === 10);
  },

  validateEmail: function($field) {
    if (!$field.hasClass('validate-email')) return true;
    return !!$field.val().match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  },

  validateNumber: function($field) {
    if (!$field.hasClass('validate-number')) return true;
    return !!$field.val().match(/\d+/g);
  },

  validateLength: function($field) {
    if (!$field.hasClass('validate-length')) return true;

    if ($field.val().length < $field.data('min-length')) return false;
    if ($field.val().length > $field.data('max-length')) return false;

    return true;
  }
}