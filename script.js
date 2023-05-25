let planetMessage = document.querySelector(".planet-p");
let mars = document.querySelector(".mars-nav");
let planetImg = document.querySelector(".planet-img");
let planetH2 = document.querySelector(".planet-h2");
let pFooter1 = document.querySelector(".footer-p1");
let pFooter2 = document.querySelector(".footer-p2");
let europa = document.querySelector(".euro-nav");
let titan = document.querySelector(".titan-nav");
let moon = document.querySelector(".moon-nav");

mars.addEventListener("click", function () {
  titan.classList.remove("hidden1");
  moon.classList.remove("hidden1");
  mars.classList.add("hidden1");
  europa.classList.remove("hidden1");
  planetImg.classList.add("trans");
  mars.style.cursor = "pointer";
  planetH2.innerText = "mars";
  pFooter1.innerText = "225 MIL. KM";
  pFooter2.innerText = "9 MONTHS";

  planetImg.src = "starter-code/assets/destination/image-mars.png";
  planetMessage.innerText =
    "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons,the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!";
  setTimeout(function () {
    planetImg.classList.remove("trans");
  }, 500);
});

europa.addEventListener("click", function () {
  titan.classList.remove("hidden1");
  moon.classList.remove("hidden1");
  mars.classList.remove("hidden1");
  europa.classList.add("hidden1");
  planetImg.classList.add("trans");
  planetH2.innerText = "europa";

  pFooter1.innerText = "628 MIL. KM";
  pFooter2.innerText = "9 MONTHS";

  planetImg.src = "starter-code/assets/destination/image-europa.png";
  planetMessage.innerText =
    "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";

  setTimeout(function () {
    planetImg.classList.remove("trans");
  }, 500);
});
titan.addEventListener("click", function () {
  titan.classList.add("hidden1");
  moon.classList.remove("hidden1");
  mars.classList.remove("hidden1");
  europa.classList.remove("hidden1");

  planetImg.classList.add("trans");
  planetH2.innerText = "titan";
  pFooter1.innerText = "1.6 BILL. KM";
  pFooter2.innerText = "7 YEARS";

  planetImg.src = "starter-code/assets/destination/image-titan.png";
  planetMessage.innerText =
    "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
  setTimeout(function () {
    planetImg.classList.remove("trans");
  }, 500);
});

moon.addEventListener("click", function () {
  moon.classList.add("hidden1");
  titan.classList.remove("hidden1");
  mars.classList.remove("hidden1");
  europa.classList.remove("hidden1");
  planetImg.classList.add("trans");
  planetH2.innerText = "moon";
  pFooter1.innerText = "384,400 KM";
  pFooter2.innerText = "3 DAYS";

  planetImg.src = "starter-code/assets/destination/image-moon.png";
  planetMessage.innerText =
    "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
  setTimeout(function () {
    planetImg.classList.remove("trans");
  }, 500);
});

//code for the nav section
