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
    choice = "Rock";
} //if random equals to 1 = Paper
else if (random === 1) {
    choice = "Paper";
} 
//if random equals to 2 = Scissors
else if (random === 2) {
    choice = "Scissors";
}

//Return value of choice
return choice;
}


