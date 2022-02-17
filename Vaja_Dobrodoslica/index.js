let DobrodoselHTML = document.getElementById("dobrodosel-el")

let ime = "Marjan"
let pozdrav = "Pozdravljeni, moje ime je "

let mojpozdrav = pozdrav + ime

DobrodoselHTML.innerText = mojpozdrav


console.log(mojpozdrav)


// TO JE ENAKO SPODNJI FUNKCIJI = DobrodoselHTML.innerText = DobrodoselHTML + "👋" :

DobrodoselHTML.innerText += " 👋" // Plus pred = doda na desno stran enacbe element, ki je na levi strani