const submitBtn = document.getElementById("submit");
const input = document.getElementById("user-input");

function getUserInput(event) {
  event.preventDefault();
  let userInput = input.value;
  console.log("userInput", userInput);

  return userInput;
}

submitBtn.addEventListener("click", getUserInput);
