/*globals document, window */
var nameSubmit = function () {
    if (document.getElementById("userinput").value !== "") {
        document.getElementById("name1").innerHTML = document.getElementById("userinput").value;
        document.getElementById("userinput").value = "";
    } else {
        alert("Please Enter A Name.");
    }
};

function entInfo(e) {
    if (typeof e == 'undefined' && window.event) {
        e = window.event;
    }
    if (e.keyCode == 13 && document.getElementById("userinput").value === "") {
        return alert("Please Enter A Name.");
    }
    if (e.keyCode == 13) {
        document.getElementById("name1").innerHTML = document.getElementById("userinput").value;
        document.getElementById("userinput").value = "";
    }
}

document.getElementById("submit").onclick = nameSubmit;
//var i = 1;

//function rolls(e) {
//
//    if (i <= 20 && e !== 10) {
//        document.getElementById("roll" + i).innerHTML = e;
//        i++;
//    }
//    if (i % 2 !== 0 && e == 10) {
//        i++;
//        document.getElementById("roll" + i).innerHTML = "X";
//        i++;
//    }
//}


var BowlingGame = [];
var result = 0;
var rollIndex = 0;
var game = this;
var frameIndex = 0;
var frames = [];
var i = 1;

function roll(pins) {
    BowlingGame.push(pins);
    score();
}

function score() {
    for (frameIndex < 10;;) {
        if (BowlingGame[rollIndex] == 10 && i % 2 !== 0) {
            result += BowlingGame[rollIndex] + BowlingGame[rollIndex + 1] + BowlingGame[rollIndex + 2];
            i++;
            document.getElementById("roll" + i).innerHTML = "X";
            rollIndex++;
            i++;
            return;

        } else if (+BowlingGame[rollIndex - 1] + BowlingGame[rollIndex] == 10 && i % 2 === 0) {
            result += getSpareScore();
            document.getElementById("roll" + i).innerHTML = "/";
            rollIndex ++;
            i++;
            return;
        } else {
            result += getNormalScore();
            document.getElementById("roll" + i).innerHTML = BowlingGame[rollIndex];
            rollIndex ++;
            i++;
            return;
        }
    }

     document.getElementById("final-score").innerHTML = result;
}

function getStrikeScore() {
    BowlingGame[rollIndex] + BowlingGame[rollIndex + 1] + BowlingGame[rollIndex + 2];
};

function getSpareScore() {
    BowlingGame[rollIndex] + BowlingGame[rollIndex + 1] + BowlingGame[rollIndex + 2];
}

function getNormalScore() {
    BowlingGame[rollIndex] + BowlingGame[rollIndex + 1];
}