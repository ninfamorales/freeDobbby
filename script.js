//Get all the closed door elements.
let doorImage1 = document.getElementById('door1'); 
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let doorImage4 = document.getElementById('door4');
let doorImage5 = document.getElementById('door5');

//Get all the open door images from the DOM. 
let dobbyDoorPath = document.getElementById('dobby').src;
let characterOneDoorPath = document.getElementById('hippogriff').src;
let characterTwoDoorPath = document.getElementById('mandrake').src;
let characterThreeDoorPath = document.getElementById('heWhoMustNotBeNamed').src;
let characterFourDoorPath = document.getElementById('dumbledore').src;

let closedDoorPath = document.getElementById('door1').src;

numClosedDoors = 5;
let openDoor1= '';
let openDoor2= '';
let openDoor3= '';
let openDoor4= '';
let openDoor5= '';

let currentlyPlaying = true; //To be able to tell if the game is still being played. Avoids winning just by keep on clicking. 

/*This function generates a random number between 0 < numClosedDoors
Then, depending on that number, it assigns a different place for each image*/
const randomDoorGenerator = () => {
 let dobbyDoor = Math.floor(Math.random()*numClosedDoors);
    if (dobbyDoor===0){
      openDoor1 = dobbyDoorPath;
      openDoor2 = characterOneDoorPath;
      openDoor3 = characterThreeDoorPath
      openDoor4 = characterTwoDoorPath;
      openDoor5 = characterFourDoorPath;
    } else if (dobbyDoor===1){
      openDoor1 = characterOneDoorPath;
      openDoor2 = characterThreeDoorPath;
      openDoor3 = dobbyDoorPath;
      openDoor4 = characterFourDoorPath
      openDoor5 = characterTwoDoorPath;
    } else if (dobbyDoor===2){
      openDoor1 = characterTwoDoorPath;
      openDoor2 = characterFourDoorPath;
      openDoor3 = characterThreeDoorPath;
      openDoor4 = characterOneDoorPath;
      openDoor5 = dobbyDoorPath;
    } else if (dobbyDoor===3){
      openDoor1 = dobbyDoorPath;
      openDoor2 = characterTwoDoorPath;
      openDoor3 = characterFourDoorPath;
      openDoor4 = characterThreeDoorPath;
      openDoor5 =  characterOneDoorPath;
    } else if (dobbyDoor===4){
      openDoor1 = characterThreeDoorPath;
      openDoor2 = characterTwoDoorPath;
      openDoor3 = dobbyDoorPath;
      openDoor4 = characterFourDoorPath;
      openDoor5 = characterOneDoorPath;
    }
}

//Function to know if the dobby image has appeared.
const isDobby = (door) => {
  if (door.src=== dobbyDoorPath) {
    return true;
  } else {
    return false;
  }
}

//Function to check if a door has been clicked.
const isClicked = (door) => {
  if (door.src === closedDoorPath){
    return false;
  } else {
    return true;
  }
}
//Function to see if you win or lose. 
const playDoor = (door) => {
  numClosedDoors--;
  if (isDobby(door)){
    gameOver('win');
  }
  else if (numClosedDoors === 2){
    gameOver();
  }
}

//Events to open doors and show the other image. 
doorImage1.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage1)) { //If the user is currently playing and the image is clicked then change the source of doorImage1 to opendoor1
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
  }
}

doorImage2.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage2)) {
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  }
}

doorImage3.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage3)) {
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  }
}

doorImage4.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage4)) {
    doorImage4.src = openDoor4;
    playDoor(doorImage4);
  }
}

doorImage5.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage5)) {
    doorImage5.src = openDoor5;
    playDoor(doorImage5);
  }
}

//Function to be able to reset. 
const startRound = () => {
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  doorImage4.src = closedDoorPath;
  doorImage5.src = closedDoorPath;
  numClosedDoors = 5;
  startButton.innerHTML = 'Free Dobby!';
  startButton.style.width = '120px';
  startButton.style.height = 'auto';
  currentlyPlaying = true;
  randomDoorGenerator();
}


let startButton = document.getElementById('start');

const gameOver = (status) => {
  if (status==='win'){
    startButton.innerHTML = 'DOBBY IS A FREE ELF! Play again?';
  } else {
    startButton.innerHTML = 'Game over! Play again?';
  }
  currentlyPlaying = false;
  startButton.style.height = 'auto';
  startButton.style.width = '150px';
}

startButton.onclick = () => {
  if (currentlyPlaying === false) {
    startRound();
  } 
}

startRound();