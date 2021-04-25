// boxes are circle and board is containter

var colors = ["#ff9966", "#0066ff", "#993366", "#666633", "#ff9900"]
var nextcolor = 0

function changbackground() {
    var outerdiv = document.getElementById("container")
    var boxes = container.getElementsByTagName("div")

    for (i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = colors[nextcolor]
    }
    if (nextcolor < colors.length - 1) {
        nextcolor += 1
    } else {
        nextcolor = 0
    }
}