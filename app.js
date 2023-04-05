let locations = ["Seattle", "Tokyo", "Dubai", "Paris", "Lima"]

let minCust = [23, 3, 11, 20, 2]

let maxCust = [65,24,38,38,16]

let avrSal = [6.3,1.2,3.7,2.3,4.6]

let percentTimes = [50, 75, 100, 60, 80, 100, 70, 40, 60, 90, 70, 50, 30, 40, 60]

let visi = true

function change() {

        let seattle = new SalmonShop(locations[0], minCust[0], maxCust[0], avrSal[0])
        let toyko = new SalmonShop(locations[1], minCust[1], maxCust[1], avrSal[1])
        let dubai = new SalmonShop(locations[2], minCust[2], maxCust[2], avrSal[2])
        let paris = new SalmonShop(locations[3], minCust[3], maxCust[3], avrSal[3])
        let lima = new SalmonShop(locations[4], minCust[4], maxCust[4], avrSal[4])

        openingHours()

}

function SalmonShop(location, minCustomers, maxCustomers, saleAverage) {

    this.location = location
    this.minCustomers = minCustomers
    this.maxCustomers = maxCustomers
    this.saleAverage = saleAverage
    this.averageCustomers = Math.floor(Math.random() * maxCustomers) + minCustomers;
  }
  
  SalmonShop.prototype.generateAge = function () {

  };







function createData() {

    let timings = document.getElementById("openTimes").value;

    let fishTable = document.getElementById("fishTable");

    newText = ''

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
        <ul>Location: ${newObject.location}</ul>
        <li>Min Customers: ${newObject.minCustomers}</li>
        <li>Max Customers:  ${newObject.maxCustomers}</li>
        <li>Average Sales:  ${newObject.averageSale}</li>
        <li>in ${newObject.location} at ${timings} o'clock, an average of ${avg} customers will buy an average of ${sales} salmon snacks.</li>
    `
    newText += newShit

    }

    newText += `<br>`

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

    for (z = 0; z <= locations.length; z ++) {

        totals.push(0)

        if (z == 5) {
            nexText = '<tr>'

            let tiText = `<td>Total</td>
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

            if (z == 5) {

            let timeText = `<td>-</td>`

            nexText += timeText
    
            } else {

            let timeText = `<td>${avrSal[z]}</td>`

            nexText += timeText

            }


        } else if (k < 16) {

            if (z == 5) {

                let timeText = `<td>${dailys[k]}</td>`

                nexText += timeText
            
            } else {

                let ranNum = Math.floor(Math.random() * (maxCust[z] - minCust[z])) + minCust[z]

                let percentChange = Math.round((ranNum/percentTimes[k -1])*100)
    
                let timeText = `<td>${percentChange}</td>`
    
                totals[z] += percentChange
                dailys[k] += percentChange
    
                nexText += timeText
                
            }

        } else {

            if (z == 5) {

                const sum = totals.reduce((accumulator, value) => {
                    return accumulator + value;
                  }, 0);

                let timeText = `<th>${sum}</th>`

                nexText += timeText
    
            } else {

            let timeText = `<th>${totals[z]}</th>`

            nexText += timeText

            }
    
        }

    }

    nexText += `</tr>`

    tableHtml += nexText
    
    createFish.innerHTML = tableHtml

    }
    
}
