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
 * BONUS:
 * All’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
 * con difficoltà 0 => tra 1 e 100
 * con difficoltà 1 =>  tra 1 e 80
 * con difficoltà 2=> tra 1 e 50
 * 
\************************************************************************************************************************************************/


var difficoltà = difficoltàCheck();            // Richiesta + Controllo della difficoltà
var bomb = listaDifficoltàGioco(difficoltà);   // Impostazione dalla difficoltà
var listaNumeriUtente = [];                    // Lista numeri inseriti dall utente

/*****************\
 * 
 * Loop di gioco
 *  
\*****************/

switch (difficoltà) {
    
    case 'facile': 
        
        while  (bomb.includes(numeroUtente) !== true)  {

            var numeroUtente = parseInt(prompt('Inserici un numero da 1 - 100 : '));   
            
            while ( (numeroUtente < 1) || (numeroUtente > 100)) {
            
                alert('Il numero inserito non è corretto. ')
                numeroUtente = parseInt(prompt('Inserici un numero da 1 - 100 : '));
    
            }

            if (listaNumeriUtente.includes(numeroUtente)) {
        
                alert('Il numero digitato è gia presente.\nInserire un nuovo numero')
        
            } else {
            
                listaNumeriUtente.push(numeroUtente);
            }

        }

        break;
    
    case 'media':

        while (bomb.includes(numeroUtente) !== true){
        
            var numeroUtente = parseInt(prompt('Inserici un numero da 1 - 80 : '));
    
            while ( (numeroUtente < 1) || (numeroUtente > 80)) {
                
                alert('Il numero inserito non è corretto. ')
                numeroUtente = parseInt(prompt('Inserici un numero da 1 - 80 : '));
    
            }
            
            if (listaNumeriUtente.includes(numeroUtente)) {
                
                alert('Il numero digitato è gia presente.\nInserire un nuovo numero')
            
            } else {
                
                listaNumeriUtente.push(numeroUtente);
            
            }
    
        }
        
    case 'difficile':

        while (bomb.includes(numeroUtente) !== true){
        
            var numeroUtente = parseInt(prompt('Inserici un numero da 1 - 50 : '));
    
            while ( (numeroUtente < 1) || (numeroUtente > 50)) {
                
                alert('Il numero inserito non è corretto. ')
                numeroUtente = parseInt(prompt('Inserici un numero da 1 - 50 : '));
    
            }
            
            if (listaNumeriUtente.includes(numeroUtente)) {
            
                alert('Il numero digitato è gia presente.\nInserire un nuovo numero')
            
            } else {
            
                listaNumeriUtente.push(numeroUtente);
            
            }
        
        }


    default:
        break;
}


/*******************
 * 
 * RISULTATO FINALE
 * 
 ******************/

var numeroUtenteHtml = document.getElementById('numero-utente-html');
var listaNumeriUtenteHtml = document.getElementById('lista-numeri-utente-html');
var bombHtml = document.getElementById('bomb-html'); 
var risultato = document.getElementById('risultato');
var score = document.getElementById('score');

if (bomb.includes(numeroUtente)) {                                                // Se hai perso
    // Ultimo numero inserito
    numeroUtenteHtml.innerHtml = numeroUtente;
    // Dati elaborati
    listaNumeriUtenteHtml.innerHtml = listaNumeriUtente;
    bombHtml.innerHTML = bomb;
    // Risultato finale
    risultato.innerHTML = 'Ritenta sarai più fortunato';
    score.innerHTML = listaNumeriUtente.length;       
} else {                                                                         // Se hai vinto
    risultato.innerHTML = 'Hai vinto';
}

////////// FUNZIONI \\\\\\\\\\

function randomNumber(min, max) {  //------------------------------------------------- Genera un numero random
    return Math.floor( Math.random() * (max - min + 1) ) + min;
}

function difficoltàCheck() { //------------------------------------------------------- Controllo inserimento difficoltà utente

    var difficoltà = prompt('Seleziona la difficoltà : \n - Facile \n - Media \n - Difficile').toLowerCase().trim();  

    while ( (difficoltà != 'facile') && (difficoltà != 'media') && (difficoltà != 'difficile') ) {
        alert('Errore');
        difficoltà = prompt('Seleziona la difficoltà : \n - Facile \n - Media \n - Difficile').toLowerCase().trim();  
    }

    return difficoltà;
}

function listaDifficoltàGioco(difficoltà) { //---------------------------------------- Difficolta + lista random correlata
    
    var numero = [];
    
    if (difficoltà == 'facile') {
        while (numero.length < 16) {  
            
            var random = randomNumber(1, 100);
            
            if (!numero.includes(random)) { 
            
                numero.push(random);
            
            }
        }
    
    } else if (difficoltà == 'media') {
        
        while (numero.length < 16) {  
           
            var random = randomNumber(1, 80);
            
            if (!numero.includes(random)) { 
            
                numero.push(random);
            
            }
        }
    
    } else if (difficoltà == 'difficile') {
        
        while (numero.length < 16) {  
            
            var random = randomNumber(1, 50);
            
            if (!numero.includes(random)) { 
            
                numero.push(random);
            
            }
        }
    }
    
    return numero;
}


