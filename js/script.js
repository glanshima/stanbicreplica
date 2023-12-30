/* Input variables */
const loginForm = document.querySelector('.user_inputs.login_page');
const userRegForm = document.querySelector('.user_registration_inputs');
const pageTitle = document.querySelector('.page_title');
const userID = document.querySelector('.user_id-input');
const userIDLabel = document.querySelector('.user_id-label');
const userIDLabelTxt = document.querySelector('.label-txt-usrID');
const passWordInput = document.querySelector('.user_password-input');
const passWordLabel = document.querySelector('.password-label');
const passWordLabelTxt = document.querySelector('.label-txt-pwd');
const inputFieldUserID = document.querySelector('.input_field.user_id');
const inputFieldPassword = document.querySelector('.input_field.user_password');
const inputBoxes = document.querySelectorAll('.input_box');
const loginBtn = document.querySelector('.login_btn');
const RequiredPass_asteric = document.querySelector('.asteric.pwd');
const RequiredID_asteric = document.querySelector('.asteric.uID');
const terms = document.querySelector('.terms');




/* Inputs focus and blur events */
/* user ID input */
userID.addEventListener('focus', (e) => {
    userIDLabel.classList.add('focus');
    inputFieldUserID.classList.add("first-focus")
    userIDLabelTxt.classList.add("first_focus-color");
    userIDLabel.closest('div > label').lastChild.style.color = "#ff0000b0";

})
userID.addEventListener('blur', () => {
    userIDLabel.classList.remove('focus');
    inputFieldUserID.classList.remove("first-focus")
    if (userID.value == "") {
        inputFieldUserID.style.cssText = 'border-bottom: 2px solid #ff0000b0;';
        userIDLabelTxt.style.cssText = 'color: #ff0000b0;';
        /* userIDLabelTxt.style.cssText ='color: #ff0000b0;'; */
    } else {
        inputFieldUserID.style.cssText = 'inherit';
        userIDLabelTxt.style.cssText = 'inherit';
        userIDLabel.classList.add('focus');
        userIDLabelTxt.classList.remove("first_focus-color");
        userIDLabel.closest('div > label').lastChild.style.color = "inherit";
    }
})

/* Password Input */
passWordInput.addEventListener('focus', (e) => {
    passWordLabel.classList.add('focus');
    passWordInput.classList.add('focus');
    inputFieldPassword.classList.add("first-focus")
    passWordLabelTxt.classList.add("first_focus-color")
    passWordLabel.closest('div > label').lastChild.style.color = "#ff0000b0";
})
passWordInput.addEventListener('blur', () => {
    passWordLabel.classList.remove('focus')
    passWordInput.classList.remove('focus')

    if (passWordInput.value == "") {
        inputFieldPassword.classList.remove("first-focus")
        inputFieldPassword.style.cssText = 'border-bottom: 2px solid #ff0000b0;';
        passWordLabelTxt.style.cssText = 'color: #ff0000b0;';

    } else {
        inputFieldPassword.style.cssText = 'inherit';
        passWordLabelTxt.style.cssText = 'inherit';
        passWordLabel.classList.add('focus')
        inputFieldPassword.classList.remove('first-focus');
        passWordLabelTxt.classList.remove("first_focus-color");
        passWordLabel.closest('div > label').style.color = "inherit";
    }
})


/* Show Password Icon */

const showPasswordIcon = document.querySelector('.fa.fa-eye');


showPasswordIcon.addEventListener('click', showPassword)

function showPassword() {
    if (showPasswordIcon.classList.contains('fa-eye')) {
        showPasswordIcon.classList.remove('fa-eye');
        showPasswordIcon.classList.add('fa-eye-slash');
        passWordInput.setAttribute('type', 'text');
    } else if (showPasswordIcon.classList.contains('fa-eye-slash')) {
        showPasswordIcon.classList.remove('fa-eye-slash');
        showPasswordIcon.classList.add('fa-eye');
        passWordInput.setAttribute('type', 'password');
    }


}



/* Registration page navigation */

const reg_input_field = document.querySelector(".user_reg_account-input");
const userIDLabel_Reg = document.querySelector('.user_acct-label');
const userIDLabelTxt_Reg = document.querySelector('.label-txt-usrAccount');
const inputFieldUserAccount = document.querySelector('.input_field_reg');
const registerUser = document.querySelector(".register_link");
const backBtn = document.querySelector(".usr_reg-back");
registerUser.addEventListener('click', userRegister);
backBtn.addEventListener('click', backToLogin);

