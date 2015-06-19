$(function() {
  Formal.initialize();

  $('form').on('validated', function() {
    alert("congratulations! the form validated. i'll submit it now");
    Formals.submitForm($form);
  });
});
