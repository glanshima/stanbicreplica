const cancelRecovery = document.querySelector('#pass_recovery-cancel');
const btnsBox = document.querySelector('.btns.pass_recovery');
const inputContainer = document.querySelectorAll('.input_container');
const passRecovery_stepOne = document.querySelector('.step_one');
const passRecovery_stepTwo = document.querySelector('.step_two');
const nextBtn_passRecovery = document.querySelector('.pass_recovery-next');
const backBtn1_passRecovery = document.querySelector('.pass_recover-back-1');
const progressStep = document.querySelectorAll('.progress-step');
const progress_stepOne = document.querySelector('.step1');
const progress_stepTwo = document.querySelector('.step2');
const progress_stepThree = document.querySelector('.step3');
const progress_textOne = document.querySelector('.step_title_text.step1');
const progress_textTwo = document.querySelector('.step_title_text.step2');
const progress_textThree = document.querySelector('.step_title_text.step3');
const progress_box1 = document.querySelector('.box1');
const progress_box2 = document.querySelector('.box2');
const progress_box3 = document.querySelector('.box3');
const btns = document.querySelectorAll('.btn');

btns.forEach(btn => {
    btn.addEventListener('click', () => {

        if (btn.classList.contains('pass_recovery-next1')) {
            debitCardDetails();
        }
        else if (btn.classList.contains('pass_recover-cancel')) {
            window.location.href = "/index.html"
        }
        else if (btn.classList.contains('pass_recovery-next2')) {
            confirmOTP();
        }
        else if (btn.classList.contains('pass_recover-back-1')) {
            IDDetails();
        }
        else if (btn.classList.contains('OTP_cancel')) {
            window.location.href = "/index.html"
        }
    })
})
/* cancelRecovery.addEventListener('click', () => {
    window.location.href = "/index.html"
}) */

/* nextBtn_passRecovery.addEventListener('click', debitCardDetails) */

function debitCardDetails() {
    /* passRecovery_stepOne.classList.add('out'); */
    inputContainer.forEach(inputCon => {
        if (inputCon.classList.contains('step_one')) {
            inputCon.style.display = "none";
            inputCon.classList.remove('active');
            progress_textOne.classList.remove('active');
            progress_textTwo.classList.add('active');
            progress_box1.classList.remove('active');

        } else if (inputCon.classList.contains('step_two')) {
            inputCon.style.display = "flex";
            inputCon.classList.add('active');
            progress_box2.classList.add('active');
            progress_box1.classList.remove('active')
        }
    });

    /* passRecovery_stepOne.style.display = "none" */
    /* passRecovery_stepTwo.style.display = "flex"; */
    progress_stepOne.classList.remove('active');
    progress_stepTwo.classList.add('active');

    progressStep.forEach(step => {
        if (step.classList.contains('step1')) {
            step.classList.add('edited');
        } else {
            step.classList.remove('edited')
        }
    })

}
function IDDetails() {
    passRecovery_stepOne.style.cssText = "display:flex";
    passRecovery_stepTwo.style.display = "none";
    progress_stepOne.classList.add('active')
    progress_stepTwo.classList.remove('active');
    progress_textOne.classList.add('active');
    progress_textTwo.classList.remove('active');
    progress_box1.classList.add('active');
    progress_box2.classList.remove('active');
    progressStep.forEach(step => {
        if (step.classList.contains('step1')) {
            step.classList.remove('edited');

        } else {
            step.classList.add('edited')
        }
    })
}
/* backBtn1_passRecovery.addEventListener('click', IDDetails) */




/* Inputs focus and blur events */

const user_idInput = document.querySelector('.user_user_id-input');
const linked_AccInput = document.querySelector('.user_account-input');
const user_idLabel = document.querySelector('.ibank_ID_label');
const user_ID_inputFieldID = document.querySelector('.input_field.ibanking_ID');
const linkedAcct_inputFieldID = document.querySelector('.input_field.linked_account');
const bankID_labelText = document.querySelector('.label-txt-pass-recovery.ibank_ID');
const LinkedAC_labelText = document.querySelector('.label-txt-pass-recovery.ibank_ACNUM');
const linked_AcctLabel = document.querySelector('.ibank_ACNUM_label');


/*  ID input */
user_idInput.addEventListener('focus', (e) => {
    user_idLabel.classList.add('focus');
    user_idInput.classList.add('focus')
    user_ID_inputFieldID.classList.add("first-focus")
    bankID_labelText.classList.add("first_focus-color");
    user_idLabel.closest('div > label').lastChild.style.color = "#ff0000b0";

})
user_idInput.addEventListener('blur', () => {
    user_idLabel.classList.remove('focus');
    user_idInput.classList.remove('focus');
    user_ID_inputFieldID.classList.remove("first-focus")
    if (user_idInput.value == "") {
        user_ID_inputFieldID.style.cssText = 'border-bottom: 2px solid #ff0000b0;';
        bankID_labelText.style.cssText = 'color: #ff0000b0;';
        /* userIDLabelTxt.style.cssText ='color: #ff0000b0;'; */
    } else {
        user_ID_inputFieldID.style.cssText = 'inherit';
        bankID_labelText.style.cssText = 'inherit';
        user_idLabel.classList.add('focus');
        bankID_labelText.classList.remove("first_focus-color");
        user_idLabel.closest('div > label').lastChild.style.color = "inherit";
    }
})

