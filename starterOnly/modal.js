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
  formData[i].setAttribute("data-error", message);
  formData[i].setAttribute("data-error-visible", "true");
}

// error message clear
function errorMsgClear(){
  for (var i=0; i<(formData.length-2); i++){
  formData[i].setAttribute("data-error-visible", "false");
  }
}


// Check all form parameters 
function checking() {
  var x=0;
  var location = document.forms["reserve"]["location"];
  var checkbox1 = document.forms["reserve"]["checkbox1"];  

  for (var i=0; i<(formData.length-2); i++){
    var expression;
    var message;
    switch (formData[i].childNodes[4].id){
      case 'first':
      case 'last':
        expression = /^[A-Za-z\é\è\ê\-]{2,}$/;
        message= 'Veuillez entrer 2 caractères ou plus pour le champ du nom';
        break;
      case 'email':
        expression = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        message= 'Vous devez entrer une adresse email valide';
        break;
      case 'birthdate':
        expression = /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/;
        message= 'Veuillez entrer votre date de naissance';
        break;
      case 'quantity':
        expression = /^[1-9]+$/;
        message= 'Veuillez entrer un nombre';
        break;
      default:
        break;
    }
      
    if(!expression.test(formData[i].childNodes[4].value)) {
      errorMsg(i, message)
      x++;
    } 

    if (location.value == "")                               
    { 
        errorMsg(5, 'Vous devez choisir une option');
        x++;
    } 

    if (!checkbox1.checked)                  
    { 
        errorMsg(6, 'Vous devez vérifier que vous acceptez les termes et conditions');
        x++;
    } 

  }
  return x;
};

// Ending message valid form
function endingPopUp() {
  var endMsg = document.querySelectorAll('.modal-body');
  endMsg[0].innerHTML="<div class='flex'><div class='endMsg'>Merci pour votre inscription</div><button onClick=closeModal() class='btn-submit'>Fermer</button></div>";
}


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