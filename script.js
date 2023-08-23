const countElement = document.getElementById("count");
let count = 0;

const counterContainer = document.querySelector(".counter-container");
const buttonContainer = document.querySelector(".button-container")

const incrementButton = document.createElement("button");
incrementButton.textContent = ("+");
incrementButton.classList.add("counter-button");
incrementButton.addEventListener("click", () => {
        count++;
        countElement.textContent = count;
});


const decrementButton = document.createElement("button");
decrementButton.textContent = ("-");
decrementButton.classList.add("counter-button");
decrementButton.addEventListener("click", () => {
    if(count > 0) {
    count--;
    countElement.textContent = count;
    }
});


const resetButton = document.createElement("button");
resetButton.textContent = ("remove");
resetButton.classList.add("reset-button");
resetButton.addEventListener("click", () => {
    count=0;
    countElement.textContent = count;
});

buttonContainer.appendChild(incrementButton);
buttonContainer.appendChild(decrementButton);
buttonContainer.appendChild(resetButton);