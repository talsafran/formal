$(function() {
  Formal.initialize();

  $('form').on('validated', function() {
    alert("Congratulations! The form validated. I'll submit it for real now.");
    Formal.submitForm($form);
  });
});
