var menu = document.querySelector(".menu")
var setacima = document.querySelector(".setacima")
var setabaixo = document.querySelector(".setabaixo")

menu.addEventListener("click", () => {
  menu.classList.toggle("hide")
  menu.classList.toggle("show")
  setabaixo.classList.toggle("hide")
  setacima.classList.toggle("show")
  setabaixo.classList.toggle("show")
  setacima.classList.toggle("hide")
});

// $(".menu").click(function() { // function() {} === () => {}
//   $(this).toggleClass("hide show")
//   $(".setacima").toggleClass("hide show")
//   $(".setabaixo").toggleClass("hide show")
// });

$('[data-fancybox]').fancybox({
  keyboard: true,
  loop: true,
  protect: true,
  buttons : [
    "zoom",
    "share",
    "slideShow",
    "fullScreen",
    "thumbs",
    "close"
  ],
  animationEffect: "zoom",
  transitionEffect: "zoom-in-out",
  transitionDuration: 466,
});


$('[data-fancybox="watermark"]').fancybox({
  protect    : true,
  slideClass : 'watermark',
  toolbar    : false,
  smallBtn   : true
});

// Preload watermark image
// Please, use your own image
(new Image()).src = "https://fancyapps.com/GJbkSPU.png";
