"use strict";

// colapsar contneido formularios cuando tengamos otra opción abierta

// constantes del form.
const diseña = document.querySelector(".form-title-js");
const rellena = document.querySelector(".form-title2-js");
const comparte = document.querySelector(".form-title3-js");
let allInputs = document.querySelectorAll(".js-input");
const resetButton = document.querySelector(".preview__button");

//constantes tarjeta preview
const namePreview = document.querySelector(".name");
const jobPreview = document.querySelector(".profession");
const linkedinPreview = document.querySelector(".linkedin-js");
const githubPreview = document.querySelector(".github-js");
const emailLink = document.querySelector(".js-email");
const iconPhone = document.querySelector(".linkPhone");

const cardButton = document.querySelector("#button-card");
const shareDiv = document.querySelector("#share-card");

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

// funciones collapsables del formulario y giro de flecha
function handClickCollapsed(event) {
  event.currentTarget.parentNode.classList.toggle("collapsed");
  const arrow = event.currentTarget.querySelector(".js-arrow");
  arrow.classList.toggle("js-arrow-down");
}

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
  if (data.linkedin === "") {
    linkedinPreview.href = "";
  } else {
    linkedinPreview.href = data.linkedin;
  }
  if (data.github === "") {
    githubPreview.href = "";
  } else {
    githubPreview.href = data.github;
  }
  if (data.phoneNumber === "") {
    iconPhone.href = "";
  } else {
    iconPhone.href = `tel:+34${data.phoneNumber}`;
  }
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

// inhablitar botón cuando se ha clicado
// y mostrar div de compartir tarjeta cuando se haya creado

function unabling() {
  cardButton.classList.add("unabled");
  shareDiv.classList.remove("hidden");
}

// eventos para desplegar formularios
diseña.addEventListener("click", handClickCollapsed);
rellena.addEventListener("click", handClickCollapsed);
comparte.addEventListener("click", handClickCollapsed);

cardButton.addEventListener("click", unabling);
