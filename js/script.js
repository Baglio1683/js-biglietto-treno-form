// Declaration and Init of Constant

const nameSur = document.getElementById("namesur")
console.log(nameSur)

const km = document.getElementById("kilometer")
console.log(km)

const rangeAge = document.getElementById("listAge")
console.log(rangeAge)

const keyGen = document.getElementById("keygen")

const del = document.getElementById("delete")

//Function Return the price of Train Ticket
keyGen.addEventListener('click' , function(){

const NameOpt = nameSur.value
console.log(NameOpt.value)

const distance = km.value
console.log(km.value)

const range = rangeAge.value
console.log(rangeAge.value)

const price = document.getElementById("TicketPrice")

let finalPrice

if(range === "over18"){
    finalPrice = distance * 0.21
    price.innerHTML = "Il Prezzo finale del Biglietto di " + NameOpt + " è " +  finalPrice.toFixed(2) + "€"
}

if(range === "under18"){
    finalPrice = distance * 0.21
    finalPrice = finalPrice - (finalPrice * 0.20)
    price.innerHTML = "Il Prezzo finale del Biglietto di " + NameOpt + " è " +  finalPrice.toFixed(2) + "€"
}

if(range === "over65"){
    finalPrice = distance * 0.21
    finalPrice = finalPrice - (finalPrice * 0.40)
    price.innerHTML = "Il Prezzo finale del Biglietto di " + NameOpt + " è " +  finalPrice.toFixed(2) + "€"
}

})

//Function for delete the data on 
del.addEventListener('click', function(){
    
let price = document.getElementById("TicketPrice")

nameSur.value = " "

km.value = " "
 
price.innerHTML = ""

})

