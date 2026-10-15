/* Profile photo.
   Permanent: save your picture as assets/photo.jpg and it loads automatically.
   Preview only: click the photo box to pick a picture (not saved after reload). */
(function () {
  var box = document.querySelector('.photo');
  var hint = document.getElementById('ph');
  var input = document.getElementById('file');

  function show(src) {
    var old = box.querySelector('img');
    if (old) old.remove();
    var img = document.createElement('img');
    img.src = src;
    img.alt = 'Raushan Chaubey';
    box.appendChild(img);
    hint.style.display = 'none';
  }

  var probe = new Image();
  probe.onload = function () { show(probe.src); };
  probe.src = 'photo/IMG_6155.jpg';

  input.addEventListener('change', function (e) {
    var f = e.target.files[0];
    if (!f) return;
    var r = new FileReader();
    r.onload = function () { show(r.result); };
    r.readAsDataURL(f);
  });
})();
