var gameplay = function(){

  var userChoice = prompt("Do you choose rock, paper or scissors?");
  var computerChoice = Math.random();
  var compare = function(choice1, choice2) {
    if (choice1 === choice2) {
    return "The result is a tie!";
    }
    
    else if(choice1 === "rock") {
        
        if(choice2 === "scissors") { 
        return "You win! A smashing victory!";
    }
    else {
        return "Sorry, computer had it all covered. Computer wins.";
    }   
}
    else if (choice1 === "paper") {
       
        if(choice2 === "rock") {
        return "You wrapped up a victory over rock! Congrats, you win!";
        }
        else {
            return "Sorry, computer snipped up the victory! You lost."}
    }

};

  if (computerChoice < 0.34) {
	    computerChoice = "rock";
  } else if(computerChoice <= 0.67) {
    
	    computerChoice = "paper";
  } else {
	    computerChoice = "scissors";
  } 
  console.log("Your Choice: " + userChoice + '\n' + "Computer: " + computerChoice+ '\n');
  console.log(compare(userChoice, computerChoice));
}();