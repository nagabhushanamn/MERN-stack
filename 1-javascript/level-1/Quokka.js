"use strict"

var email_pattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/

var user_email = 'nag@gmail.com'

if (email_pattern.test(user_email))
    console.log("👍")
else
    console.log("👎")
