/**************************************************************************************************************************************************\ 
 * 
 * ESERCIZIO ---> CAMPO MINATO  
 * 
 * Esecuzione : 
 * 
 *  1) Il computer deve generare 16 numeri casuali tra 1 e 100 (numeri vietati).
 *  2) Chiedere all’utente di inserire un numero alla volta, compreso tra 1 e 100.
 *  
 * ATTENZIONE :  L’utente non può inserire più volte lo stesso numero.
 *  
 *  3) La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
 *  3.1) Altrimenti si continua chiedendo all’utente un altro numero.
 * 
 *  4)Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
 * 
\************************************************************************************************************************************************/

// ---------- FASE 1 ( Generazione dei 16 numeri random 1 - 100 )

// Array delle mine
var bomb = fineGioco();


// Numeri inseriti
var numeriUtenteInseriti = [];



while (!bomb.includes(numeroUtente)) {
    // Numeri utente 
    var numeroUtente = parseInt( prompt('Inserisci un numero da 1 - 100 : ') );
    
    // Controllo doppione del numero + aggunta all array [ numeriUtenteInseriti ]
    if (numeriUtenteInseriti.includes(numeroUtente)) {
        alert('Questo numero è gia stato inserito, inseriscine un altro');
    } else {
        numeriUtenteInseriti.push(numeroUtente);
    }

}


// Controlli di debug
console.log('ULTIMO NUMERO UTENTE INSERITO : ', numeroUtente);
console.log('NUMERI UTENTE INSERITI : ', numeriUtenteInseriti);
console.log('NUMERI BOMBA : ', bomb);
console.log('PUNTEGGIO : ', numeriUtenteInseriti.length);

if (bomb.includes(numeroUtente)) {
    console.log('Ritenta');
} else {
    console.log ('Hai Vinto')
}


////////// FUNZIONI \\\\\\\\\\

function randomNumber(min, max) {  //---------------------------- Genera un numero random ( 1 - 100)
    return Math.floor( Math.random() * (max - min) + min) + min;
}

function fineGioco() { //---------------------------------------- Array di 16 numeri ( bombe )
    
    var numero = [];

    for (var i = 0; i < 16; i++) {     
        numero.push( randomNumber(1, 100));
    }

    return numero;
}

