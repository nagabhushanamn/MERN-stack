
console.log("-form-validtion-")

//---------------------------------------------------------------------
// validation on blur / focus out
//---------------------------------------------------------------------

/*

let emailField = document.querySelector('#email')
let emailFeedbackField = document.querySelector('#email-feedback')
emailField.addEventListener('blur', e => {
    // let value=emailField.value

    let value = e.target.value

    if (!value) {
        emailFeedbackField.innerText = "Email is required"
        return
    }

    let emailPattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
    if (!emailPattern.test(value)) {
        emailFeedbackField.innerText = "Email is invalid"
        return
    }
    emailFeedbackField.innerText = ""

})

let passwordField = document.querySelector('#password')
let passwordFeedbackField = document.querySelector('#password-feedback')
passwordField.addEventListener('blur', e => {
    // let value=emailField.value
    let value = e.target.value
    if (!value) {
        passwordFeedbackField.innerText = "Password is required"
        return
    }
    passwordFeedbackField.innerText = ""
})

*/


//---------------------------------------------------------------------
// validation on submit 
//---------------------------------------------------------------------

let loginForm=document.querySelector('form')
loginForm.addEventListener('submit',e=>{
    
    e.preventDefault()
    
    let emailField = document.querySelector('#email')
    let emailFeedbackField = document.querySelector('#email-feedback')

    let email = emailField.value

    if (!email) {
        emailFeedbackField.innerText = "Email is required"
        return
    }

    let emailPattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
    if (!emailPattern.test(email)) {
        emailFeedbackField.innerText = "Email is invalid"
        return
    }
    emailFeedbackField.innerText = ""

})