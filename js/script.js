// Gioco Campo minato
// -----------------------------


// Bonus, scegli la difficoltà
var difficolta = parseInt(prompt('Scegli la difficoltà. Scrivi 0, 1 o 2'));

var numeriMax = 100;
var tentativi = 84;

if (difficolta == 1) {
  numeriMax = 80;
  tentativi = 64;
} else if (difficolta == 2) {
  numeriMax = 50;
  tentativi = 34;
}


// Il computer deve generare 16 numeri casuali da 1 a 100 sempre diversi.
var numeriVietati = [];

while (numeriVietati.length < 16) {

  var numeroDaInserire = getRandomInt(1, numeriMax);

  if (!numeriVietati.includes(numeroDaInserire)) {
    numeriVietati.push(numeroDaInserire);
  }
}
console.log(numeriVietati);

// In seguito deve chiedere all’utente di inserire per 84 volte un numero da 1 a 100

var numeroInserito,
    j = 0,
    punteggio = 0,
    tuoTentativo = 1,
    listaNumeriInseriti = [];

while (j < tentativi && !trovato) {
  numeroInserito = parseInt(prompt('Inserisci un numero sempre diverso da 1 a 100 - ' + 'Tentativo:' + tuoTentativo));
  console.log('Numero inserito ' + (j + 1) + ': ' + numeroInserito);

  // controlla se il numero è già stato inserito se è 0 o NaN
  if (numeroInserito != 0 && !isNaN(numeroInserito) && !listaNumeriInseriti.includes(numeroInserito)) {
    listaNumeriInseriti.push(numeroInserito)
    console.log('Array numeri inseriti ' + listaNumeriInseriti);
  } else {
    alert('Errore, devi inserire un numero valido o metterne uno diverso.')
    tuoTentativo--;
    punteggio--;
    j--;
  }
  
  // se il numero è presente nella lista dei numeri generati, la partita termina,
  // altrimenti continua chiedendo all’utente un altro numero.
    var trovato = numeriVietati.includes(numeroInserito);
    console.log('Il numero inserito è tra quelli vietati? ' + trovato);
    if (trovato == true) {
      // La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di tentativi consentiti.
      // Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
      alert('Hai inserito un numero "vietato", il tuo punteggio è ' + punteggio);
    }
    if (j == tentativi) {
      alert('Hai vinto');
    }


  j++;
  punteggio++;
  tuoTentativo++;
}



// funzione che genera numero random
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Il max è escluso e il min è incluso
}
