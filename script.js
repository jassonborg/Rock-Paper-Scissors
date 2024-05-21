//Variables for scores
let humanScore = 0;
let computerScore = 0;


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
        //display tie
        console.log("It's a tie");
    //check winningconditions object to see if userInput value beats the relationship value
    } else if (winningConditions[humanChoice] === computerChoice) {
        console.log("You Win");
    } else {
        console.log("You Lose");
    }
  }


