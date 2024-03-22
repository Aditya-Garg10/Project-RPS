const choices = document.querySelectorAll(".choice");

const finlChoice = () => {
    const compChoice = ["stone","paper","scissor"];
const cGuess = Math.floor(Math.random() * 3);
return compChoice[cGuess];

}
let userScore = 0;
let compScore = 0;
const drawgame = () => {
    let h2 = document.querySelector("h2")
    h2.innerText = "Its a Draw!"
    h2.style.backgroundColor = "darkBlue"
}
const userScorePara = document.querySelector("#user-score1");
const CompScorePara = document.querySelector("#comp-score1");
const userScoreParares = document.querySelector("#user-score1-resp")
const compScoreParares = document.querySelector("#comp-score1-resp")

const playGame = (userChoice) => {
    console.log("user choice =" , userChoice);
    
const compChoice = finlChoice(); 
    console.log("computer choice =", compChoice);


const showWinner = (userWin) =>{
    if (userWin){
        userScore++;
        userScoreParares.innerText = userScore;
        userScorePara.innerText = userScore;
        console.log(userScore);
        
        let h2 = document.querySelector("h2")
        h2.innerText = `Voila!! You Won ${userChoice} beats the ${compChoice}`;
        h2.style.backgroundColor = "green";
        
    }
    else{
        compScore++
        compScoreParares.innerText = compScore;
        CompScorePara.innerText = compScore;
        let h2 = document.querySelector("h2")
        h2.innerText = `Sorry, You lost!! ${compChoice} beats the ${userChoice}`
        h2.style.backgroundColor = "red"
    }
}





    if (compChoice === userChoice ){
        drawgame();
    }
    else {
        let userWin = true;
        if (userChoice === "stone"){
            userWin = compChoice === "scissor" ? true:false;
        }
        else if (userChoice === "scissor"){
            userWin = compChoice === "paper" ? true:false;
        }
        else {
            userWin = compChoice === "stone" ? true:false;
        }
        showWinner(userWin);
    }};





choices.forEach((choice) => {
    choice.addEventListener("click",() => {
    const userChoice = choice.getAttribute("id")
    playGame(userChoice)
    
    });});






