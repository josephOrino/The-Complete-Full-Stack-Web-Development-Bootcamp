var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var userClick = 0;

function applyKeyDown() {
    $(document).keydown(function (e) { 
        nextSequence();
    })
}
    
function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    level++;
    $("h1").text("Level " + level);
    $(document).off("keydown");
}

function playSound(color) {
    var soundLocation = "./sounds/" + color + ".mp3";
    var sound = new Audio(soundLocation);
    sound.play();
}

function animatePress(element) {
    $(element).addClass("pressed");
    setTimeout(() => {
        $(element).removeClass("pressed");
    }, 100);
}

function startOver() {
    $("body").addClass("game-over");
    playSound("wrong");
    setTimeout(() => {
        $("body").removeClass("game-over");
    }, 200);
    $("h1").text("Game Over, Press Any Key to Restart");
    userClickedPattern = [];
    gamePattern = [];
    userClick = 0;
    level = 0;
}

function checkAnswer(currentLevel) {
    for (var i = 0; i < currentLevel; i++){
        if (gamePattern[i] != userClickedPattern[i] ){
            return false;
        } 
    }
    return true;
}

function clickFunction() {
    //Checks if game has started through a keydown
    if (level === 0){
        startOver();
    } else {
        //Sound and animation
        var clickedBtn = $(this).attr("id");
        playSound(clickedBtn);
        animatePress(this);

        //Adding the user clicked color to the userClickedPattern
        userClickedPattern.push(clickedBtn);
        userClick++;
        
        // Will check if same sa gamePattern up to the last button pressed by user
        if (checkAnswer(userClick)){
            if (userClick === level){
                userClickedPattern = [];
                userClick = 0;
                setTimeout(() => {
                    nextSequence();
                }, 1000);
            } 
        } else {
            startOver();
            applyKeyDown();
        }   
    }
}

applyKeyDown();

$(".btn").click(clickFunction);

