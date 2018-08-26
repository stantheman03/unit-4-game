$(document).ready(function () {
    // global variables
    var wins = 0
    var loss = 0
    var yourTotal = 0
    var random = Math.floor(math.random() * 102 + 19)

    // Creating randomness for crystals 
    num1 = Math.floor(math.random() * 12 + 1);
    num2 = Math.floor(math.random() * 12 + 1);
    num3 = Math.floor(math.random() * 12 + 1);
    num4 = Math.floor(math.random() * 12 + 1);

    // random number to start game and dumping into the div
    $("#Scoretokeep").text(random);

    $(".wins").text(wins);
    $(".loss").text(loss);
    $("#totalscore").text(yourTotal);

    // function to restart the game once done

    function Restart() {
        num1 = Math.floor(math.random() * 12 + 1);
        num2 = Math.floor(math.random() * 12 + 1);
        num3 = Math.floor(math.random() * 12 + 1);
        num4 = Math.floor(math.random() * 12 + 1);
        $("#totalscore").text(yourTotal);
        $("#Scoretokeep").text(random);
    }

    // click events for crystals 
    $(".crytsal1").on("click", function () {
        yourTotal = yourTotal + num1;
        console.log("update score is " + yourTotal);
        $("#totalscore").text(yourTotal);
        if (yourTotal === random) {
            alert("you won");
            wins++;
            $(".wins").text(wins);
            Restart();
        }
        else if (yourTotal > random) {
            alert("you lost");
            loss++
            $(".loss").text(loss);
            Restart();
        }
    });
    $(".crytsal2").on("click", function () {
         yourTotal = yourTotal + num2;
        console.log("update score is " + yourTotal);
        $("#totalscore").text(yourTotal);
        if (yourTotal === random) {
             alert("you won");
            wins++;
            $(".wins").text(wins);
            Restart();
            }
        else if (yourTotal > random) {
            alert("you lost");
            loss++
            $(".loss").text(loss);
            Restart();
            }
        });
     $(".crytsal3").on("click", function () {
                yourTotal = yourTotal + num3;
                console.log("update score is " + yourTotal);
                $("#totalscore").text(yourTotal);
                if (yourTotal === random) {
                    alert("you won");
                    wins++;
                    $(".wins").text(wins);
                    Restart();
                }
                else if (yourTotal > random) {
                    alert("you lost");
                    loss++
                    $(".loss").text(loss);
                    Restart();
                }
            });


        $(".crytsal4").on("click", function () {
                    yourTotal = yourTotal + num4;
                    console.log("update score is " + yourTotal);
                    $("#totalscore").text(yourTotal);
                    if (yourTotal === random) {
                        alert("you won");
                        wins++;
                        $(".wins").text(wins);
                        Restart();
                    }
                    else if (yourTotal > random) {
                        alert("you lost");
                        loss++
                        $(".loss").text(loss);
                        Restart();
                    }
 });
});








