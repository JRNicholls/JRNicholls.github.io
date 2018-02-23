var slide_speed = 5000;
$(document).ready(function() {
  $("#header-placeholder").load("header.html");
  slide_timeout = setTimeout(slide_next, 0);
});
var cur = 1;
function slide_next() {
  clearTimeout(slide_timeout);
  switch(cur) {
    case 1:
      document.getElementById("img1").style = "width: 0%;";
      document.getElementById("img2").style = "width: 100%;";
      cur = 2;
      break;
    case 2:
      document.getElementById("img2").style = "width: 0%;";
      document.getElementById("img3").style = "width: 100%;";
      cur = 3;
      break;
    case 3:
      document.getElementById("img3").style = "width: 0%;";
      document.getElementById("img4").style = "width: 100%;";
      cur = 4;
      break;
    case 4:
      document.getElementById("img4").style = "width: 0%;";
      document.getElementById("img1").style = "width: 100%;";
      cur = 1;
      break;
    default:
      cur = 1;
  }
  $(".toggle").toggle().toggle();
  slide_timeout = setTimeout(slide_next, slide_speed);
}

function slide_prev() {
  clearTimeout(slide_timeout);
  switch(cur) {
    case 1:
      document.getElementById("img1").style = "width: 0%;";
      document.getElementById("img4").style = "width: 100%;";
      cur = 4;
      break;
    case 2:
      document.getElementById("img2").style = "width: 0%;";
      document.getElementById("img1").style = "width: 100%;";
      cur = 1;
      break;
    case 3:
      document.getElementById("img3").style = "width: 0%;";
      document.getElementById("img2").style = "width: 100%;";
      cur = 2;
      break;
    case 4:
      document.getElementById("img4").style = "width: 0%;";
      document.getElementById("img3").style = "width: 100%;";
      cur = 3;
      break;
    default:
      cur = 1;
  }
  slide_timeout = setTimeout(slide_next, slide_speed);
}
