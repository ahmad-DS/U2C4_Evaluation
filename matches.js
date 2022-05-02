// write js code here corresponding to matches.html
var schedule = JSON.parse(localStorage.getItem("schedule"));

var fav = JSON.parse(localStorage.getItem("favourites")) || [];
displayData(schedule);

function displayData(data) {
    document.querySelector("tbody").innerHTML = ""
    data.forEach(function (element) {
        var tr = document.createElement("tr");

        var td1 = document.createElement("td");
        td1.innerText = element.matchNum;

        var td2 = document.createElement("td");
        td2.innerText = element.teamA;

        var td3 = document.createElement("td");
        td3.innerText = element.teamB;

        var td4 = document.createElement("td");
        td4.innerText = element.date;

        var td5 = document.createElement("td");
        td5.innerText = element.venue;

        var td6 = document.createElement("td");
        td6.innerText = "add to Fav";
        td6.style.backgroundColor = "green";
        td6.style.cursor = "pointer"
        td6.addEventListener("click", function () {
            fav.push(element)
            td6.innerText = "added!"
            console.log(fav);
            localStorage.setItem("favourites", JSON.stringify(fav));
        })

        tr.append(td1, td2, td3, td4, td5, td6);
        document.querySelector("tbody").append(tr)
    })
}

document.querySelector("#filterVenue").addEventListener("change", filterVenue);
function filterVenue() {
    var venue = document.querySelector("#filterVenue").value;
    if (venue == "none") {
        displayData(schedule);
    } else {

        var filtered_list = schedule.filter(function (element) {
            return element.venue == venue;
        })
        displayData(filtered_list);
    }
}