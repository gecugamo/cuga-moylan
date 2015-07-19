(function() {
  var path = document.getElementById('g');
  var len = path.getTotalLength();

  function setStyles() {
    path.style.strokeDasharray = len + ' ' + len;
    path.style.strokeDashoffset = len;
  }

  function triggerAnimation() {
    path.style.strokeDashoffset = 0;
    setTimeout(function() {
      path.style.fill = '#000';
    }, 2500);
  }

  setStyles();
  window.addEventListener('load', triggerAnimation);
}());