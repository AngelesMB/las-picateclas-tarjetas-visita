"use strict";

// colapsar contneido formularios cuando tengamos otra opción abierta

// constantes del form.
const diseña = document.querySelector(".form-title-js");
const rellena = document.querySelector(".form-title2-js");
const comparte = document.querySelector(".form-title3-js");
let allInputs = document.querySelectorAll(".js-input");
const resetButton = document.querySelector(".preview__button");
// Reiniciar formulario con reset button:
function resetForm (event){
  event.preventDefault();
  for (const eachInput of allInputs) {         
  if (event.currentTarget){ 
    eachInput.value = "";
   }
}}
resetButton.addEventListener('click', resetForm);
console.log('entra');


//constantes tarjeta preview
const namePreview = document.querySelector(".name");
const jobPreview = document.querySelector(".profession");
const linkedinPreview = document.querySelector(".linkedin-js");
const emailLink = document.querySelector(".js-email");

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
const data = {
  name: "",
  job: "",
  mailAddress: "",
  phoneNumber: "",
  linkedin: "",
  github: "",
  photo: "",
  palette: 1,
};

// función para actualizar tarjeta de preview con datos usuaria
function renderPreviewCard() {
  if (data.name === "") {
    namePreview.innerHTML = "Nombre y apellidos";
  } else {
    namePreview.innerHTML = data.name;
  }
  if (data.job === "") {
    jobPreview.innerHTML = "Profesión";
  } else {
    jobPreview.innerHTML = data.job;
  }
  if (data.mailAddress === "") {
    emailLink.href = "";
  } else {
    emailLink.href = `mailto:${data.mailAddress}`;
  }
  // phone linkedin github ¿?
}

// Función para recoger el valor de los inputs y volcar al objeto data
function getData(event) {
  // Recogemos el valor que escribe la usuaria
  const selectedInputValue = event.currentTarget.value;
  // Obtenemos el id del input clickado (name, job...)
  const selectedInputId = event.currentTarget.id;
  // Si la usuaria escribe en el input id name, vuelco el valor en el objeto data.name
  if (selectedInputId === "name") {
    data.name = selectedInputValue;
  } else if (selectedInputId === "job") {
    data.job = selectedInputValue;
  } else if (selectedInputId === "mailAddress") {
    data.mailAddress = selectedInputValue;
  } else if (selectedInputId === "phoneNumber") {
    data.phoneNumber = selectedInputValue;
  } else if (selectedInputId === "linkedin") {
    data.linkedin = selectedInputValue;
  } else if (selectedInputId === "github") {
    data.github = selectedInputValue;
  }
  // data[inputName] = inputValue
  console.log(data);
  renderPreviewCard();
}

for (const eachInput of allInputs) {
  eachInput.addEventListener("keyup", getData);
}

// data.inputName = document.querySelector(".contact__form--name");
// data.inputJob = document.querySelector(".contact__form--job");
// data.inputMail = document.querySelector(".contact__form--mail");
// data.inputPhone = document.querySelector(".contact__form--phone");
// data.inputLinkdin = document.querySelector(".contact__form--linkedin");

// function generatePreviewCard() {
//   if (data.inputName === ""){
//   nameTitle.innerHTML = 'Nombre Apellidos';
//   } else {

//     nameTitle.innerHTML = data.inputName.value;
//   }

//   // profession.innerHTML = data.inputJob.value;
//   // linkedinPreview.href = data.inputLinkdin.value;
//   console.log(data.inputName.value);

// }

// función recoge email
// function handleEmail() {
//   emailLink.href = `mailto:${data.inputMail.value}`;
//   console.log(data.inputMail.value);
//   console.log(emailLink.href);
// // }
// function handleEmail() {
//   emailLink.href = `mailto:${data.inputMail.value}`;
//   console.log(data.inputMail.value);
//   console.log(emailLink.href);
// }

// for (const eachInput of allInputs) {
//   eachInput.addEventListener("keyup", generatePreviewCard)
//   eachInput.value = ""
// }

// data.inputName.addEventListener("keyup", generatePreviewCard);
// data.inputJob.addEventListener("keyup", generatePreviewCard);
// data.inputLinkdin.addEventListener("keyup", generatePreviewCard);
// data.inputMail.addEventListener("change", handleEmail);

//phone
const inputPhone = document.querySelector(".contact__form--phone");
const iconPhone = document.querySelector(".linkPhone");

function generatePhone() {
  iconPhone.href = `tel:+34${inputPhone.value}`;
}

inputPhone.addEventListener("keyup", generatePhone);

// inhablitar botón cuando se ha clicado
// y mostrar div de compartir tarjeta cuando se haya creado

const cardButton = document.querySelector("#button-card");
const shareDiv = document.querySelector("#share-card");

function unabling() {
  cardButton.classList.add("unabled");
  shareDiv.classList.remove("hidden");
}

cardButton.addEventListener("click", unabling);
