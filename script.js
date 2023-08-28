const countElement = document.getElementById("count");
let count = 0;

const counterContainer = document.querySelector(".counter-container");
const buttonContainer = document.querySelector(".button-container");

function createDOMElement(tagName, className, innerHTML) {
    const element = document.createElement(tagName);
    element.classList.add(className);
    element.innerHTML = innerHTML;
    return element;
}

const incrementButton = createDOMElement("button", "counter-button", "+");
const decrementButton = createDOMElement("button", "counter-button", "-");
const resetButton = createDOMElement("button", "reset-button", "remove");


function buttonClick(event) {
    const target = event.target;
    
    if (target.classList.contains("counter-button")) {
        if (target.textContent === "+") {
            count++;
        } else if (target.textContent === "-") {
            if (count > 0) {
                count--;
            }
        }
        
        countElement.textContent = count;
    } else if (target.classList.contains("reset-button")) {
        count = 0;
        countElement.textContent = count;
    }
}


buttonContainer.addEventListener("click", buttonClick);

buttonContainer.appendChild(incrementButton);
buttonContainer.appendChild(decrementButton);
buttonContainer.appendChild(resetButton);






