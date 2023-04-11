let locations = ["Seattle", "Tokyo", "Dubai", "Paris", "Lima"]

let minCust = [23, 3, 11, 20, 2]

let maxCust = [65,24,38,38,16]

let avrSal = [6.3,1.2,3.7,2.3,4.6]

let perce = [50, 75, 100, 60, 80, 100, 70, 40, 60, 90, 70, 50, 30, 40, 60]

let visi = true

function change() {

    openingHours()

    var id = null;

    /*
    var elem = document.getElementById("fishImg");
    var postop = 0;
    let popDeg = 0
    clearInterval(id);
    id = setInterval(frame, 8);
    function frame() {
    if (postop == 1050) {
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
    */

}

function createData() {

    let timings = document.getElementById("openTimes").value;

    let fishTable = document.getElementById("fishTable");

    document.getElementById('fishInput').style.visibility = 'hidden'

    newText = ''

    if (timings == 'all') {

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

            let timeText = `<td onmouseover="showTD()" onmouseout="hide()" id="${z}-${perce[k-1]}">${perceP}</td>`

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

    textP.innerText = 'the total number of salmon snacks brought in ' + locations[event.target.id] + ' was ' + event.target.innerText

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

    textP.innerText = `an average of ${event.target.innerText} customers in ${locations[myArray[0]]} will buy ${Math.round(avrSal[myArray[0]]*event.target.innerText)} salmon snacks (${myArray[1]}% of peak)
    this will require ${Math.round(Math.ceil(avrSal[myArray[0]]*event.target.innerText)/20)} tossers`

}

function showTot() {
    
    let textP = document.getElementById('tileData')

    let nums = event.target.id

    const myArray = nums.split("-");

    textP.style.visibility = 'visible'

    let timr = parseInt(myArray[1]) + 5

    textP.innerText = `the total number of customers at ${timr}:00 would be ${event.target.innerText}`

}

function smd() {

    event.preventDefault()

    var values = document.getElementsByClassName("popper");

    for (var i = 0; i < values.length; i++) {

       if (values[i].value == 0) {

        return

       }
    }

    
    locations.push(document.getElementById('inpName').value)
    maxCust.push(parseFloat(document.getElementById('inpMax').value))
    minCust.push(parseFloat(document.getElementById('inpMin').value))
    avrSal.push(parseFloat(document.getElementById('inpSale').value))
    createTable()
}
