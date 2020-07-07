var button = document.querySelector(".popup-button");
var popup = document.querySelector(".searchform");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("searchform-close");
});
