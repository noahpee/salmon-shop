let locations = ["Seattle", "Tokyo", "Dubai", "Paris", "Lima"]

let minCust = [23, 3, 11, 20, 2]

let maxCust = [65,24,38,38,16]

let avrSal = [6.3,1.2,3.7,2.3,4.6]

let perce = [50, 75, 100, 60, 80, 100, 70, 40, 60, 90, 70, 50, 30, 40, 60]

let visi = true

let locNum = 0

let raes = []

function NewStore(name, maxiCustomers, miniCustomers, averageSale) {

    this.name = name
    this.maxiCustomers = maxiCustomers
    this.miniCustomers = miniCustomers
    this.averageSale = averageSale
    fromHeader(this)

}

function hedr() {

    let createFish = document.getElementById("onTable");

    for (e = 0; e <= perce.length +1; e ++) {

        if (e == 0) {

            let tableHeadEe = document.createElement("th");
            tableHeadEe.innerText = 'Location'
            createFish.appendChild(tableHeadEe);
        } else  if  (e == perce.length +1){

            let tableHeadEe = document.createElement("th");
            tableHeadEe.innerText = 'Total'
            createFish.appendChild(tableHeadEe);

        } else {
            let tableHeadEe = document.createElement("th");
            tableHeadEe.innerText = `${e + 5}:00`
            createFish.appendChild(tableHeadEe);
        }
    }

}

function fromHeader(thing) {

    let createFish = document.getElementById("onTable");
    let tableHeadEle = document.createElement("tr");
    createFish.appendChild(tableHeadEle);
    tableHeadEle.innerText = this.name

    let ttp = []

    for (c = 0; c <= perce.length; c ++) {

        if (c == perce.length) {
            let tableRowEle = document.createElement("td");
            let sum = ttp.reduce(function(a, b){
                return a + b;
            });
            tableRowEle.innerText = sum
            tableRowEle.id = `${c}-${locNum}`
            tableRowEle.onmouseover = function(event) {
    
                let textP = document.getElementById('tileData')

                let nums = event.target.id

                const myArray = nums.split("-");

                textP.style.visibility = 'visible'
            
                textP.innerText = `A total of ${event.target.innerText} customers in ${locations[myArray[1]]} will buy an average of ${Math.round(event.target.innerText*avrSal[myArray[1]])} salmon snacks.`
            }
            tableHeadEle.appendChild(tableRowEle);
            
        } else {
        let tableRowEle = document.createElement("td");
        tableHeadEle.appendChild(tableRowEle);
        let ranNum = Math.floor(Math.random() * (this.maxiCustomers -  this.miniCustomers)) +  this.miniCustomers
        let perceP = Math.round((ranNum/100)*perce[c])
        tableRowEle.innerText = perceP
        tableRowEle.id = `${c}-${locNum}`
        tableRowEle.onmouseover = function(event) {

            let textP = document.getElementById('tileData')

            let nums = event.target.id

            const myArray = nums.split("-");
        
            textP.style.visibility = 'visible'
        
            let timr = parseInt(myArray[0]) + 6
        
            let maths = Math.round(avrSal[myArray[1]]*event.target.innerText)
        
            textP.innerText = `An average of ${event.target.innerText} customers in ${locations[myArray[1]]} at ${timr}:00 will buy ${maths} salmon snacks (${perce[myArray[0]]}% of peak).
            This will require ${(Math.trunc(maths/20)) + 1} tossers.`
        };
        tableRowEle.onmouseout = function(event) {
        let textP = document.getElementById('tileData')

        textP.style.visibility = 'hidden'
    
        textP.innerText = ''
        }
        ttp.push(perceP)
        raes[c][locNum] += perceP
        }
    }

    locNum += 1

}

