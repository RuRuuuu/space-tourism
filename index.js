let hiddenDiv = document.querySelector(".mobile-nav");
let btnHiden = document.querySelector(".mobile-navbtn");
let btnReveal = document.querySelector(".mobile-navreveal");

btnReveal.addEventListener("click", function () {
  hiddenDiv.style.display = "block";
  btnReveal.style.display = "none";
});

btnHiden.addEventListener("click", function () {
  hiddenDiv.style.display = "none";
  btnReveal.style.display = "block";
});
