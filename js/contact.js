/* Contact form: opens the visitor's email app with the message filled in.
   To receive messages without a mail app, connect a form service such as Formspree. */
(function () {
  var EMAIL = 'raushanchaubey786@gmail.com';

  document.getElementById('f').addEventListener('submit', function (e) {
    e.preventDefault();
    var d = new FormData(e.target);
    var body = 'Name: ' + d.get('n') + '\nEmail: ' + d.get('e') + '\nTopic: ' + d.get('b') + '\n\n' + d.get('m');
    location.href = 'mailto:' + EMAIL +
      '?subject=' + encodeURIComponent('Portfolio enquiry from ' + d.get('n')) +
      '&body=' + encodeURIComponent(body);
  });
})();
