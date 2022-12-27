//Create a function that will randomly return either 'Rock' ,'Paper' or 'Scissors'
function getComputerChoice (){
    //Store all the possible choices in an array
    const choicesArray =["Rock", "Paper", "Scissors"];

    //Get a random item from the array
    const randomIndex = Math.floor(Math.random()*choicesArray.length);
    const computerChoice = choicesArray[randomIndex];
    return computerChoice;
}

//Create a function that take s two parameters: playerSelection and computerSelection and returns the winner
function playRound(playerSelection, computerSelection){
    computerSelection = getComputerChoice();
    playerSelection = prompt("Enter your choice: ");
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    if(playerSelection == "Rock" || playerSelection == "Paper" || playerSelection == "Scissors"){
        if(computerSelection == playerSelection){
        return "This is a draw";
        }
        else if(computerSelection == "Rock" && playerSelection == "Paper" || computerSelection == "Paper" && playerSelection == "Scissors" || computerSelection == "Scissors" && playerSelection == "Rock"){
            return `You win! ${playerSelection} beats ${computerSelection}`;
        }
        else {
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        }
    }   
    else 
        return `You have entered an invalid value. Please try again.`
}


document.write(playRound());

