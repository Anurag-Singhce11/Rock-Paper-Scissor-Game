console.log("hello i am an enginner");
let userScore = 0;
let compScore = 0;

let playername = prompt("Enter Your Name : ");
 let uername = document.querySelector("#username");

username.innerText = playername;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("Game is Draw");
    msg.innerText = "Game Is Draw, Play Again";
    msg.style.backgroundColor = "#081b31";
}
const showWinner = (userwin, userChoice, compChoice) => {
    if (userwin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Win");
        // msg.innerText = "You win!";
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You Lost");
        // msg.innerText = "You lost!";
        msg.innerText = `You lost. ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    // Genarate computer choice--
    const compChoice = genCompChoice();
    console.log("comp choice =", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userwin = true;
        if (userChoice === "rock") {
            // scissor, paper
            userwin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // rock, scissor
            userwin = compChoice === "scissor" ? false : true;
        } else {
            // rock, paper
            userwin = compChoice === "rock" ? false : true;
        }
        showWinner(userwin, userChoice, compChoice)
    }
};

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        //   console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
});

