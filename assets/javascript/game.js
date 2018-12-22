$(document).ready(function(){

    //Make variables global to runtime of application
    var blueCrystal = Math.floor(Math.random()* 12) + 1; //Each crystal should have a random hidden value between 1 - 12
    var greenCrystal = Math.floor(Math.random()* 12) + 1; //Each crystal should have a random hidden value between 1 - 12
    var redCrystal = Math.floor(Math.random()* 12) + 1; //Each crystal should have a random hidden value between 1 - 12
    var yellowCrystal = Math.floor(Math.random()* 12) + 1; //Each crystal should have a random hidden value between 1 - 12
    var targetScore = Math.floor(Math.random() * 101) + 19; //The random number shown at the start of the game should be between 19 - 120
    var myScore = 0;
    var win = 0;
    var lose = 0;

    //Display initial Target Score, My Score, Wins, Losses
    $("#target-score").text(targetScore);
    $("#my-score").text(myScore);
    $("#wins").text(win);
    $("#losses").text(lose);

    //Add click listeners to each crystal
    $("#blue-crystal").on("click", function(){
        myScore += blueCrystal;
        $("#my-score").text(myScore)
    });

    $("#green-crystal").on("click", function(){
        myScore += greenCrystal;
        $("#my-score").text(myScore);
    });

    $("#red-crystal").on("click", function(){
        myScore += redCrystal;
        $("#my-score").text(myScore);
    });

    $("#yellow-crystal").on("click", function(){
        myScore += yellowCrystal;
        $("#my-score").text(myScore);
    })

    //Alerts for wins and losses. Event function must apply to all crystals on the page

    $(".all-crystals").on("click", function(){
        if (myScore === targetScore) {
            alert("You win!");
            myScore = 0;
            $("#my-score").text(myScore);
            targetScore = Math.floor(Math.random() * 101) + 19;
            $("#target-score").text(targetScore);
            blueCrystal = Math.floor(Math.random()* 12) + 1;
            greenCrystal = Math.floor(Math.random()* 12) + 1;
            redCrystal = Math.floor(Math.random()* 12) + 1;
            yellowCrystal = Math.floor(Math.random()* 12) + 1;
            win++;
            $("#wins").text(win);

        } else if (myScore > targetScore) {
            alert("You lose!");
            myScore = 0;
            $("#my-score").text(myScore);
            targetScore = Math.floor(Math.random() * 101) + 19;
            $("#target-score").text(targetScore);
            blueCrystal = Math.floor(Math.random()* 12) + 1;
            greenCrystal = Math.floor(Math.random()* 12) + 1;
            redCrystal = Math.floor(Math.random()* 12) + 1;
            yellowCrystal = Math.floor(Math.random()* 12) + 1;
            lose++;
            $("#losses").text(lose);
        }
    });

});