/*This code is for the first form*/

function checkAge(event) {
  event.preventDefault();
  let submitOne = document.getElementById("submitOne");
  let inputAge = document.getElementById("exampleInputAge");
  let answerFormAge = document.getElementById("resultAge");
  if (inputAge.value) {
    if (inputAge.value > 18) {
      answerFormAge.innerHTML = "You can enter to the pub 🎉";
      answerFormAge.style.color = "green";
    }
    if (inputAge.value < 18) {
      answerFormAge.innerHTML = "You can NOT enter because you are minor 🔞";
      answerFormAge.style.color = "red";
    }

    if (inputAge.value == 18) {
      answerFormAge.innerHTML = "This Night is your Night!🎉";
    }
  } else {
    answerFormAge.innerHTML = "Please enter a valid age";
  }
}

// function say(event) {
//   event.preventDefault();
//   console.log("hello");
// }

submitOne.addEventListener("click", checkAge);

/*This code is for the second form*/

function checkColor(event) {
  event.preventDefault();
  let submitTwo = document.getElementById("submitTwo");
  let inputColor = document.getElementById("exampleInputColor");
  inputColor = inputColor.value.toLowerCase();
  let answerFormPersonality = document.getElementById("resultPersonality");
  if (
    inputColor === "blue" ||
    inputColor === "green" ||
    inputColor === "yellow" ||
    inputColor === "violet"
  ) {
    if (inputColor === "blue") {
      answerFormPersonality.innerHTML = "Blue 🎉";
      answerFormPersonality.style.color = "blue";
      console.log("hello");
    }

    if (inputColor === "green") {
      answerFormPersonality.innerHTML = "green 🎉";
      answerFormPersonality.style.color = "green";
      console.log("hello");
    }

    if (inputColor === "yellow") {
      answerFormPersonality.innerHTML = "yellow 🎉";
      answerFormPersonality.style.color = "yellow";
      console.log("hello");
    }

    if (inputColor === "violet") {
      answerFormPersonality.innerHTML = "violet 🎉";
      answerFormPersonality.style.color = "violet";
      console.log("hello");
    }
  } else {
    answerFormPersonality.innerHTML =
      "Please choose ONLY a color from the options mentioned above";
  }
}

submitTwo.addEventListener("click", checkColor);

/*This code is for the third form*/
let submitThree = document.getElementById("submitThree");
let inputPlug = document.getElementById("exampleInputPlug");
let inputBurn = document.getElementById("exampleInputBurn");
let answerFormSolution = document.getElementById("resultSolution");

/*function checkQuestion(event) {
  event.preventDefault();
  if (
    inputColor.value === "blue" ||
    inputColor.value === "green" ||
    inputColor.value === "yellow" ||
    inputColor.value === "violet"
  ) {
    if (inputColor.value === "blue") {
      answerFormPersonality.innerHTML = "Blue 🎉";
      console.log("hello");
    }

    if (inputColor.value === "green") {
      answerFormPersonality.innerHTML = "green 🎉";
      console.log("hello");
    }

    if (inputColor.value === "yellow") {
      answerFormPersonality.innerHTML = "yellow 🎉";
      console.log("hello");
    }

    if (inputColor.value === "violet") {
      answerFormPersonality.innerHTML = "violet 🎉";
      console.log("hello");
    }
  } else {
    answerFormPersonality.innerHTML =
      "Please choose ONLY a color from the options mentioned above";
  }
}----hay que adaptar esta función totalmente al tercer formulario, he pensado que es mejor esta vez hacerlo con un switch*/

submitThree.addEventListener("click", checkQuestion);
