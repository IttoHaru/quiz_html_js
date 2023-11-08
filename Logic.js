function calculus() {
    // getting answers
    var aq1 = parseFloat(document.getElementById("q1").value);
    var aq2 = parseFloat(document.getElementById("q2").value);
    var aq3 = parseFloat(document.getElementById("q3").value);
    var aq4 = parseFloat(document.getElementById("q4").value);
    var aq5 = parseFloat(document.getElementById("q5").value);
    
    // caalculating points and percentage
    var points = aq1 + aq2 + aq3 + aq4 + aq5;
    var percent = (points/5) * 100;

    // displaying points and percentage
    document.getElementById("score").innerHTML = "points: " + points + "/5";
    document.getElementById("percent").innerHTML = "percentage: " + percent + "%";

    // displaying correct answers
    if(aq1 == 1) {
        document.getElementById("q1").style.backgroundColor = "green";
        document.getElementById("q1").setAttribute('disabled', '');
    } else {
        document.getElementById("q1").style.backgroundColor = "red";
        document.getElementById("q1").setAttribute('disabled', '');
    };

    if(aq2 == 1) {
        document.getElementById("q2").style.backgroundColor = "green";
        document.getElementById("q2").setAttribute('disabled', '');
    } else {
        document.getElementById("q2").style.backgroundColor = "red";
        document.getElementById("q2").setAttribute('disabled', '');
    };

    if(aq3 == 1) {
        document.getElementById("q3").style.backgroundColor = "green";
        document.getElementById("q3").setAttribute('disabled', '');
    } else {
        document.getElementById("q3").style.backgroundColor = "red";
        document.getElementById("q3").setAttribute('disabled', '');
    };

    if(aq4 == 1) {
        document.getElementById("q4").style.backgroundColor = "green";
        document.getElementById("q4").setAttribute('disabled', '');
    } else {
        document.getElementById("q4").style.backgroundColor = "red";
        document.getElementById("q4").setAttribute('disabled', '');
    };

    if(aq5 == 1) {
        document.getElementById("q5").style.backgroundColor = "green";
        document.getElementById("q5").setAttribute('disabled', '');
    } else {
        document.getElementById("q5").style.backgroundColor = "red";
        document.getElementById("q5").setAttribute('disabled', '');
    };

    // showing refresh button
    document.getElementById("ref").removeAttribute('hidden');
}

// refresh quiz
function refresh() {
    location.reload();
}