function resetInput() {
    inputFieldUserAccount.style.cssText = 'inherit';
    userIDLabelTxt_Reg.style.cssText = 'inherit';
    RequiredID_asteric.style.color = "inherit";
    reg_input_field.value = "";
    userID.value = "";
    passWordInput.value = "";
    inputFieldUserAccount.classList.remove("first-focus")
    userIDLabelTxt_Reg.classList.remove("first_focus-color")
    userIDLabel_Reg.classList.remove('focus');
    passWordLabel.classList.remove('focus')
    passWordInput.classList.remove('focus')
    userIDLabel.classList.remove('focus');
}

reg_input_field.addEventListener('focus', () => {
    userIDLabel_Reg.classList.add('focus');
    inputFieldUserAccount.classList.add("first-focus");
    userIDLabelTxt_Reg.classList.add("first_focus-color");
    userIDLabel_Reg.closest('div > label').lastChild.style.color = "#ff0000b0";
    reg_input_field.classList.add('focus');
})
reg_input_field.addEventListener('blur', () => {
    userIDLabel_Reg.classList.remove('focus');
    inputFieldUserAccount.classList.remove("first-focus")
    userIDLabelTxt_Reg.classList.remove("first_focus-color");
    reg_input_field.classList.remove('focus');
    if (reg_input_field.value == "") {
        inputFieldUserAccount.style.cssText = 'border-bottom: 2px solid #ff0000b0;';
        userIDLabelTxt_Reg.style.cssText = 'color: #ff0000b0;';
    } else {
        userIDLabel_Reg.classList.add('focus');
        userIDLabelTxt_Reg.classList.remove("first_focus-color");
        userIDLabel_Reg.closest('div > label').lastChild.style.color = "inherit";
        userIDLabelTxt_Reg.style.cssText = 'inherit';
        inputFieldUserAccount.style.cssText = "inherit";
    }
})

function userRegister() {
    loginForm.classList.add('close_login_page');
    userRegForm.style.display = "flex";
    userIDLabel_Reg.classList.remove('focus');

    resetInput()
}
function backToLogin() {
    loginForm.classList.remove('close_login_page')
    userRegForm.style.display = "none";
    /* userID Reset */
    inputFieldUserID.style.cssText = 'inherit';
    userIDLabelTxt.style.cssText = 'inherit';
    userIDLabelTxt.classList.remove("first_focus-color");
    RequiredID_asteric.style.color = "inherit";
    /* Password Reset */
    inputFieldPassword.style.cssText = 'inherit';
    passWordLabelTxt.style.cssText = 'inherit';
    RequiredPass_asteric.style.color = "inherit";
    passWordLabelTxt.classList.remove("first_focus-color");

}



/* Terms and Conditions */
const readTerms = document.querySelector('.terms_conditions_link');
const overlay = document.querySelector('.terms');
const termsAndConditions = document.querySelector('.terms_and_conditions');
const close_Terms = document.querySelector('.close_icon');


readTerms.addEventListener('click', () => {
    showTerms();
})
close_Terms.addEventListener('click', () => {
    closeTerms();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeTerms()
    }

})


function showTerms() {
    /* overlay.style.display = 'flex';
    termsAndConditions.classList.add('show') */
    /* termsAndConditions.style.cssText = "transform: translateY(0px)"; */
    if (termsAndConditions.classList.contains('closed')) {
        termsAndConditions.classList.remove('closed');
        termsAndConditions.classList.add('show')
        overlay.style.display = 'flex';
        termsAndConditions.style.cssText = "animation:closeTerms .5s reverse;"
    } else {
        termsAndConditions.classList.add('show')
    }
}
function closeTerms() {
    if (termsAndConditions.classList.contains('show')) {
        termsAndConditions.classList.remove('show');
        termsAndConditions.classList.add('closed')
        overlay.style.display = 'none';
        termsAndConditions.style.cssText = "animation:showTerms .5s forwards;"
    } else {
        termsAndConditions.classList.add('closed');

    }


}


/* Reset Password */


/* login to accounts  */

const LoginBtn = document.querySelector('#acctLogin');

function loginToAccounts() {
    window.location.href = "./dashboard/accounts.html"
}

LoginBtn.addEventListener('click', loginToAccounts);

/* Log out  */

/* const logOut = document.querySelector('#showBVN');
console.log(logOut)
function logOutAccount() {
    window.location.href = "../index.html"
}
logOut.addEventListener('click', () => {
    alert('logged out')
}) */