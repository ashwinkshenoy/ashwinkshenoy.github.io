// $(document).ready(function($) {

// });

WebFontConfig = {
  google: { families: [ 'Open+Sans:400,300,600,700,800' ] }
};

var cb = function() {
  var wf = document.createElement('script');
  wf.src = '//ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
};

var raf = requestAnimationFrame || mozRequestAnimationFrame || webkitRequestAnimationFrame || msRequestAnimationFrame;

if(raf){
  raf(cb);
}else{
  window.addEventListener('load', cb);
}
