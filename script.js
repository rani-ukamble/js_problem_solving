function increase_number(){
    document.getElementById("output-1").innerHTML = Number(document.getElementById("txt-1").value) +1
}

function purchase_product(){
    let discPrice = Number(document.getElementById("txt-2").value) * Number(document.getElementById("txt-3").value) /100
    let p1 = document.createElement("p")
    p1.innerHTML = discPrice

    document.body.appendChild(p1)

}
var players = ["smith", "james", "peter", "harry", "willimns", "john"];
var [coach, capton, ...fielders] = players;

console.log(coach, capton, fielders);
