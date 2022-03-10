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
  
  // // div error creation
  // function errorMsg(field, message){
  //   var tempDiv = document.createElement('div');
  //   tempDiv.setAttribute("class", "errorMsg");
  //   tempDiv.innerHTML = message;
  //   field.insertAdjacentElement('afterend',tempDiv);
  //   // field.insertAdjacentHTML('afterend', message);
  // }
  
  // div error creation
  function errorMsg(field, message){
    
    // var tempDiv = document.createElement('div');
    // tempDiv.setAttribute("class", "formData");
    // formData[0].after(message);
    formData[0].setAttribute("data-error", message);
    formData[0].setAttribute("data-error-visible", "true");
    // tempDiv.innerHTML = message;
    // field.insertAdjacentElement('afterend',tempDiv);
    
    // field.insertAdjacentHTML('afterend', message);
  }
  
  // div error clear
  function errorMsgClear(){
    tab = document.querySelectorAll('.errorMsg')
    tab.forEach.call( tab, function( node ) {
      node.parentNode.removeChild( node );
  });

  }
  
  // function isValidname(value) {
  //   return /^[A-Za-z\é\è\ê\-]{2,}$/.test(value);
  // }
  
  // function isValidmail(value) {
  //   return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
  // }
  
  
  // function isValidmaildate(value) {
  //   return /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/.test(value);
  // }
  
  // function isValidmaildate(value) {
  //   return /^[1-9]+$/.test(value);
  // }
  
  // function isValid(value) {
  //   switch (value) {
  //     case first:
  //       // if(!/^[A-Za-z\é\è\ê\-]{2,}$/.test(value.value)){
  //       //   errorMsg(value, 'Veuillez entrer 2 caractères ou plus pour le champ du nom');
  //       //   value.focus(); 
  //       //   console.log("lala");
  //       //   return /^[A-Za-z\é\è\ê\-]{2,}$/.test(value.value);
  //       // }
  //       errorMsg(value, 'Veuillez entrer 2 caractères ou plus pour le champ du nom');
  //       value.focus(); 
  //       console.log("lala");
  //       return /^[A-Za-z\é\è\ê\-]{2,}$/.test(value.value);
  //       break;
  //     case email:
  //       errorMsg(email, 'Vous devez entrer une adresse email valide');
  //       return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value.value);
  //       break;
  //     case birthdate:
  //       errorMsg(birthdate, 'Veuillez entrer votre date de naissance');
  //       return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value.value);
  //       break;
  //     case quantity:
  //       errorMsg(quantity, 'Veuillez entrer un nombre');
  //       return /^[1-9]+$/.test(value);
  //     default:
  //       break;
  //   }
  // }
  
  
  
  
  // form validation
  function validate()                                    
  { 
      errorMsgClear();
  
  
  
      
      // var champs = {(document.forms["reserve"]["first"]) : /^[1-9]+$/, x : /^[A-Za-z\é\è\ê\-]{2,}$/}
  
      // for (const property in champs) {
      //   // if (!(champs[property].test(property.value)))                                  
      //   // { 
      //   //     // errorMsg(property, 'Veuillez entrer 2 caractères ou plus pour le champ du nom');
      //   //     // property.focus(); 
      //   //     // alert("lala");
      //   //     // return false; 
            
      //   // } 
      //   console.log(property)
      // }
      // champs.forEach(field => {
      //   // switch (field) {
      //   //   case first:
      //   //   case last:
      //   //     errorMsg(first, 'Veuillez entrer 2 caractères ou plus pour le champ du nom');
      //   //     return /^[A-Za-z\é\è\ê\-]{2,}$/.test(field.value);
      //   //     break;
      //   //   case email:
      //   //     /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(field.value);
      //   //     break;
      //   //   default:
      //   //     break;
      //   // }
  
      //   if (field == first || field == last){
      //       errorMsg(first, 'Veuillez entrer 2 caractères ou plus pour le champ du nom');
      //       return /^[A-Za-z\é\è\ê\-]{2,}$/.test(field.value);
      //   }
      //   return false;
      // });
  
      // if (!(isValid(first)))                                  
      // { 
      //     return false; 
      // } 
  
      // if (!(isValid(last)))                                  
      // { 
      //     return false; 
      // } 
  
      // if (!(isValid(first)) || !(isValid(last)) || !(isValid(email)) || !(isValid(birthdate)) || !(isValid(quantity)))                                  
      // { 
      //     return false; 
      // } 
  
      // var arr = [first, last]
  
      // for (var i in arr) {
      //   if (!(/^[A-Za-z\é\è\ê\-]{2,}$/.test(arr[i].value)))                                  
      //   { 
      //       errorMsg(arr[i], 'Veuillez entrer 2 caractères ou plus pour le champ du nom');
      //       arr[i].focus(); 
      //       return false; 
      //   } 
      // }
  
      // if (!(/^[A-Za-z\é\è\ê\-]{2,}$/.test(first.value)))                                  
      // { 
      //     errorMsg(first, 'Veuillez entrer 2 caractères ou plus pour le champ du nom');
      //     first.focus(); 
      //     return false; 
      // } 
  
      // if (!(/^[A-Za-z\é\è\ê\-]{2,}$/.test(last.value)))                                  
      // { 
      //     errorMsg(last, 'Veuillez entrer 2 caractères ou plus pour le champ du nom');
      //     last.focus(); 
      //     return false; 
      // } 
  
      // if (!(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value)))                                  
      // { 
      //     errorMsg(email, 'Vous devez entrer une adresse email valide');
      //     email.focus(); 
      //     return false; 
      // } 
  
      // if (!(expression.test(name.value)))                                  
      // { 
      //     errorMsg(name, message);
      //     name.focus(); 
      //     return false; 
      // } *
  
  
  
      var location = document.forms["reserve"]["location"];
      var checkbox1 = document.forms["reserve"]["checkbox1"];  


    const firstField = {
      name: document.forms["reserve"]["first"],
      expression: /^[A-Za-z\é\è\ê\-]{2,}$/,
      message: 'Veuillez entrer 2 caractères ou plus pour le champ du nom'
      };
    
    const emailField = {
      name: document.forms["reserve"]["email"],
      expression: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      message: 'Vous devez entrer une adresse email valide'
    };
  
    const lastField = {
      name: document.forms["reserve"]["last"],
      expression: /^[A-Za-z\é\è\ê\-]{2,}$/,
      message: 'Veuillez entrer 2 caractères ou plus pour le champ du nom'
      };
    
    const birthdateField = {
      name: document.forms["reserve"]["birthdate"],
      expression: /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/,
      message: 'Veuillez entrer votre date de naissance'
      };
  
    const quantityField = {
      name: document.forms["reserve"]["quantity"],
      expression: /^[1-9]+$/,
      message: 'Veuillez entrer un nombre'
      };
  
    function isValidate() {
  
      if (!(this.expression.test(this.name.value)))                                  
        { 
            errorMsg(this.name, this.message);
            this.name.focus();
            return false;
        } 
        return true;
    };
    emailField.isValidate = isValidate;
    firstField.isValidate = isValidate;
    lastField.isValidate = isValidate;
    birthdateField.isValidate = isValidate;
    quantityField.isValidate = isValidate;
  
  
  
  
    if (!firstField.isValidate() || !emailField.isValidate() || !lastField.isValidate() || !birthdateField.isValidate() || !quantityField.isValidate()){
      return false;
    }
  
  
  
  
  
      // if (first.value.length < 2)                                  
      // { 
      //     errorMsg(first, 'Veuillez entrer 2 caractères ou plus pour le champ du nom');
      //     first.focus(); 
      //     return false; 
          
      // } 
      // if (last.value.length < 2)                                  
      // { 
      //     errorMsg(last, 'Veuillez entrer 2 caractères ou plus pour le champ du nom');
      //     last.focus(); 
      //     return false; 
      // } 
      // if (email.value == "" || email.value.indexOf("@", 0) < 0 || email.value.indexOf(".", 0) < 0)                                   
      // { 
      //   errorMsg(email, 'Vous devez entrer une adresse email valide');
      //   email.focus(); 
      //   return false; 
      // } 
  
      // if (isNaN(quantity.value))                                  
      // { 
      //     errorMsg(quantity, 'Veuillez entrer un nombre');
      //     quantity.focus(); 
      //     return false; 
      // }
      
      // if (birthdate.value == '' ||  dateDay < birthdate.value)                                  
      // { 
      //     errorMsg(birthdate, 'Veuillez entrer votre date de naissance');
      //     birthdate.focus(); 
      //     return false; 
      // } 
  
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
      
      var endMsg = document.querySelectorAll('.modal-body');
      endMsg[0].innerHTML="<div class='flex'><div class='endMsg'>Merci pour votre inscription</div><button onClick=closeModal() class='btn-submit'>Fermer</button></div>"
      return true; 
  }