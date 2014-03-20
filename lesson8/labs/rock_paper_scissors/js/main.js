
var computerChoice = Math.random();
if (computerChoice < 0.34) {
  computerChoice = "rock";
} else if(computerChoice <= 0.67) {
  computerChoice = "paper";
} else {
  computerChoice = "scissors";
}

console.log("computer: " + computerChoice);

document.getElementById('rock').onclick = rock;
document.getElementById('paper').onclick = paper;
document.getElementById('scissors').onclick = scissors;

function rock() {
  console.log("rock is clicked");
  compare(computerChoice, "rock");
}

function paper () {
  console.log("paper is clicked");
  compare (computerChoice, "paper");
}

function scissors () {
  console.log("scissors is clicked");
  compare (computerChoice, "scissors");
}

// Assume choice1 is computer choice
// and    choice2 is user choice
function compare(choice1, choice2) {
    if (choice1 === choice2)
      console.log('draw');
    
    if (choice1 === "rock") {
      if (choice2 === "scissors") {
        console.log("Computer Wins");
      } else if (choice2 === "paper") {
        console.log("User Wins");
        userWins();
      }
    }

    if (choice1 === "scissors") {
      if (choice2 === "paper") {
        console.log("Computer Wins");
      } else if (choice2 === "rock") {
        console.log("User Wins");
        userWins();
      }
    }   
         
    if (choice1 === "paper") {
      if (choice2 === "rock") {
        console.log("Computer Wins");
      } else if (choice2 === "scissors") {
        console.log("User Wins");
        userWins();
      }
    }  
     
}


function userWins() {
  var userScore = parseInt(document.getElementById('humanScore').innerHTML);
  userScore = userScore + 1;
  document.getElementById('humanScore').innerHTML = userScore;

}
