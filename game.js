var gamePattern = [];
var userClickedPattern=[];
var buttonColour = ["red","blue","green","yellow"];

function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);

    var randomChosenColour = buttonColour[randomNumber];

    gamePattern.push(randomChosenColour);
    
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);
}

$(".btn").click(function (e){
    var userChosenColour = e.target.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
});

function playSound(name){
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
}

