// TRACCIA  
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


// RECUPERO L'ELEMENTO BUTTON DAL DOM

const btn = document.getElementById('start');

// RECUPERO L'ELEMENTO CON ID GRID DAL DOM

const grid = document.getElementById('grid');

// DICO AL BOTTONE DI RESTARE IN ATTESA DELL'EVENTO 'CLICK'

btn.addEventListener('click', function(){

})


// ESEGUO UN CICLO DI 100 ITERAZIONI PER CREARE UNA GRIGLIA 10X10

for (let i = 0; i<100; i++){
    // VARIABILE CREAZIONE ELEMENTO
    let currentSquare = document.createElement('div');
    // ASSEGNO LA CLASSE SQUARE ALL'ELEMENTO CREATO
    currentSquare.classList.add('square');
    // VARIABILE PER CREARE IL TESTO ALL'INTERNO DELL'ELEMTO CREATO
    currentSquare.innerText = i + 1;
    // APPENDO ALL'ELEMENTO GRID GLI ELEMENTI CREATI TRAMITE VARIABILE NEL FILE JS
    grid.append(currentSquare);
    
}