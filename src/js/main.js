'use strict';

console.log('>> Ready :)');


// inhablitar botón cuando se ha clicado
// y mostrar div de compartir tarjeta cuando se haya creado

const cardButton = document.querySelector('#button-card')
const shareDiv = document.querySelector('#share-card')

function unabling () {
    cardButton.classList.add('unabled');
    shareDiv.classList.remove('hidden');
}

cardButton.addEventListener('click', unabling)







