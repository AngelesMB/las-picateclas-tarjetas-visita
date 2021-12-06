'use strict';

console.log('>> Ready :)');


// inhablitar botón cuando se ha clicado

const cardButton = document.querySelector('#button-card')

function unabling () {
    cardButton.classList.add('unabled');
}

cardButton.addEventListener('click', unabling)

