//Variables for scores
let humanScore = 0;
let computerScore = 0;


//Create a function getComputerChoice()
function getComputerChoice()
{

//Create a variable "random" to store random value
//Randomize value from 0 to 2
let random = Math.floor(Math.random() * 3);

//Create "choice" variable to store value
let choice;

//Assign value based on the random number
//if random equals to 0 = Rock
if (random === 0) {
    choice = "rock";
} 
//if random equals to 1 = Paper
else if (random === 1) {
    choice = "paper";
} 
//if random equals to 2 = Scissors
else if (random === 2) {
    choice = "scissors";
}

//Return value of choice
return choice;
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
    //Compare humanChoice and computerChoice (Rock > Scissors > Paper > Rock)
  }
  
  //Take getHumanChoice() value and equal to humanChoice
  const humanSelection = getHumanChoice();

  //Take getComputerChoice() value and qqual to computerChoice
  //const computerSelection = getComputerChoice();
  
  //playRound(humanSelection, computerSelection);
  



