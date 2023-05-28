let btn1 = document.querySelector(".btn");
let btn2 = document.querySelector(".btnn");
let btn3 = document.querySelector(".btnnn");
let spanTech = document.querySelector(".span-tech");
let hTech = document.querySelector(".h2-tech");
let pTech = document.querySelector(".p-tech");
let techImg = document.querySelector(".tech-img");
let mobileImg = document.querySelector(".mobile-imgtech");

btn1.addEventListener("click", function () {
  btn1.style.backgroundColor = "white";
  btn2.style.backgroundColor = "transparent";
  btn3.style.backgroundColor = "transparent";
  btn3.style.color = "white";

  btn2.style.color = "white";
  btn1.style.color = "black";
  hTech.textContent = "LAUNCH VEHICLE";
  techImg.src =
    "starter-code/assets/technology/image-launch-vehicle-portrait.jpg";
  pTech.textContent =
    "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";

  mobileImg.src =
    "starter-code/assets/technology/image-launch-vehicle-landscape.jpg"; //landscape image for mobile resposiveness
});

btn2.addEventListener("click", function () {
  btn1.style.backgroundColor = "transparent";
  btn2.style.backgroundColor = "white";
  btn3.style.backgroundColor = "transparent";
  btn1.style.color = "white";
  btn3.style.color = "white";
  btn2.style.color = "black";
  hTech.textContent = "SPACEPORT";
  techImg.src = "starter-code/assets/technology/image-spaceport-portrait.jpg";
  pTech.textContent =
    "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.";
  mobileImg.src =
    "starter-code/assets/technology/image-spaceport-landscape.jpg"; //landscape image for mobile resposiveness
});

btn3.addEventListener("click", function () {
  btn3.style.backgroundColor = "white";
  btn1.style.backgroundColor = "transparent";
  btn2.style.backgroundColor = "transparent";
  btn1.style.color = "white";
  btn2.style.color = "white";
  btn3.style.color = "black";
  hTech.textContent = "SPACE CAPSULE";
  techImg.src =
    "starter-code/assets/technology/image-space-capsule-portrait.jpg";
  pTech.textContent =
    "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";
  mobileImg.src =
    "starter-code/assets/technology/image-space-capsule-landscape.jpg"; //landscape image for mobile resposiveness
});

// code for the mobile nav-bar
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
