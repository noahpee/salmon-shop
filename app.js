let locations = ["Seattle", "Tokyo", "Dubai", "Paris", "Lima"]

function createData() {

    let timings = document.getElementById("openTimes").value;

    for (i = 0; i < locations.length; i ++) {

        let newObject = {
            location : locations[i],
            minCustomers : Math.floor(Math.random() * 26) + 5,
            maxCustomers : Math.floor((Math.random() * 40) + 26),
            averageSale : Math.floor(Math.random() * 10) + 1,
        }

        let avg = (newObject.minCustomers + newObject.maxCustomers)/2

        let sales = avg * newObject.averageSale

        console.log('in ' + newObject.location + ' at this hour, an average of ' + avg + ' customers should buying ' + sales + ' salmon snacks')
    }

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

            let text = `
            <option value="${k}:00">${k}:00</option>`

            selectorHtml += text

    }

    selectorHtml += `
    </select>`

    selector.innerHTML = selectorHtml

    
}
