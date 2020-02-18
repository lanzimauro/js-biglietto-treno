
var chilometri = prompt('Inserire i chilometri da percorrere');// Chiedere all'utente quanti chilometri vuole percorrere.
document.getElementById('km').innerHTML = chilometri;
var anni = prompt("Inserire l'età del passeggero");// Chiedere all'utente quanti anni ha.
document.getElementById('old').innerHTML = anni;

var prezzo = ((1 / 100) * 21); // Prezzo biglietto €/km.
var costo = prezzo * chilometri; // Costo biglietto in relazione ai chilometri da percorrere.
document.getElementById('costo').innerHTML = costo;

var prezzoFinale;
var scontoOver = (costo / 100) * 40; // Sconto del 40% per passeggero con più di 65 anni.
var scontoUnder = (costo / 100) * 20; // Sconto del 20% per passeggero con meno di 18 anni.

if ((anni >= 18) && (anni <= 65)) {
    prezzoFinale = costo
    document.getElementById('costo').innerHTML = prezzoFinale;
} else if (anni < 18) {
    prezzoFinale = (costo - scontoUnder);
    document.getElementById('costo').innerHTML = prezzoFinale;
} else if (anni > 65) {
    prezzoFinale = (costo - scontoOver);
    document.getElementById('costo').innerHTML = prezzoFinale;
}

document.getElementById('centra').setAttribute('class','visible');
