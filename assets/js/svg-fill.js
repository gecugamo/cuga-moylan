(function() {
  var path = document.getElementById('diamond');
  var len = path.getTotalLength();

  function setStyles() {
    path.style.strokeDasharray = len + ' ' + len;
    path.style.strokeDashoffset = len;
  }

  function triggerAnimation() {
    path.style.strokeDashoffset = 0;
    setTimeout(function() {
      path.style.fill = '#fff';
    }, 3500);
  }

  setStyles();
  window.addEventListener('load', triggerAnimation);
}());