function tots() {

    let createFish = document.getElementById("onTable");

    let newww = []

    for (e = 0; e <= perce.length +1; e ++) {

        if (e == 0) {

            let tableHeadEe = document.createElement("td");
            tableHeadEe.innerText = 'Totals'
            createFish.appendChild(tableHeadEe);
        } else  if  (e == perce.length +1){

            let sumsw = newww.reduce(function(a, b){
                return a + b;
            });

            let tableHeadEe = document.createElement("td");
            tableHeadEe.innerText = sumsw
            createFish.appendChild(tableHeadEe);

        } else {
            let tableHeadEe = document.createElement("td");
            let sum = raes[e -1].reduce(function(a, b){
                return a + b;
            });

            tableHeadEe.innerText = `${sum}`
            tableHeadEe.id = `${e}-${locNum}`
            tableHeadEe.onmouseover = function(event) {
                let textP = document.getElementById('tileData')

                let nums = event.target.id
                        
                const myArray = nums.split("-");
            
                textP.style.visibility = 'visible'
            
                let timr = parseInt(myArray[0]) + 5
            
                textP.innerText = `The total number of customers at ${timr}:00 would be ${event.target.innerText}.`            
            }
            tableHeadEe.onmouseout = function(event) {
                let textP = document.getElementById('tileData')
        
                textP.style.visibility = 'hidden'
            
                textP.innerText = ''
                }
            newww.push(sum)
            createFish.appendChild(tableHeadEe);
        }
    }

}

function neew() {

    for (w = 0; w < perce.length; w ++) {
        raes.push([])

    for (u= 0; u < locations.length; u ++) {
            raes[w].push(0)
        }
    }
    
    for (q = 0; q < locations.length; q ++) {
        NewStore(locations[q], maxCust[q], minCust[q], avrSal[q])
    }
}


function change() {

    openingHours()

    var id = null;

    var elem = document.getElementById("fishImg");
    var postop = 0;
    let popDeg = 0
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
    if (postop == 1250) {
        clearInterval(id);
    } else if (popDeg == -90) {
        postop++;
        elem.style.top = postop + 'px';
    } else {
        postop++;
        popDeg--;
        elem.style.top = postop + 'px';
        elem.style.rotate = popDeg + 'deg';
    }
    }
    

}

function createData() {

    let timings = document.getElementById("openTimes").value;

    let fishTable = document.getElementById("fishTable");


    newText = ''

    hedr()
    neew()
    locNum = 0
    tots()
    locNum = 0
    document.getElementById("fishInput").style.visibility = 'visible'
    return

    if (timings == 'all') {

        hedr()
        neew()
        locNum = 0
        tots()
        locNum = 0
        return

        createTable()
        document.getElementById('fishInput').style.visibility = 'visible'
    return

    }

    for (i = 0; i < locations.length; i ++) {

        let newObject = {
            location : locations[i],
            minCustomers : Math.floor(Math.random() * 26) + 5,
            maxCustomers : Math.floor((Math.random() * 40) + 26),
            averageSale : Math.floor(Math.random() * 10) + 1,
        }

        let avg = (newObject.minCustomers + newObject.maxCustomers)/2

        let sales = avg * newObject.averageSale

        let newShit = `
        <ul>Location: ${newObject.location}</ul>
        <li>Min Customers: ${newObject.minCustomers}</li>
        <li>Max Customers:  ${newObject.maxCustomers}</li>
        <li>Average Sales:  ${newObject.averageSale}</li>
        <li>in ${newObject.location} at ${timings} o'clock, an average of ${avg} customers will buy an average of ${sales} salmon snacks.</li>
    `
    newText += newShit

    }

    fishTable.innerHTML = newText
}



function openingHours() {

    

    let selector = document.getElementById("selectDiv");

    if (visi == true ) {

        selector.style.visibility = 'visible'

        visi = false

        
        
    } else {

        selector.style.visibility = 'hidden'
        visi = true
        return
    }

    selectorHtml = `
        <label for="times">Data for which hour?</label>
        <select name="times" id="openTimes" onchange="createData()">`

        for (k = 6; k <= 20; k ++) {

            if (k == 20) {

                let text = `
                <option value="${k}:00">${k}:00</option>
                <option value="all">all</option>` 
                
                selectorHtml += text

            } else {

                let text = `
                <option value="${k}:00">${k}:00</option>`
    
                selectorHtml += text
    
            }
    }

    selectorHtml += `
    </select>`

    selector.innerHTML = selectorHtml

}

