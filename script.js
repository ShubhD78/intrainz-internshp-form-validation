const form = document.getElementById('form');
const username = document.getElementById('username');
const mobileNum = document.getElementById('mobile')
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showError(input,message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    
}

// check password
function checkPassword(pass){
    if(pass === "password" || pass === username){
        showError(pass , 'invalid passwoed');
    }
}

// function password match
function checkPasswordMatch(input1, input2){
    if(input1.value !== input2.value){
        showError(input2,'Password doesn\'t Matched ')
    }
}



// function isValidEmail(email){
//     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
//     if (email.indexOf("@") === -1) {
//         showError(email,'Email is not valid');
//     }

//     if(re.test(String(email.value).toLowerCase())){
//        showSuccess(email);
//     }else{
//         showError(email,'Email is not valid');
//     }
    
// }

function isValidEmail(x) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
        if (x.indexOf("@") === -1) {
        showError(x,'Email is not valid');
    }

    else if (!re.test(String(x).toLowerCase())) {
        showError(x, 'Email is not valid');
        
    }

    showSuccess(x);
    
}


// check mobile number
function isValidMobile(mobileNum) {
    // Remove leading zeros from the mobile number
    mobileNum = mobileNum.replace(/^0+/, '');

    // Check if the mobile number is a valid 10-digit number
    var isValid = /^\d{10}$/.test(mobileNum);

    // Show error message if the mobile number is "0123456789"
    if (mobileNum !== "0123456789" && mobileNum !== "1234567890" && mobileNum !== "123456789") {
        showError(mobileNum);
    }else{
        showSuccess(mobileNum);
    }
}



// check required field
function checkRequired(inputArr){
  inputArr.forEach(input => {
       if(input.value.trim() === ''){
           showError(input,`${getFieldName(input)} is required`)
       }else{
           showSuccess(input);
       }
  });
}

// Get field Name
 function getFieldName(input){
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
 }

 // check input length
 function checkLength(input,min,max){
     if(input.value.length<min){
         showError(input,`${getFieldName(input)} must be atleast ${min} characters`)
     }else if(input.value.length>max){
        showError(input,`${getFieldName(input)} must not exceed ${max} characters`)
     }else{
         showSuccess(input);
     }
 }

// Event Listeners
form.addEventListener('submit',(e)=>{
    e.preventDefault();
   
    checkRequired([username,email,password,password2]);
     checkLength(username,6, 15);
     checkLength(password,6, 25);
     checkLength(mobileNum,10,10);
     isValidMobile(mobileNum);
     isValidEmail(email);
     checkPasswordMatch(password,password2);
});
