// Video Model Start
var modal = document.querySelector(".modal");
var btn1 = document.getElementById("openModalBtn-1");
var btn2 = document.getElementById("openModalBtn-2");
var span = document.getElementsByClassName("close")[0];
btn1.onclick = function () {
  modal.style.display = "block";
}
btn2.onclick = function () {
  modal.style.display = "block";
}

span.onclick = function () {
  modal.style.display = "none";
}
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// Video Model End