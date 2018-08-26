$(document).ready(function () {
    // global variables
    var wins = 0
    var loss = 0
    var yourTotal = 0
    var random = Math.floor(Math.random() * 102 + 19);

    // Creating randomness for crystals 
    num1 = Math.floor(Math.random() * 12 + 1);
    num2 = Math.floor(Math.random() * 12 + 1);
    num3 = Math.floor(Math.random() * 12 + 1);
    num4 = Math.floor(Math.random() * 12 + 1);

    // random number to start game and dumping into the div
    $("#Scoretokeep").text(random);

    $("#Wins").text(wins);
    $("#Loss").text(loss);
    $("#totalscore").text(yourTotal);

    // function to restart the game once done

    function Restart() {
        random = Math.floor(Math.random() * 102 + 19);
        $("#Scoretokeep").text(random);
        num1 = Math.floor(Math.random() * 12 + 1);
        num2 = Math.floor(Math.random() * 12 + 1);
        num3 = Math.floor(Math.random() * 12 + 1);
        num4 = Math.floor(Math.random() * 12 + 1);
        yourTotal = 0;
        loss = +1;
        wins = +1;
        $("#totalscore").text(yourTotal);
    }

    // click events for crystals 
    $(".crystal1").on("click", function () {
        yourTotal = yourTotal + num1;
        console.log("update score is " + yourTotal);
        $("#totalscore").text(yourTotal);
        if (yourTotal === random) {
            alert("you won");
            wins++;
            $("#Wins").text(wins);
            Restart();
        }
        else if (yourTotal > random) {
            alert("you lost");
            loss++
            $("#Loss").text(loss);
            Restart();
        }
    });
    $(".crystal2").on("click", function () {
         yourTotal = yourTotal + num2;
        console.log("update score is " + yourTotal);
        $("#totalscore").text(yourTotal);
        if (yourTotal === random) {
             alert("you won");
            wins++;
            $("#Wins").text(wins);
            Restart();
            }
        else if (yourTotal > random) {
            alert("you lost");
            loss++
            $("#Loss").text(loss);
            Restart();
            }
        });
     $(".crystal3").on("click", function () {
                yourTotal = yourTotal + num3;
                console.log("update score is " + yourTotal);
                $("#totalscore").text(yourTotal);
                if (yourTotal === random) {
                    alert("you won");
                    wins++;
                    $("#Wins").text(wins);
                    Restart();
                }
                else if (yourTotal > random) {
                    alert("you lost");
                    loss++
                    $("#Loss").text(loss);
                    Restart();
                }
            });

        $(".crystal4").on("click", function () {
                    yourTotal = yourTotal + num4;
                    console.log("update score is " + yourTotal);
                    $("#totalscore").text(yourTotal);
                    if (yourTotal === random) {
                        alert("you won");
                        wins++;
                        $("#Wins").text(wins);
                        Restart();
                    }
                    else if (yourTotal > random) {
                        alert("you lost");
                        loss++
                        $("#Loss").text(loss);
                        Restart();
                    }
                });
 });


























