let tocke = 3

// Ustvari dve funkciji, dodaj3tocke() in odstranitocko()
// dodaj/odstrani tocke, torej naredi zgornji dve funkciji uporabni

function dodaj3tocke() {
 tocke += 3
 console.log(tocke)
}

function odstranitocko() {
    tocke = tocke - 1
    console.log(tocke)
   }




// Prikliči funkciji, tako, da bo na koncu stevilo, ki se bo prikazalo v konzoli 10.

dodaj3tocke()
dodaj3tocke()
dodaj3tocke()
odstranitocko()
odstranitocko()

console.log(tocke)