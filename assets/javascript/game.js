
var randomNumber = $('#random-number');
var winNum = $("#wins-score");
var lossNum= $("#losses-score");
var totalScore = $("#score-space");

var wins = 0;
var losses = 0;
var counter = 0;

$(document).ready(function () {

    var ranNum = "";
    for (var i = 0; i < 3; i++) {
        var random = Math.floor(Math.random() * (120 - 19 + 1) + 19);
        ranNum = random
    }
    $("#random-number").html(ranNum);

    var numberOptions = [1, 3, 5, 7];

    for (var x = 0; x < numberOptions.length; x++) {

        var crystalImage = $("<img>");
        crystalImage.addClass("image-crystal");
        crystalImage.attr("src", "https://mindbodygreen-res.cloudinary.com/image/upload/w_767,q_auto:eco,f_auto,fl_lossy/org/healingcrystalspurplewhite.jpg");
        crystalImage.attr("data-crystalvalue", numberOptions[x]);


        $("#crystal-space").append(crystalImage);
    } //at this point, crystal values should be working...

    $(".image-crystal").on("click", function () {

        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);

        totalScore += crystalValue;
       // totalScore should be visible in the #score-space div 
        
        if (totalScore === ranNum) {
            wins++;
        } else if (totalScore >= ranNum) {
            losses++;
        }

    });

    winNum.text = wins;
    lossNum.text = losses;
    totalScore.text = counter;
    
});

