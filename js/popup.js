var button = document.querySelector(".popup-button");
var popup = document.querySelector(".searchform");
var arrivalDate = document.querySelector("arrival-input");
var departureDate = document.querySelector("departure-input");

popup.classList.add("searchform-close");
button.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("searchform-close");
});
popup.addEventListener("sumbit", function (evt) {
  if (!arrivalDate.value || !departureDate.value) {
    evt.preventDefault();
    popup.classList.remove("popup-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("popup-error");
  }
});
