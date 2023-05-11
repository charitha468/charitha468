
var firstError = document.getElementById('firstname-error');
var lastError = document.getElementById('lastname-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var passwordError = document.getElementById('password-error');
var addressError = document.getElementById('address-error');
var dateError = document.getElementById('date-error');
var serviceError = document.getElementById('service-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateFirst(){
  var first = document.getElementById('first-name').value;
   if(first.length == " " ){
      firstError.innerHTML = 'Name is required';
      return false;
   }
   if(!first.match(/^[A-Za-z]*$/)){
      firstError.innerHTML = 'write full name';
      return false;
   }
   firstError.innerHTML = '<h4>valid</h4>';
   return true;
}
function validateLast(){
  var last = document.getElementById('last-name').value;
   if(last.length == " " ){
      lastError.innerHTML = 'Name is required';
      return false;
   }
   if(!last.match(/^[A-Za-z]*$/)){
      lastError.innerHTML = 'write full name';
      return false;
   }
   lastError.innerHTML = '<h4>valid</h4>';
   return true;
}
function validatePhone(){
   var phone = document.getElementById('contact-phone').value;

   if(phone.length == " "){
      phoneError.innerHTML = 'phone number is required';
      return false;
   }
   
   if(!phone.match(/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/)){
   phoneError.innerHTML = 'Number invalid';
   return false;
}
phoneError.innerHTML='<h4>valid</h4>';
return true;
}
function validateEmail(){
  var email = document.getElementById('contact-email').value;

  if(email.length == " "){
     emailError.innerHTML = 'email is required';
     return false;
  }
  
  if(!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
  emailError.innerHTML = 'email invalid';
  return false;
}
emailError.innerHTML='<h4>valid</h4>';
return true;
}
function validatePassword(){
  var password = document.getElementById('contact-password').value;

  if(password.length == " "){
     passwordError.innerHTML = 'password required';
     return false;
  }
  
  if(!password.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/)){
  passwordError.innerHTML = 'password invalid';
  return false;
}
passwordError.innerHTML='<h4>valid</h4>';
return true;
}
function validateAddress(){
  var address = document.getElementById('contact-address').value;
   if(address.length == " "){
      addressError.innerHTML = 'address is required';
      return false;
   }
  if(!address.match(/((?:[\w+\s*-])+)[\,]\s+([a-zA-Z]+)[\,]\s+([0-9a-zA-Z]+)[\,]\s([0-9]{5})$/)){
      addressError.innerHTML = 'complete address';
      return false;
   }
   addressError.innerHTML = '<h4>valid</h4>';
   return true;
}
function validateDate(){
  var date = document.getElementById('checkinservice').value;

  if(!date.match(/^[0-1][0-9]-[0-3][0-9]-20[0-9]{2}$/)){
  dateError.innerHTML = 'Number invalid';
  return false;
}
dateError.innerHTML='<h4>valid</h4>';
return true;
}
function validateMessage(){
   var message = document.getElementById('contact-message').value;
   var required = 30;
   var left = required - message.length;

   if(left > 0){
       messageError.innerHTML= left + 'more characters required';
       return false;
   }
   messageError.innerHTML = '<h4>valid</h4>';
   return true;

}


function yourfunction(radioid)
{
if(radioid == 1)
{    
   	document.getElementById('hair').style.display = 'block';
    document.getElementById('makeup').style.display = 'none';
	document.getElementById('skincare').style.display = 'none';
 }
 else if(radioid == 2)
{  
	document.getElementById('skincare').style.display = 'none';
	document.getElementById('makeup').style.display = '';
    document.getElementById('hair').style.display = 'none';
}
 else if(radioid == 3)
{ 
	
	document.getElementById('skincare').style.display = '';
	document.getElementById('makeup').style.display = 'none';
    document.getElementById('hair').style.display = 'none';
}
}

function validateForm(){
   if(!validateFirst()){
    submitError.innerHTML='please fix errors to submit';

   }
   if(!validateLast()){
    submitError.innerHTML='please fix errors to submit';
   }
   
   if(!validateEmail()){
    submitError.innerHTML='please fix errors to submit';
   }
   if(!validatePhone()){
    submitError.innerHTML='please fix errors to submit';

   }
   
   if(!validateDate()){
    submitError.innerHTML='please fix errors to submit';
   
   }

   if(!validateMessage()){
    submitError.innerHTML='please fix errors to submit';
   }
   if(!validatePassword()){
    submitError.innerHTML='please fix errors to submit';
   }
   
   if(!validateAddress()){
    submitError.innerHTML='please fix errors to submit';
   }

   if( !validateDate() || !validateEmail() || !validateFirst() || !validateLast() || !validateMessage() || !validatePassword() || !validatePhone() || !validateAddress()){
    submitError.innerHTML='please fix errors to submit';
    return false;
   }
}
