'use strict';
// Consegna:
// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.

// 1. Creo la lista della spesa tramite un array
let shoppingList = ['Pane', 'Broccoli', 'Nutella', 'Birra', 'Pasta'];

// 2. Dichiaro una variabile collegata all'id dell'ul del mio DOM
const listContainer = document.querySelector('#list');

// 3. Formulo il ciclo while
let i = 0;
while ( i < shoppingList.length) {
    let item = document.createElement('li');
    item.innerHTML += shoppingList[i];
    listContainer.append(item);
    i++;
}
