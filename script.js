const userInput = document.querySelector("#userInput");
const userOutput = document.querySelector(".output");

userInput.addEventListener("input", (key) => {
  userOutput.innerHTML = marked.parse(userInput.value); // Parse the markdown to text
});
