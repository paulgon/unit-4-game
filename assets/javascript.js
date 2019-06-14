var counter = 0;
var targetNumber = Math.floor((Math.random() * 120) + 19);
var wins = 0;
var losses = 0;
var img1 = Math.floor((Math.random() * 12) + 1);
var img2 = Math.floor((Math.random() * 12) + 1);
var img3 = Math.floor((Math.random() * 12) + 1);
var img4 = Math.floor((Math.random() * 12) + 1);

$("#win").text(wins)
$("#loss").text(losses)
$("#demo").text(targetNumber)
$("#counters").text(counter)

$("#image1").on("click", function () {
    counter += img1;
    $("#counters").text(counter);
    console.log(img1);
});

$("#image2").on("click", function () {
    counter += img2;
    $("#counters").text(counter);
    console.log(img2);
});

$("#image3").on("click", function () {
    counter += img3;
    $("#counters").text(counter);
    console.log(img3);
});

$("#image4").on("click", function () {
    counter += img4;
    $("#counters").text(counter);
    console.log(img4);
});

$(".crystal-image").on("click", function () {

    if (counter === targetNumber) {
        wins++;
        $("#win").text(wins);
        alert("You win!");
        resetGame();

    } else if (counter > targetNumber) {
        losses++;
        $("#loss").text(losses);
        alert("You lose!!");
        resetGame();
    }


});

function resetGame() {
    var targetNumber = Math.floor((Math.random() * 120) + 19);
    $("#demo").text(targetNumber);
    counter = 0;
    $("#counters").text(counter);
    console.log(targetNumber);
    console.log(img1);
    console.log(counter);
}

