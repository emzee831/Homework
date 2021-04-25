var startTime;
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
let startSeconds = document.getElementById("txtTempo");
let button = document.getElementById("btnStart");
let totalSeconds = startSeconds.value;
let color = "red";


startSeconds.addEventListener('input', () => {
    totalSeconds = startSeconds.value
})

button.addEventListener('click', () => {
    setInterval(setTime, 1000);

    function setTime() {
        ++totalSeconds;
        seconds.innerHTML = pad(totalSeconds % 60)
        minutes.innerHTML = pad(parseInt(totalSeconds / 60))
    }
    if (totalSeconds === 3600) {
        document.getElementsByClassName("time").style.background = color;
        clearTimeout(setTime())
    }

    function pad(val) {
        let valString = val + "";
        if (valString.length < 2) {
            return "0" + valString;
        } else {
            return valString
        }
    }
})

//pressing enter to start time
var input = document.getElementById("time");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("btnStart").click();
    }
});