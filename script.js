(function() {
    // Global Variables
    let humanScore = 0;
    let computerScore = 0;
    let currentRound = 0;
    const totalRounds = 5;

    // Function to update the score display
    function updateScoreDisplay() {
        document.getElementById('humanScore').textContent = humanScore;
        document.getElementById('computerScore').textContent = computerScore;
        document.getElementById('roundNumber').textContent = currentRound;
    }

    // Function to show the tie message
    function showTieMessage() {
        document.getElementById('tieMessage').style.display = 'block';
    }

    // Function to hide the tie message
    function hideTieMessage() {
        document.getElementById('tieMessage').style.display = 'none';
    }

    // Function to display the game result
    function displayGameResult(result) {
        const gameResultElement = document.getElementById('gameResult');
        gameResultElement.textContent = result;
        gameResultElement.style.display = 'block';
    }

    // Function to reset the game
    function resetGame() {
        humanScore = 0;
        computerScore = 0;
        currentRound = 0;
        updateScoreDisplay();
        hideTieMessage();
        document.getElementById('gameResult').style.display = 'none';

        // Enable choice buttons
        const buttons = document.querySelectorAll('.button');
        buttons.forEach(button => {
            button.disabled = false;
        });
    }

    // Function to get computer's choice
    function getComputerChoice() {
        console.log("Entering getComputerChoice function");

        let choiceArray = ["rock", "paper", "scissors"];
        console.log("Choice array:", choiceArray);

        let random = Math.floor(Math.random() * choiceArray.length);
        console.log("Random index generated:", random);

        let computerChoice = choiceArray[random];
        console.log("Computer choice:", computerChoice);

        return computerChoice;
    }

    // Function to play a round
    function playRound(humanChoice, computerChoice) {
        console.log("Entering playRound function");
        console.log("Human choice:", humanChoice);
        console.log("Computer choice:", computerChoice);

        const winningConditions = {
            rock: "scissors",
            paper: "rock",
            scissors: "paper"
        };
        console.log("Winning conditions:", winningConditions);

        if (humanChoice === computerChoice) {
            console.log(`It's a tie, You: ${humanScore}, Computer: ${computerScore}`);
            showTieMessage(); // Show tie message
        } else {
            hideTieMessage(); // Hide tie message if not a tie

            if (winningConditions[humanChoice] === computerChoice) {
                humanScore++;
                console.log(`You Win, You: ${humanScore}, Computer: ${computerScore}`);
            } else {
                computerScore++;
                console.log(`You Lose, You: ${humanScore}, Computer: ${computerScore}`);
            }
        }

        // Increment round and update the score display
        currentRound++;
        updateScoreDisplay();

        // Check if the game has reached the total rounds
        if (currentRound === totalRounds) {
            // Disable choice buttons after 5 rounds
            const buttons = document.querySelectorAll('.button');
            buttons.forEach(button => {
                button.disabled = true;
            });

            // Determine game result after 5 rounds
            if (humanScore > computerScore) {
                displayGameResult("You win!");
            } else if (humanScore < computerScore) {
                displayGameResult("You lose!");
            } else {
                displayGameResult("It's a tie!");
            }
        }
    }

    // Function to play a new game
    function playGame() {
        resetGame();
        // Manually advance the rounds since we are using buttons for choices
        const buttons = document.querySelectorAll('.button');
        buttons.forEach(button => {
            button.disabled = false;
        });
    }

    // Event listeners for buttons
    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('rock').addEventListener('click', function() {
            console.log("Rock button clicked");
            const humanSelection = 'rock';
            const computerSelection = getComputerChoice();
            playRound(humanSelection, computerSelection);
        });

        document.getElementById('paper').addEventListener('click', function() {
            console.log("Paper button clicked");
            const humanSelection = 'paper';
            const computerSelection = getComputerChoice();
            playRound(humanSelection, computerSelection);
        });

        document.getElementById('scissors').addEventListener('click', function() {
            console.log("Scissors button clicked");
            const humanSelection = 'scissors';
            const computerSelection = getComputerChoice();
            playRound(humanSelection, computerSelection);
        });

        document.getElementById('newGame').addEventListener('click', function() {
            console.log("New Game button clicked");
            playGame();
        });
    });
})();