function createTable() {

    let totals = []
    let dailys = []

    let createFish = document.getElementById("fishTable");

    let nexText = ''

    let tableHtml = `<table>
                        <tr>`

    for (j = 5; j <= 21; j ++) {

        if (j == 5) {

            let exText = 
            `<th>Location</th>
            <th>Average</th>
            `

            tableHtml += exText

        } else if (j == 21) {
            let exText = `<th>Total</th>
                            </tr>`
            tableHtml += exText

        } else {
            let exText = `<th>${j}:00</th>
            `
            tableHtml += exText
        }
    }

    for (z = 0; z < locations.length + 1; z ++) {

        totals.push(0)


        if (z== locations.length) {

            nexText = '<tr>'

            let tiText = `<td>Daily</td>
            `
    
            nexText += tiText

        } else {

            nexText = '<tr>'

            let tiText = `<td>${locations[z]}</td>
            `
    
            nexText += tiText
            
        }


    for (k = 0; k <= 16; k ++) {

        if (z == 0) {
            dailys.push(0)
        }

        if (k == 0) {

            if (z == locations.length) { 

                let timeText = `<td>Totals</td>`

                nexText += timeText
    
            }

            else {

            let timeText = `<td>${avrSal[z]}</td>`

            nexText += timeText

        }


        } else if (k == 16) {

            if (z== locations.length) { 

                let sum = totals.reduce(function(a, b){
                    return a + b;
                });

                let timeText = `<th>${sum}</th>`

                nexText += timeText
    
            } else {

            let timeText = `<th onmouseover="show()" onmouseout="hide()" id="${z}">${Math.round(totals[z]*avrSal[z])}</th>`

            nexText += timeText

        }

        } else {

            if (z== locations.length) { 

                let timeText = `<td onmouseover="showTot()" onmouseout="hide()" id="${z}-${k}">${dailys[k]}</td>`

                nexText += timeText
    
            } else {

            let ranNum = Math.floor(Math.random() * (maxCust[z] - minCust[z])) + minCust[z]

            let perceP = Math.round((ranNum/100)*perce[k -1])

            let timeText = `<td onmouseover="showTD()" onmouseout="hide()" id="${z}-${perce[k-1]}-${k}">${perceP}</td>`

            totals[z] += perceP
            dailys[k] += perceP

            nexText += timeText

            }
    
        }

    }

    nexText += `</tr>`

    tableHtml += nexText
    
    createFish.innerHTML = tableHtml

    }
    
}

function show() {
    
    let textP = document.getElementById('tileData')

    textP.style.visibility = 'visible'

    textP.innerText = 'The total number of salmon snacks brought in ' + locations[event.target.id] + ' was ' + event.target.innerText + '.'

}

function hide() {
    
    let textP = document.getElementById('tileData')

    textP.style.visibility = 'hidden'

    textP.innerText = ''

}

function showTD() {
    
    let textP = document.getElementById('tileData')

    let nums = event.target.id

    const myArray = nums.split("-");

    textP.style.visibility = 'visible'

    let timr = parseInt(myArray[2]) + 5

    let maths = Math.round(avrSal[myArray[0]]*event.target.innerText)

    textP.innerText = `An average of ${event.target.innerText} customers in ${locations[myArray[0]]} at ${timr}:00 will buy ${maths} salmon snacks (${myArray[1]}% of peak).
    This will require ${(Math.trunc(maths/20)) + 1} tossers.`

}

function showTot() {
    
    let textP = document.getElementById('tileData')

    let nums = event.target.id

    const myArray = nums.split("-");

    textP.style.visibility = 'visible'

    let timr = parseInt(myArray[1]) + 5

    textP.innerText = `The total number of customers at ${timr}:00 would be ${event.target.innerText}.`

}

function smd() {

    event.preventDefault()

    var values = document.getElementsByClassName("popper");

    for (var i = 0; i < values.length; i++) {

       if (values[i].value == 0) {

        return alert('values cannot be empty')

       }

    }

    if (values[1].value < values[2].value) {

        return alert('Max Customers cannot be lower than Min Customers')

    }

    let string = document.getElementById('inpName').value
    let firstLetter = string.charAt(0)
    let firstLetterCap = firstLetter.toUpperCase()
    let remainingLetters = string.slice(1)
    let capitalizedWord = firstLetterCap + remainingLetters

    locations.push(capitalizedWord)
    maxCust.push(parseFloat(document.getElementById('inpMax').value))
    minCust.push(parseFloat(document.getElementById('inpMin').value))
    avrSal.push(parseFloat(document.getElementById('inpSale').value))
    let pet = document.getElementById('fishInfo')
    pet.scrollTop = pet.scrollHeight
    document.getElementById('inpName').value = ''
    document.getElementById('inpMax').value = ''
    document.getElementById('inpMin').value = ''
    document.getElementById('inpSale').value = ''
    let createFish = document.getElementById("onTable");
    createFish.innerHTML = ``
    raes = []
    createData()
}
