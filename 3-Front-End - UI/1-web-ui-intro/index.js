console.log("-index.js-")


//-----------------------------------------------------------
// javascript with DOM-api ( actual html-page in browser)
//-----------------------------------------------------------


let messageBox = document.getElementsByClassName('alert-info')[0];
let gmBtn = document.getElementsByClassName('btn-primary')[0];
let gnBtn = document.getElementsByClassName('btn-warning')[0];
let geBtn = document.getElementsByClassName('btn-danger')[0];
let reBtn = document.getElementsByClassName('btn-dark')[0];

let originalText = ""
gmBtn.addEventListener('click', event => {
    originalText = messageBox.innerHTML;
    messageBox.innerHTML = "good morning 🌺"
})
gnBtn.addEventListener('click', event => {
    messageBox.innerHTML = "good Noon 🌞"
})
geBtn.addEventListener('click', event => {
    messageBox.innerHTML = "good evening ⭐️"
})
reBtn.addEventListener('click', event => {
    messageBox.innerHTML = originalText
})



