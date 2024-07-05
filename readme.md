Esercizio di oggi: *Griglia Campo Minato*


nome repo: *js-campominato-grid*


*Consegna*
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Scomponete sempre il problema in sotto problemi, senza andare troppo nel dettaglio questa volta. Andate nel dettaglio solo quando non riusciti ad implementare in codice qualcosa.
Numero di push: 15 circa


<!-- PSEUDO CODICE -->

1 - SUDDIVIDO IN 2 MACRO AREE LA STRUTTURA HTML (HEADER - MAIN)
2 - NELLA PARTE HEADER CREO UN ELEMENTO BOTTONE CHE AVVIA IL GIOCO
3 - NELLA PARTE MAIN CREO UN CONTENITORE GRIGLIA DOVE VERRA MOSTRATO IL LAYOUT
4 - RECUPERO NEL FILE JS GLI ELEMENTI DAL DOM (BOTTONE E GRID)
5 - ASSEGNO L'EVENTO CLICK AL BOTTONE RECUPERATO NEL DOM

6 - CREO UN CICLO FOR CON 100 ITERAZIONI 
6.1 - ALL'INTERNO DEL CICLO FOR CREO UNA VARIABILE CHE MI CONSENTE DI CREARE UN ELEMENTO CHE RAPPRESENTERA' A LAYOUT I QUADRATI DELLA GRIGLIA
6.2 - SEMPRE DENTRO AL CICLO FOR APRO UNA VARIABILE CHE INNIETTA DEL TESTO ALL'INTERNO DEGLI ELEMENTI CREATI
6.3 - APPENDO ALL'ELEMENTO GRID I QUADRATI CHE LO COMPONGONO
6.4 - ASSEGNO LA CLASSE SQUARE ALL'ELEMENTO CREATO
7 - DEFINISCO LA FUNZIONE CHE CREA I QUADRATI
8 - PULISCO LA GRIGLIA PRIMA DI CREARNE UNA NUOVA
<!-- A QUESTO PUNTO NEL LAYOUT VERRANNO RAPPRESENTATI SOLAMENTE UNA SEQUENZA DI NUMERI DA 1 FINO A 100 -->

8 - STILIZZO NEL FILE CSS L'ELEMENTO GRID
9 - STILIZZO LA CLASSE SQUARE