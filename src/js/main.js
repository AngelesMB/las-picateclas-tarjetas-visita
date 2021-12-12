"use strict";

// colapsar contneido formularios cuando tengamos otra opción abierta

// constantes del form.
const diseña = document.querySelector(".form-title-js");
const rellena = document.querySelector(".form-title2-js");
const comparte = document.querySelector(".form-title3-js");

// funciones collapsables del formulario y giro de flecha
function handClickCollapsed(event) {
  event.currentTarget.parentNode.classList.toggle("collapsed");
  const arrow = event.currentTarget.querySelector(".js-arrow");
  arrow.classList.toggle("js-arrow-down");
}

// eventos para desplegar formularios
diseña.addEventListener("click", handClickCollapsed);
rellena.addEventListener("click", handClickCollapsed);
comparte.addEventListener("click", handClickCollapsed);

// TARJETA DE PREVIEW
const data = {};
data.inputName = document.querySelector(".contact__form--name");
data.inputJob = document.querySelector(".contact__form--job");
data.inputMail = document.querySelector(".contact__form--mail");
data.inputPhone = document.querySelector(".contact__form--phone");
data.inputLinkdin = document.querySelector(".contact__form--linkedin");

//constantes tarjeta preview
const nameTitle = document.querySelector('.name');
const profession = document.querySelector('.profession');
const linkedinPreview = document.querySelector ('.linkedin-js');
const emailLink = document.querySelector(".js-email");

function generatePreviewCard (){
    // if (data.inputName.value === undefined || data.inputJob.value === undefined){
    // nameTitle.innerHTML = 'Nombre Apellidos';
    // profession.innerHTML = 'Profesion';
    // }
    
    nameTitle.innerHTML = data.inputName.value;
    profession.innerHTML = data.inputJob.value;
    linkedinPreview.href = data.inputLinkdin.value;
};


// función recoge email
function handleEmail() {
  emailLink.href = `mailto:${data.inputMail.value}`;
  console.log(data.inputMail.value);
  console.log(emailLink.href);
}

data.inputName.addEventListener('keyup', generatePreviewCard);
data.inputJob.addEventListener('keyup', generatePreviewCard);
data.inputLinkdin.addEventListener('keyup', generatePreviewCard);
data.inputMail.addEventListener("change", handleEmail);

//phone
const inputPhone = document.querySelector('.contact__form--phone')
const iconPhone = document.querySelector('.linkPhone')

function generatePhone(){
    console.log ('funciona');
    iconPhone.href = `tel:+34${inputPhone.value}`;

}

inputPhone.addEventListener('keyup', generatePhone);

// inhablitar botón cuando se ha clicado
// y mostrar div de compartir tarjeta cuando se haya creado

const cardButton = document.querySelector("#button-card");
const shareDiv = document.querySelector("#share-card");

function unabling() {
  cardButton.classList.add("unabled");
  shareDiv.classList.remove("hidden");
}

cardButton.addEventListener("click", unabling);
