// Gioco Campo minato
// -----------------------------


// Bonus, scegli la difficoltà
var difficolta = prompt('Scegli la difficoltà. Scrivi 0, 1 o 2');

if (difficolta == 0) {
  var numeriMax = 100;
  var tentativi = 84;
} else if (difficolta == 1) {
  numeriMax = 80;
  tentativi = 64;
} else if (difficolta == 2) {
  numeriMax = 50;
  tentativi = 34;
}


// Il computer deve generare 16 numeri casuali da 1 a 100.
var numeriVietati = [];

for (var i = 0; i < 16; i++) {
  numeriVietati.push(getRandomInt(1, numeriMax));
}
console.log(numeriVietati);

// In seguito deve chiedere all’utente di inserire per 84 volte un numero da 1 a 100

var numeroInserito,
    j = 0,
    punteggio = 0;

while (j < tentativi) {
  numeroInserito = prompt('Inserisci un numero sempre diverso da 1 a 100')
  console.log('Numero inserito ' + (j + 1) + ': ' + numeroInserito);

  // se il numero è presente nella lista dei numeri generati, la partita termina,
  // altrimenti continua chiedendo all’utente un altro numero.
  for (var y = 0; y < numeriVietati.length; y++) {
    if (numeroInserito == numeriVietati[y]) {
      // La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di tentativi consentiti.
      // Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
      alert('Hai inserito un numero "vietato", il tuo punteggio è ' + punteggio);
      j = tentativi;
    }
  }
  j++;
  punteggio++;
}




// funzione che genera numero random
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Il max è escluso e il min è incluso
}
