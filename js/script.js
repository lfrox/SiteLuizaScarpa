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
