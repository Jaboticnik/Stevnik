//Ko uporabnik klikne na gumb z idjem "pritiskalnik", prikazi:
// "Nekaj je slo narobe, poskusi se enkrat!"
// to besedilo moras prikazati na besedilu (<p>) z id-jem "napaka"

let Prejemnik = document.getElementById("napaka")

function napakaklik() {
    let Besedilo = "Nekaj je slo narobe, poskusi se enkrat!"
    console.log(Besedilo)
    Prejemnik.textContent = Besedilo

}
