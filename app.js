let locations = ["Seattle", "Tokyo", "Dubai", "Paris", "Lima"]
let minCust = [23, 3, 11, 20, 2]
let maxCust = [65,24,38,38,16]
let avrSal = [6.3,1.2,3.7,2.3,4.6]

function createData() {

    let timings = document.getElementById("openTimes").value;

    let fishTable = document.getElementById("fishTable");

    shit = ''

    if (timings == 'all') {

        createTable()

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
        <h1>Location: ${newObject.location}</h1>
        <p>Min Customers: ${newObject.minCustomers}</p>
        <p>Max Customers:  ${newObject.maxCustomers}</p>
        <p>Average Sales:  ${newObject.averageSale}</p>
        <p>in ${newObject.location} at ${timings} hour, an average of ${avg} customers will buy an average of ${sales} salmon snacks</p>
    `
    shit += newShit

    }

    fishTable.innerHTML = shit

}

function change() {

    openingHours()

}

function openingHours() {

    let selector = document.getElementById("selectDiv");

    selectorHtml = `
        <label for="times">data for which hour?</label>
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

    let createFish = document.getElementById("fishTable");

    let nexText = ''

    let tableHtml = `
    <table>
        <tr>
        <th>Location</th>
        <th>6:00</th>
        <th>7:00</th>
        <th>8:00</th>
        <th>9:00</th>
        <th>10:00</th>
        <th>11:00</th>
        <th>12:00</th>
        <th>1:00</th>
        <th>2:00</th>
        <th>3:00</th>
        <th>4:00</th>
        <th>5:00</th>
        <th>6:00</th>
        <th>7:00</th>
        <th>8:00</th>
        <th>Total</th>
    </tr>`

    for (z = 0; z < locations.length; z ++) {

        nexText = '<tr>'

        let tiText = `<td>${locations[z]}</td>
        `

        nexText += tiText

    for (k = 0; k <= 14; k ++) {

        let timeText = `<td>${Math.floor((Math.random() * 70) + 6)}</td>`

        nexText += timeText

    }

    nexText += `</tr>`

    tableHtml += nexText
    
    createFish.innerHTML = tableHtml

    }
    
}
