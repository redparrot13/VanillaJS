const numSquares = 6;
const colors = generateRandomColors(numSquares);
const h1 = document.querySelector("h1");
const squares = document.querySelectorAll(".square");
const pickedColor = pickColor();

const messageDisplay = document.querySelector("#message");
const resetButton = document.querySelector("#reset");
const modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    setupModeButton();
    setupSquares();
    resetGame();
}

function setupModeButton() {
    for (let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            resetGame();
        });
    }
}

function setupSquares() {
    for (let i = 0; i < colors.length; i++) {
        squares[i].addEventListener("click", function () {


            let clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                changeColor(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again!";
            }
        });
    }
}

resetButton.addEventListener("click", function () {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();

    for (let i = 0; i < colors.length; i++) {
        squares[i].style.backgroundColor = colors[i]
    }
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = " ";
    this.textContent = "New Colors";

})

function resetGame() {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();

    for (let i = 0; i < colors.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block"; // Show the squares
    }

    for (let i = numSquares; i < squares.length; i++) {
        squares[i].style.display = "none"; // Hide the remaining squares
    }

    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
}

function pickColor() {
    const random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
     const arr = [];
     for (let i =0; i<num; i++){
        arr.push(randomColor())
     }
     return arr;
}

function randomColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}