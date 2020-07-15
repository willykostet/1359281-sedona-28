var button = document.querySelector(".popup-button");
var popup = document.querySelector(".searchform");
var arrivalDate = document.querySelector("arrival-input");
var departureDate = document.querySelector("departure-input");

popup.classList.add("searchform-close");
button.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("searchform-close");
});
