const userInput = document.querySelector("#userInput");
const userOutput = document.querySelector(".output");
const resetButton = document.querySelector("#resetButton");

userInput.addEventListener("input", (key) => {
  userOutput.innerHTML = marked.parse(userInput.value); // Parse the markdown to text
});

// Reset
resetButton.addEventListener("click", () => {
  userInput.value = "";
  userOutput.innerHTML = "";
});
