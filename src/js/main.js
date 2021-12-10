'use strict';



// inhablitar botón cuando se ha clicado
// y mostrar div de compartir tarjeta cuando se haya creado

const cardButton = document.querySelector('#button-card');
const shareDiv = document.querySelector('#share-card');

function unabling () {
    cardButton.classList.add('unabled');
    shareDiv.classList.remove('hidden');
}

cardButton.addEventListener('click', unabling);


// colapsar contneido formularios cuando tengamos otra opción abierta
// constantes del form.
const diseña = document.querySelector(".form-title-js");
const rellena = document.querySelector(".form-title2-js");
const comparte = document.querySelector(".form-title3-js");


// funciones  collapsables del formulario
function handClickCollapsed (event){
event.currentTarget.parentNode.classList.toggle("collapsed");
const arrow = event.currentTarget.querySelector(".js-arrow");
arrow.classList.toggle("js-arrow-down");
}

// eventos para desplegar formularios 
diseña.addEventListener("click", handClickCollapsed);
rellena.addEventListener("click", handClickCollapsed);
comparte.addEventListener("click", handClickCollapsed);


