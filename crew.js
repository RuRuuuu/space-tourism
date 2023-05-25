//array for the team message
let arrCrew = [
  "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
];
console.log(arrCrew.length);
let currentIndex = 0;

function printNextMessage() {
  if (currentIndex < arrCrew.length) {
    let crewMessage = document.querySelector(".crew-p");
    crewMessage.textContent = arrCrew[currentIndex];
    currentIndex++;
  } else {
    clearInterval(intervalId); //Stop the timer when all message has been displayed
  }
}
const intervalId = setInterval(printNextMessage, 3000); //this function changes the message every 300 secs

//loop for the names
let arrNamees = [
  "ANOUSHEH ANSARI",
  "Douglas Hurley",
  "Mark Shuttleworth",
  "Victor Glover",
];
let Index = 0;
function printNextName() {
  if (Index < arrNamees.length) {
    let names = document.querySelector(".h2-crew");
    names.textContent = arrNamees[Index];
    Index++;
  } else {
    clearInterval(valId); //Stop the timer when all names have changed
  }
}
const valId = setInterval(printNextName, 3000); //this function changes the name every 300 secs

//function for title change every 5 secs
let arrTitle = ["flight engineer", "commander", "Mission Specialist", "pilot"];
let counter = 0;
function printNextTile() {
  if (counter < arrTitle.length) {
    let titleName = document.querySelector(".span-crew2");
    titleName.textContent = arrTitle[counter];
    counter++;
  } else {
    clearInterval(valIdName); //Stop the timer when all title names has changed
  }
}
const valIdName = setInterval(printNextTile, 3000); //this function changes the title every 300 secs

//function for changing of images every 5 seconds
let arrImg = [
  "starter-code/assets/crew/image-anousheh-ansari.png",
  "starter-code/assets/crew/image-douglas-hurley.png",
  "starter-code/assets/crew/image-mark-shuttleworth.png",
  "starter-code/assets/crew/image-victor-glover.png",
];
let i = 0;
function printNextImg() {
  if (i < arrImg.length) {
    let imgg = document.querySelector(".crew-img");
    imgg.src = arrImg[i];
    i++;
  } else {
    clearInterval(valIdImg); // Stop the timer when all imgs has changed
  }
}
const valIdImg = setInterval(printNextImg, 3000); //this function changes the image every 5 seconds

//code for the loading effect below
const divs = document.querySelectorAll(".circlee");
let dex = 0;
let lId;

function addBackgroundColor() {
  if (dex >= divs.length) {
    clearInterval(lId); // Stop the timer when all divs have been processed
    return;
  }

  const currentDiv = divs[dex];
  const previousDiv = divs[dex - 1];

  if (previousDiv) {
    previousDiv.style.backgroundColor = ""; // Remove background color from the previous div
  }

  currentDiv.style.backgroundColor = "white"; // Add background color to the current div

  dex++; // Move to the next div

  if (dex === divs.length) {
    clearInterval(lId); // Stop the timer when all divs have been processed
  }
}

// Start the timer
lId = setInterval(addBackgroundColor, 3000);

function reloadPage() {
  location.reload();
}
