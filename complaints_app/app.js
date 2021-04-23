function getData() {
    let limit = document.getElementById("info").value
    let borough = event.target.innerHTML.toUpperCase()


    fetch("https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=" + borough + "&$limit=" + limit)
        .then((dataset) => dataset.json())
        .then((data) => displayData(data))
        // console.log(formattedData);
        //     .catch(err => console.log(err))
        // return
}



function displayData(data) {
    removeData()


    for (x in data) {
        let responseContain = document.getElementById("reponseContainer")
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
        btn.style.position = "right"
        btn.style.left = "800px"
        responseContain.appendChild(node)
        responseContain.appendChild(node2)
        node.appendChild(p1)
        p1.append(btn)
        node2.appendChild(resolution)
        resolution.hidden = true // all data displays with this
    }
}

// taking away elements once a new borough is clicked
function removeData() {
    let limit = document.getElementById("info").value;

    let reponseContainer1 = document.getElementById("reponseContainer");
    let outerdiv = reponseContainer1.childNodes
    console.log(outerdiv);
    if (reponseContainer1.hasChildNodes()) {
        for (let i = 0; i < limit; i++) {
            for (let b = 0; b < outerdiv.length; b++) {
                outerdiv[b].remove();
            }
        }
    }
}


// showing the information in the buttons
function show() {
    x = event.target.parentElement.parentElement.nextSibling.firstChild
    x.hidden = false
    console.log(x);
}