function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));


// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// error message creation
function errorMsg(i, message){
  i.parentElement.setAttribute("data-error", message);
  i.parentElement.setAttribute("data-error-visible", "true");
  i.setAttribute("data-error", "true");
}

// error message clear
function errorMsgClear(){
  for (var i=0; i<(formData.length); i++){
  formData[i].setAttribute("data-error-visible", "false");
  }
  for (var j=0;  j<(formData.length-2); j++){
      formData[j].childNodes[4].setAttribute("data-error", "false");
  }
}

// Ending message valid form
function endingPopUp() {
  var endMsg = document.querySelectorAll('.modal-body');
  endMsg[0].innerHTML="<div class='flex'><div class='endMsg'>Merci pour votre inscription</div><button onClick=closeModal() class='btn-submit'>Fermer</button></div>";
}


// class for inputs
class Field {
  constructor(selector, regex, message) {
    this.selector = selector;
    this.regex = regex;
    this.message = message;
  }
}

// Inputs creation
const firstField = new Field(
  document.forms["reserve"]["first"],
  /^[A-Za-z\é\è\ê\-]{2,}$/,
  'Veuillez entrer 2 caractères littéraux ou plus pour le champ du prénom, sans caractères spéciaux'
  );


const emailField = new Field(
  document.forms["reserve"]["email"],
  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  'Vous devez entrer une adresse email valide'
);

const lastField = new Field(
  document.forms["reserve"]["last"],
  /^([A-Za-z\é\è\ê\-]{2,})+([A-Za-z\é\è\ê\-\ ]*)+([A-Za-z\é\è\ê\-]{2,})$/,
  'Veuillez entrer 2 caractères littéraux ou plus pour le champ du nom, sans caractères spéciaux'
);

const birthdateField = new Field(
  document.forms["reserve"]["birthdate"],
  /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/,
  'Veuillez entrer votre date de naissance'
  );

const quantityField = new Field(
  document.forms["reserve"]["quantity"],
  /^[1-9]+$/,
  'Veuillez entrer un nombre'
);


// Cheking all parameters of inputs
function checking() {
  var fields = [firstField, lastField, emailField, birthdateField, quantityField]
  var location = document.forms["reserve"]["location"];
  var checkbox1 = document.forms["reserve"]["checkbox1"];  
  var x=0;
  for (var i=0; i<fields.length; i++){
      // formData[i].childNodes[4].setAttribute("data-error", "false");  
    if(!fields[i].regex.test(fields[i].selector.value)) {
      errorMsg(fields[i].selector, fields[i].message);
      x++;
    } 
  }
  if (location.value == "")                               
  { 
      errorMsg(document.forms["reserve"]["location1"], 'Vous devez choisir une option');
      x++;
  } 

  if (!checkbox1.checked)                  
  { 
      errorMsg(checkbox1, 'Vous devez vérifier que vous acceptez les termes et conditions');
      x++;
  } 
  return x;
};

// form validation
function validate()                                    
{ 
  errorMsgClear();
  var x = checking();
  checking();
  if(x>0){
    return false;
  }
  endingPopUp();
  return true; 
}