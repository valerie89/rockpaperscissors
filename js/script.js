  $(".play").click(function(){
  let userInput = $ (".input").val();
  $(".userChoice").text(userInput);

    let randomNum= 0;
randomNum = Math.random();

if (randomNum <= (1/3)){
$(".computerChoice").text("paper");
}

else if (randomNum <= (2/3)){
  $(".computerChoice").text("rock");
}
else {
  $(".computerChoice").text("scissors");
  };
})



  
