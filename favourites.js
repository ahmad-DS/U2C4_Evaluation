// write js code here corresponding to favourites.html
var fav=JSON.parse(localStorage.getItem("favourites")) 
displayData(fav);

function displayData(data){
    document.querySelector("tbody").innerHTML=""
    data.forEach(function(element,index){
        var tr=document.createElement("tr");

        var td1=document.createElement("td");
        td1.innerText=element.matchNum;

        var td2=document.createElement("td");
        td2.innerText=element.teamA;

        var td3=document.createElement("td");
        td3.innerText=element.teamB;

        var td4=document.createElement("td");
        td4.innerText=element.date;

        var td5=document.createElement("td");
        td5.innerText=element.venue;

        var td6=document.createElement("td");
        td6.innerText="Delete";
        td6.style.backgroundColor="red";
        td6.style.cursor="pointer"
        td6.addEventListener("click",function(index){
            fav.splice(index,1);
            localStorage.setItem("favourites",JSON.stringify(fav));
            window.location.reload();
            // td6.parentNode.remove();
            console.log(fav);
            
        })

        tr.append(td1,td2,td3,td4,td5,td6);
        document.querySelector("tbody").append(tr)
    })
}