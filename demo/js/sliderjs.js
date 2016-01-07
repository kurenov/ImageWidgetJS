/* 
    Created on : Jan 4, 2016, 10:59:48 PM
    Author     : Olzhas Kurenov
*/

var SliderJSCounter = 0;
var SliderJSTotal = 4;
var SliderJSPause = false;


var SliderJSTimer = setInterval(function () {
  SliderJS(1);
}, 3000);

function SliderJSInit() {
  //TODO: Add code to parse slides and etc
}


function SliderJS(step) {
  var slideWidth = 280;
  var limSliderImages = document.getElementById('slider-js--images');

  if (limSliderImages != null) {

    SliderJSCounter = SliderJSCounter + step;

    if (SliderJSCounter >= SliderJSTotal) {
      SliderJSCounter = 0;
    }
    else if (SliderJSCounter < 0) {
      SliderJSCounter = SliderJSTotal - 1;
    }

    var pager = document.getElementById("slider-js-footer");
    pager.innerHTML = (SliderJSCounter + 1) + '/' + SliderJSTotal;
    var offset = (SliderJSCounter * slideWidth);
    limSliderImages.style.left = '-' + offset + 'px';
  }
}