/* linked Account Input */
linked_AccInput.addEventListener('focus', (e) => {
    linked_AcctLabel.classList.add('focus');
    linked_AccInput.classList.add('focus');
    linkedAcct_inputFieldID.classList.add("first-focus")
    LinkedAC_labelText.classList.add("first_focus-color")
    linked_AcctLabel.closest('div > label').lastChild.style.color = "#ff0000b0";
})
linked_AccInput.addEventListener('blur', () => {
    linked_AcctLabel.classList.remove('focus')
    linked_AccInput.classList.remove('focus')

    if (linked_AccInput.value == "") {
        linkedAcct_inputFieldID.classList.remove("first-focus")
        linkedAcct_inputFieldID.style.cssText = 'border-bottom: 2px solid #ff0000b0;';
        LinkedAC_labelText.style.cssText = 'color: #ff0000b0;';

    } else {
        linkedAcct_inputFieldID.style.cssText = 'inherit';
        LinkedAC_labelText.style.cssText = 'inherit';
        linked_AcctLabel.classList.add('focus')
        linkedAcct_inputFieldID.classList.remove('first-focus');
        LinkedAC_labelText.classList.remove("first_focus-color");
        linked_AcctLabel.closest('div > label').style.color = "inherit";
    }
})



/* STEP TWO */



const cardPinLabel = document.querySelector('.debitCard_Pin_label');
const debitCardPinInput_Field = document.querySelector('.input_field.debitCard_Pin');
const cardSerialNOInput_Field = document.querySelector('.input_field.cardSerialNo');
const debitCardPinInput = document.querySelector('.debitCard_Pin-input');
const debitSerialNOInput = document.querySelector('.cardSerialNO-input ');
const cardNumberLabel = document.querySelector('.cardSNo_label');
const cardNumberLabel_text = document.querySelector('.label-txt-debitCardDetails.cardNo');
const cardPinLabel_text = document.querySelector('.label-txt-debitCardDetails.debitCard_Pin');

debitCardPinInput.addEventListener('focus', inputFocus);
function inputFocus() {
    cardPinLabel.classList.add('focus');
    debitCardPinInput.classList.add('focus');
    debitCardPinInput_Field.classList.add("first-focus")
    cardPinLabel_text.classList.add("first_focus-color")
    cardPinLabel.closest('div > label').lastChild.style.color = "#ff0000b0";
}
debitCardPinInput.addEventListener('blur', InputBlur);

function InputBlur() {
    cardPinLabel.classList.remove('focus')
    debitCardPinInput.classList.remove('focus')

    if (debitCardPinInput.value == "") {
        debitCardPinInput_Field.classList.remove("first-focus")
        debitCardPinInput_Field.style.cssText = 'border-bottom: 2px solid #ff0000b0;';
        cardPinLabel_text.style.cssText = 'color: #ff0000b0;';

    } else {
        debitCardPinInput_Field.style.cssText = 'inherit';
        cardPinLabel_text.style.cssText = 'inherit';
        cardPinLabel.classList.add('focus')
        debitCardPinInput_Field.classList.remove('first-focus');
        cardPinLabel_text.classList.remove("first_focus-color");
        cardPinLabel.closest('div > label').style.color = "inherit";
    }
}
debitSerialNOInput.addEventListener('focus', cardSerialNOinputFocus);
function cardSerialNOinputFocus() {
    cardNumberLabel.classList.add('focus');
    debitSerialNOInput.classList.add('focus');
    cardSerialNOInput_Field.classList.add("first-focus")
    cardNumberLabel_text.classList.add("first_focus-color")
    cardNumberLabel.closest('div > label').lastChild.style.color = "#ff0000b0";
}
debitSerialNOInput.addEventListener('blur', cardSerialNOInputBlur);

function cardSerialNOInputBlur() {
    cardNumberLabel.classList.remove('focus')
    debitSerialNOInput.classList.remove('focus')

    if (debitSerialNOInput.value == "") {
        cardSerialNOInput_Field.classList.remove("first-focus")
        cardSerialNOInput_Field.style.cssText = 'border-bottom: 2px solid #ff0000b0;';
        cardNumberLabel_text.style.cssText = 'color: #ff0000b0;';

    } else {
        cardSerialNOInput_Field.style.cssText = 'inherit';
        cardNumberLabel_text.style.cssText = 'inherit';
        cardNumberLabel.classList.add('focus')
        cardSerialNOInput_Field.classList.remove('first-focus');
        cardNumberLabel_text.classList.remove("first_focus-color");
        cardNumberLabel.closest('div > label').style.color = "inherit";
    }
}

