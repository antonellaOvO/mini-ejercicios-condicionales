/*This code is for the first form*/
let submitOne = document.getElementById("submitOne");
function checkAge(event) {
  event.preventDefault();
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

submitOne.addEventListener("click", checkAge);

/*This code is for the second form*/
let submitTwo = document.getElementById("submitTwo");
function checkColor(event) {
  event.preventDefault();
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
    }

    if (inputColor === "green") {
      answerFormPersonality.innerHTML = "green 🎉";
      answerFormPersonality.style.color = "green";
    }

    if (inputColor === "yellow") {
      answerFormPersonality.innerHTML = "yellow 🎉";
      answerFormPersonality.style.color = "yellow";
    }

    if (inputColor === "violet") {
      answerFormPersonality.innerHTML = "violet 🎉";
      answerFormPersonality.style.color = "violet";
    }
  } else {
    answerFormPersonality.style.color = "red";
    answerFormPersonality.innerHTML =
      "Please choose a color from the options mentioned above";
  }
}

submitTwo.addEventListener("click", checkColor);

/*This code is for the third form*/
let submitThree = document.getElementById("submitThree");

function checkQuestion(event) {
  event.preventDefault();
  let inputPlug = document.getElementById("exampleInputPlug");
  inputPlug = inputPlug.value.toLowerCase();
  let inputBurn = document.getElementById("exampleInputBurn");
  inputBurn = inputBurn.value.toLowerCase();
  let answerFormSolution = document.getElementById("resultSolution");
  switch (true) {
    case inputPlug === "yes" && inputBurn === "yes":
      answerFormSolution.innerHTML = "You need to replace the light bulb 💡";
      break;
    case inputPlug === "yes" && inputBurn === "no":
      answerFormSolution.innerHTML = "👉You need to buy a new lamp👈";
      break;
    case inputPlug === "no" && inputBurn === "yes":
      answerFormSolution.innerHTML =
        "Please plug in the lamp 🔌 and replace the light bulb 💡";
      break;
    case inputPlug === "no" && inputBurn === "no":
      answerFormSolution.innerHTML = "Please plug in the lamp 🔌";
      break;
    case !inputPlug && (inputBurn === "yes" || inputBurn === "no"):
      answerFormSolution.innerHTML = "Please answer the first question";
      break;
    case !inputBurn && (inputPlug === "yes" || inputPlug === "no"):
      answerFormSolution.innerHTML = "Please answer the second question";
      break;
    default:
      answerFormSolution.style.color = "red";
      answerFormSolution.innerHTML =
        'Please enter a valid answer: "yes" or "no"';
  }
}

submitThree.addEventListener("click", checkQuestion);
