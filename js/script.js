  $(".play").click(function(){
  let userInput = $ (".input").val();
  $(".userChoice").text(userInput);

    let randomNum= 0;
randomNum = Math.random();
    let computerChoice= 0;
    
if (randomNum <= (1/3)) {
	computerChoice = "paper";
} else if (randomNum <= (2/3)) {
	computerChoice = "rock";
} else {
	computerChoice = "scissors";
}

$(".computerChoice").text(computerChoice);

    
    
if (randomNum <= (1/3)){
$(".computerChoice").text("paper");
}

else if (randomNum <= (2/3)){
  $(".computerChoice").text("rock");
}
else {
  $(".computerChoice").text("scissors");
  
  if (userInput === 'paper'&& computerChoice === 'paper'){
    $(".result").html("tie!");
    
    else if 