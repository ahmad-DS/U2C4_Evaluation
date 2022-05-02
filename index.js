// write js code here corresponding to index.html
// You should add submit event on the form
var schedule = JSON.parse(localStorage.getItem("schedule")) || [];
document.querySelector("#masaiForm").addEventListener("submit", storeData);

function storeData() {
    event.preventDefault()
    var obj = {
        matchNum: document.querySelector("#matchNum").value,
        teamA: document.querySelector("#teamA").value,
        teamB: document.querySelector("#teamB").value,
        date: document.querySelector("#date").value,
        venue: document.querySelector("#venue").value
    }
    console.log(obj);
    schedule.push(obj);
    localStorage.setItem("schedule",JSON.stringify(schedule));


}
