/* 
    Created on : Jan 4, 2016, 10:59:48 PM
    Author     : Olzhas Kurenov
*/

function imageWidgetJSInit() {

}

var imageWidgetJSCounter = 0;
var imageWidgetJSTotal = 4;
var imageWidgetJSImages = ['scooter.jpg', '119rc.jpg', 'ELE.jpg', 'mi_1026.jpg'];
var limPause = false;


var limTimer = setInterval(function () {
  imageWidgetJS(1);
}, 4000);

function imageWidgetJS(step) {

  if (limPause) {
    limPause = false;
  }
  else {
    var imageWidgetJSImage = document.getElementById('image-widget-js-image');

    if (imageWidgetJSImage != null) {
      var temp = imageWidgetJSCounter;
      imageWidgetJSCounter = imageWidgetJSCounter + step;

      if (imageWidgetJSCounter >= imageWidgetJSTotal) {
        imageWidgetJSCounter = 0;
      }
      else if (imageWidgetJSCounter < 0) {
        imageWidgetJSCounter = imageWidgetJSTotal - 1;
      }

      limMakeLinkActive(temp, imageWidgetJSCounter);

      imageWidgetJSImage.src = 'images/' + imageWidgetJSImages[imageWidgetJSCounter];
    }

  }


//  setInterval(function(){
//    imageWidgetJS(1);
//  } , 4000);
}

function limMakeLinkActive(imageWidgetJSCounter, index) {
  var limPreviousLink = document.getElementById('image-widget-js-link-' + imageWidgetJSCounter);
  limPreviousLink.className = "lim-passive";

  var limActiveLink = document.getElementById('image-widget-js-link-' + index);
  limActiveLink.className = "lim-active";
}

function limSetImage(index) {
  var imageWidgetJSImage = document.getElementById('image-widget-js-image');
  imageWidgetJSImage.src = 'assets/images/' + imageWidgetJSImages[index];
  limMakeLinkActive(imageWidgetJSCounter, index);
  imageWidgetJSCounter = index;
  limPause = true;
}

