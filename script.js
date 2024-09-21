let btn = document.querySelector('button');
let userScoreDisplay = document.querySelector('.gap-2:first-child h1'); // Score for YOU
let compScoreDisplay = document.querySelector('.gap-2:last-child h1'); // Score for COMP
let userScore = 0;
let compScore = 0;

let choices = ['rock', 'paper', 'scissors'];

// Function to get computer's choice
const getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
};

// Function to determine the result
let result = (userVal) => {
    let comp = getComputerChoice();

    if (userVal === comp) {
        btn.innerHTML = "It's a Draw";
    } else if (userVal === "rock") {
        if (comp === "paper") {
            compScore++;
            btn.innerHTML = "You Lose!";
        } else {
            userScore++;
            btn.innerHTML = "You Win!";
        }
    } else if (userVal === "paper") {
        if (comp === "rock") {
            userScore++;
            btn.innerHTML = "You Win!";
        } else {
            compScore++;
            btn.innerHTML = "You Lose!";
        }
    } else if (userVal === "scissors") {
        if (comp === "rock") {
            compScore++;
            btn.innerHTML = "You Lose!";
        } else {
            userScore++;
            btn.innerHTML = "You Win!";
        }
    }

    // Update scores
    userScoreDisplay.innerHTML = userScore;
    compScoreDisplay.innerHTML = compScore;
};

// Event listeners for the choices
document.querySelectorAll('.box > div').forEach(div => {
    div.addEventListener('click', () => {
        let userVal = div.id; // Get the user's choice from the clicked div
        div.style.backgroundColor="yellow";
        setTimeout(()=>{
            div.style.backgroundColor="red";
        },500);
        result(userVal);
    });
});
