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
    if(computerSelection == playerSelection){
        return "0";
    }
    else if(computerSelection == "Rock" && playerSelection == "Paper" || computerSelection == "Paper" && playerSelection == "Scissors" || computerSelection == "Scissors" && playerSelection == "Rock"){
            return `1`;
    }
    else {
            return `0`;
    }
        
      
    
}

function game(){
    let points = 0;
    for(i = 0; i<5; i++){
        points = points + playRound();
    }
    if(points >=3 ){
        document.write("You win!")
    }
    else{
        document.write("You lose!")
    }
}


