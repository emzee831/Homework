let limit = 10;
// limit = document.getElementsByName("complaintnumber")
// console.log(limit);

function getData() {
    let borough = event.target.innerHTML.toUpperCase()
        // console.log(borough)


    fetch("https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=" + borough + "&$limit=" + limit)
        .then((dataset) => dataset.json())
        .then((formattedData) => displayData(formattedData))
        // console.log(formattedData);
        //     .catch(err => console.log(err))
        // return
}


function displayData(data) {
    let responseContain = document.getElementById("reponseContainer")
    let child = responseContain.getElementsByTagName("p")
    let btn = responseContain.getElementsByTagName("button")
        // variable to remove items 
    let emptyComplaints = document.getElementsByClassName("complaints");

    for (x in data) {
        let node = document.createElement("div")
        let node2 = document.createElement("div")
        let p1 = document.createElement("p")
        let resolution = document.createElement("p")
        let btn = document.createElement("button")
        let btnclass = document.createAttribute("class")
        let btnclick = document.createAttribute("onclick")
        let nodeclass = document.createAttribute("class")
        let p1class = document.createAttribute("class")
        btn.innerHTML = "Response"
        btnclick.value = "show()"
        btnclass.value = "response"
        nodeclass.value = "complaints"
        p1class.value = "p1"

        btn.setAttributeNode(btnclass)
        btn.setAttributeNode(btnclick)
        node.setAttributeNode(nodeclass)
        p1.setAttributeNode(p1class)
        p1.innerHTML = data[x].descriptor
        resolution.innerHTML = data[x].resolution_description
            // console.log(resolution)
        responseContain.appendChild(node)
        responseContain.appendChild(node2)
        node.appendChild(p1)
        p1.append(btn)
        node2.appendChild(resolution)
        resolution.hidden = true // all data displays with this
    }
    // if (resolution.length > 0) {
    //     parent.removeEventListener("click", () => {
    //         emptyComplaints.removeChild(complaints);

    //     })
    // }

}

function show() {
    x = event.target.parentElement.parentElement.nextSibling.firstChild
    x.hidden = false
    console.log(x);
}

//if you get rid of this temp it will all work
const button = document.querySelectorAll('.node');
const buttonsContainer = document.querySelector('.node2');
const buttonsContent = document.querySelectorAll('.resolution');

buttonsContainer.addEventListener('click', function(e) {
    const clicked = e.target.closest('.btn');
    console.log(clicked);
    //Guard Clause
    if (!clicked) return;
    //active tab
    button.forEach(b => this.classList.remove('btn-active'));
    clicked.classList.add('btn--active');
})