function confirmOTP() {
    /* passRecovery_stepOne.classList.add('out'); */
    inputContainer.forEach(inputCon => {
        if (inputCon.classList.contains('step_two')) {
            inputCon.style.display = "none";
            inputCon.classList.remove('active');
            progress_textOne.classList.remove('active');
            progress_textTwo.classList.add('active');
            progress_box2.classList.remove('active');

        } else if (inputCon.classList.contains('step_three')) {
            inputCon.style.display = "flex";
            inputCon.classList.add('active');
            progress_box3.classList.add('active');
            progress_box2.classList.remove('active')
        }

    });

    /* passRecovery_stepOne.style.display = "none" */
    /* passRecovery_stepTwo.style.display = "flex"; */
    progress_stepTwo.classList.remove('active');
    progress_stepThree.classList.add('active');

    progressStep.forEach(step => {
        if (!step.classList.contains('active')) {
            step.classList.add('edited');
        }
    })

}


/* STEP THREE */


const OtpLabel = document.querySelector('.label.OTP');
const otpInput_Field = document.querySelector('.input_field.OT_Pin');
const otp_PinInput = document.querySelector('.OTP_Code-input');
const OTPLabel_text = document.querySelector('.OTP_Code_label');



otp_PinInput.addEventListener('focus', otpInputFocus);
function otpInputFocus() {

    OtpLabel.classList.add('focus');
    otp_PinInput.classList.add('focus');
    otpInput_Field.classList.add("first-focus")
    OTPLabel_text.classList.add("first_focus-color")
    OtpLabel.closest('div > label').lastChild.style.color = "#ff0000b0";
}


otp_PinInput.addEventListener('blur', otpInputBlur);

function otpInputBlur() {
    OtpLabel.classList.remove('focus')
    otp_PinInput.classList.remove('focus')

    if (otp_PinInput.value == "") {
        otpInput_Field.classList.remove("first-focus");
        otpInput_Field.style.cssText = 'border-bottom: 2px solid #ff0000b0;';
        OTPLabel_text.style.cssText = 'color: #ff0000b0;';
    } else {
        otpInput_Field.style.cssText = 'inherit';
        OTPLabel_text.style.cssText = 'inherit';
        OtpLabel.classList.add('focus')
        otpInput_Field.classList.remove('first-focus');
        OTPLabel_text.classList.remove("first_focus-color");
        OtpLabel.closest('div > label').style.color = "inherit";
    }
}
/*
debitSerialNOInput.addEventListener('focus', cardSerialNOinputFocus);
function cardSerialNOinputFocus() {
    cardNumberLabel.classList.add('focus');
    debitSerialNOInput.classList.add('focus');
    cardSerialNOInput_Field.classList.add("first-focus")
    cardNumberLabel_text.classList.add("first_focus-color")
    cardNumberLabel.closest('div > label').lastChild.style.color = "#ff0000b0";
}
debitSerialNOInput.addEventListener('blur', cardSerialNOInputBlur);

function cardSerialNOInputBlur() {
    cardNumberLabel.classList.remove('focus')
    debitSerialNOInput.classList.remove('focus')

    if (debitSerialNOInput.value == "") {
        cardSerialNOInput_Field.classList.remove("first-focus")
        cardSerialNOInput_Field.style.cssText = 'border-bottom: 2px solid #ff0000b0;';
        cardNumberLabel_text.style.cssText = 'color: #ff0000b0;';

    } else {
        cardSerialNOInput_Field.style.cssText = 'inherit';
        cardNumberLabel_text.style.cssText = 'inherit';
        cardNumberLabel.classList.add('focus')
        cardSerialNOInput_Field.classList.remove('first-focus');
        cardNumberLabel_text.classList.remove("first_focus-color");
        cardNumberLabel.closest('div > label').style.color = "inherit";
    }
}

function confirmOTP() { 
    inputContainer.forEach(inputCon => {
        if (inputCon.classList.contains('step_two')) {
            inputCon.style.display = "none";
            inputCon.classList.remove('active');
            progress_textOne.classList.remove('active');
            progress_textTwo.classList.add('active');
            progress_box2.classList.remove('active');

        } else if (inputCon.classList.contains('step_three')) {
            inputCon.style.display = "flex";
            inputCon.classList.add('active');
            progress_box3.classList.add('active');
            progress_box2.classList.remove('active')
        }

    });

   
    progress_stepTwo.classList.remove('active');
    progress_stepThree.classList.add('active');

    progressStep.forEach(step => {
        if (!step.classList.contains('active')) {
            step.classList.add('edited');
        }
    })

}
*/
