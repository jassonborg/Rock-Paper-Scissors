//Create a function getComputerChoice()
function getComputerChoice()
{

//Create "choice" variable to store value
let choiceArray = ["rock", "paper", "scissors"];

//Create a variable "random" to store random value
let random = Math.floor(Math.random() * choiceArray.length);

//Return value of choice
return choiceArray[random];
}


//Create a function getHumanChoice()
function getHumanChoice(){

//Create a userInput variable to store the user prompt input
let userInput = prompt("Enter Rock, Paper or Scissors and Hit Enter to Begin Game");

//Make userInput case-insensitive
userInput = userInput.toLowerCase();

//Create a validInput variable to store valid Values
let validChoices = ["rock", "paper", "scissors"];

//Check if userInput and validChoices match
if (validChoices.includes(userInput)){

    //Return input
    return userInput;

} else {

    //Return error if not valid input try again
    alert("Invalid Choice! Please enter valid Input of Rock, Paper or Scissors")

    //Return getHumanChoice() function to run function again
    return getHumanChoice();
}
}

//Create a function playGame()
function playGame(){

//Variables
let humanScore = 0;
let computerScore = 0;
let i = 0;

while (i < 5){
    //Display Computer Choice first
    const computerSelection = getComputerChoice();
    //console.log("Computer's choice:", computerSelection);

    //Display userInput
    const humanSelection = getHumanChoice();
    //console.log("Your choice:", humanSelection);

    //Call playRound function
    playRound(humanSelection, computerSelection);

    //increment i by 1
    i++;

    if (i == 5){
        if(humanScore === computerScore){
            console.log(`Game Over, It's a tie, You : ${humanScore}, Computer : ${computerScore}`);
        } else if(humanScore > computerScore){
            console.log(`Game Over, You Win, You : ${humanScore}, Computer : ${computerScore}`);
        } else {
            console.log(`Game Over, You Lose, You : ${humanScore}, Computer : ${computerScore}`);
    }
}
}

//Create a function playRound(humanChoice, computerChoice)
function playRound(humanChoice, computerChoice) {

    //Create winning object relationship between the values
    const winningConditions = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
      };

    //check if humanChoice parameter is equal to computerChoice
    if (humanChoice === computerChoice) {
        //display tie and score
        console.log(`It's a tie, You : ${humanScore}, Computer : ${computerScore}`);
    //check winningconditions object to see if userInput value beats the relationship value
    } else if (winningConditions[humanChoice] === computerChoice) {
        //increment humanScore by 1
        humanScore++;
        //display user wins and score
        console.log(`You Win, You : ${humanScore}, Computer : ${computerScore}`);
    //otherwise user lose
    } else {
        //increment computerScore by 1
        computerScore++;
        //display user lose and score
        console.log(`You Lose, You : ${humanScore}, Computer : ${computerScore}`);
    }
  }

}
