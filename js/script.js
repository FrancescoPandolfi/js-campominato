// Gioco Campo minato
// -----------------------------

// Il computer deve generare 16 numeri casuali da 1 a 100.
var numeriVietati = [];

for (var i = 0; i < 16; i++) {
  numeriVietati.push(getRandomInt(1, 100));
}
console.log(numeriVietati);

// In seguito deve chiedere all’utente di inserire per 84 volte un numero da 1 a 100

var numeroInserito,
    j = 0,
    punteggio = 0;

while (j < 10) {
  numeroInserito = prompt('Inserisci un numero sempre diverso da 1 a 100')
  console.log('Numero inserito ' + (j + 1) + ': ' + numeroInserito);

  // se il numero è presente nella lista dei numeri generati, la partita termina,
  // altrimenti continua chiedendo all’utente un altro numero.
  for (var y = 0; y < numeriVietati.length; y++) {
    if (numeroInserito == numeriVietati[y]) {
      // La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di tentativi consentiti.
      // Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
      alert('Hai inserito un numero "vietato", il tuo punteggio è ' + punteggio);
      j = 10;
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
