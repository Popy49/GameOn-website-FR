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

// div error creation
function errorMsg(field, message){
  var tempDiv = document.createElement('div');
  tempDiv.setAttribute("class", "errorMsg");
  tempDiv.innerHTML = message;
  field.insertAdjacentElement('afterend',tempDiv);
  // field.insertAdjacentHTML('afterend', message);
}

// div error clear
function errorMsgClear(){
  tab = document.querySelectorAll('.errorMsg')
  tab.forEach.call( tab, function( node ) {
    node.parentNode.removeChild( node );
});
}

// form validation
function validate()                                    
{ 
    errorMsgClear();

    var first = document.forms["reserve"]["first"];               
    var last = document.forms["reserve"]["last"];    
    var email = document.forms["reserve"]["email"];  
    var birthdate =  document.forms["reserve"]["birthdate"];  
    var quantity = document.forms["reserve"]["quantity"];  
    var location = document.forms["reserve"]["location"];  
    var checkbox1 = document.forms["reserve"]["checkbox1"];  
    var dateDay = new Date().toISOString().split('T')[0];

    if (first.value.length < 2)                                  
    { 
        errorMsg(first, 'Veuillez entrer 2 caractères ou plus pour le champ du nom');
        first.focus(); 
        return false; 
    } 
    if (last.value.length < 2)                                  
    { 
        errorMsg(last, 'Veuillez entrer 2 caractères ou plus pour le champ du nom');
        last.focus(); 
        return false; 
    } 
    if (email.value == "" || email.value.indexOf("@", 0) < 0 || email.value.indexOf(".", 0) < 0)                                   
    { 
      errorMsg(email, 'Vous devez entrer une adresse email valide');
      email.focus(); 
      return false; 
    } 

    if (isNaN(quantity.value))                                  
    { 
        errorMsg(quantity, 'Veuillez entrer un nombre');
        quantity.focus(); 
        return false; 
    }
    
    if (birthdate.value == '' ||  dateDay < birthdate.value)                                  
    { 
        errorMsg(birthdate, 'Veuillez entrer votre date de naissance');
        birthdate.focus(); 
        return false; 
    } 

    if (location.value == "")                               
    { 
        var field = document.getElementById('locate');
        errorMsg(field, 'Vous devez choisir une option');
        field.focus(); 
        return false; 
    }        
   

    if (!checkbox1.checked)                  
    { 
        errorMsg(checkbox1, 'Vous devez vérifier que vous acceptez les termes et conditions');
        checkbox1.focus(); 
        return false; 
    } 
    
    return true; 
}