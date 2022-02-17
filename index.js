//----------------------------------------------------
// document.getElementById("stetni-el").innerText = 6
//----------------------------------------------------
// 1. naloga
// let prvaSerija = 5
// let drugaserija = 7
// let stetje = prvaSerija * drugaserija
// console.log(stetje)
//----------------------------------------------------
// 2. naloga
// Starost = 15
// Pasjaletakoeficient = 7

// MojaPasjaLeta = Starost * Pasjaletakoeficient
// console.log(MojaPasjaLeta);

// let stetje = 5 
// // stetje + 1
// stetje = stetje + 2

// stetje = stetje + 2
// stetje = stetje + 2
// console.log(stetje)
//----------------------------------------------------
// Naloga 3
// let dodatnetocke = 50
// console.log(dodatnetocke)
// dodatnetocke = dodatnetocke + 50
// console.log(dodatnetocke)
// dodatnetocke = dodatnetocke - 75
// console.log(dodatnetocke)
// dodatnetocke = dodatnetocke + 45

// console.log(dodatnetocke)
//----------------------------------------------------
// Naloga PONAVLJANJE (LOOPING)
// function ponavljanje() {
//     console.log("5")
//     console.log("4")
//     console.log("3")
//     console.log("2")
//     console.log("1")
// }
//ponavljanje()
//----------------------------------------------------
// Naloga moja funkcija
// function ucenje() {
//     console.log("42")
// }
// ucenje()
//----------------------------------------------------
// Naloga sestevanje casov
// let cas1 = 34
// let cas2 = 33
// let cas3 = 36

// function vsota() {
//     let skupni_cas = cas1 + cas2 + cas3
//     console.log(skupni_cas)
// }

// vsota()
//

//----------------------------------------------------
// Naloga uspesnih casov

// let dokoncanikrogi = 0

// function dokoncankrog() {
//     dokoncanikrogi = dokoncanikrogi + 1
// }

// dokoncankrog()
// dokoncankrog()
// dokoncankrog()

// console.log(dokoncanikrogi)

//----------------------------------------------------
// Naloga stringov

// let uporabnisko_ime = "besedilo"
// let sporocilo = "Imas 3 nova sporocila"

// let sporocilo_uporabniku = (uporabnisko_ime, sporocilo + "!")

// console.log(sporocilo_uporabniku)

//----------------------------------------------------
// Naloga stringov VAJA

// let ime = "Marjan"
// let pozdrav = "Pozdravljeni, moje ime je "

// let mojpozdrav = pozdrav + ime

// console.log(mojpozdrav)

//----------------------------------------------------
// Naloga stringov in stevil 

// let ime = "42"
// let pozdrav = "Pozdravljeni, moje ime je "

// let mojpozdrav = pozdrav + ime

// console.log(mojpozdrav)

// let tocke = 4
// let dodatnetocke = "10"

// let skupnetocke = tocke + dodatnetocke

// console.log(skupnetocke)

//----------------------------------------------------
// Naloga stringov in stevil VAJA

 // console.log(4 + 5) //9 ker je oboje stevilo
 // console.log("2" + "4") // "24" ker sta oba stringa
 // console.log("5" + 1) // "51" ker je eno od tega string in eno je stevilo, zato se se drugo pretvori v string
 // console.log(100 + "100") // "100100" ker je eno od tega string in eno je stevilo, zato se se drugo pretvori v string


//----------------------------------------------------
// Naloge stringov

// POMEMBNE FUNKICJE V MAPI Vaja_Dobrodoslica za ta korak

//----------------------------------------------------

//KONČNA NALOGA

// Usvari spremenljivko za  shrani-el v htmlju in jo poimenuj ShraniHTML

let ShraniHTML = document.getElementById("shrani-el")

// nastaviti stetje na 0

let steviloHTML = document.getElementById("stetni-el")

console.log(steviloHTML)


stevilo = 0

// dodati sprozilce na klik na gumb dodaj stevilo // spremeni stetni-el v htmlju, da se bo stevilo omenjenega stetja spreminjal

function pristej() {
    stevilo +=1
    steviloHTML.innerText = stevilo  //innerText je besedilo znotraj >< kamor normalno vpisemo besedilo v htmlju
    console.log(stevilo)
} 

// Funkcija, ki ponastavi stevilo stetja
function ponastavi() {
    stevilo = 0
    steviloHTML.innerText = stevilo
    console.log(stevilo)
}

// Shrani funkcija ki poslje log

function shrani() {
    // Ustvari spremenljivko ki vkljucuje stevilo in crtico npr(12-)
  let shrani_stevilka = stevilo + " - "
    // V textContent od spremenljivke ShraniHTML dodaj zgornjo spremenljivko   !!textContent je zato, ker smo dali v shrani_stevilka presledek in je zato boljse ce damo Content(https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)
    ShraniHTML.textContent +=  shrani_stevilka
    // PAZI DA NE IZBRISES VSEBINE TRENUTNEGA BESEDILA, KI JE: "Prejsnje vrednosti:"
    console.log(stevilo)
    stevilo = 0
    steviloHTML.innerText = stevilo
}

