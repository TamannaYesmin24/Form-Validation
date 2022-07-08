var username = document.getElementById("username")
var user_err = document.getElementById("err_name")

var email = document.getElementById("email")
var email_err = document.getElementById("err_mail")
var email_regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

var pass = document.getElementById("password")
var pass_err = document.getElementById("err_password")
var pass_regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/

var cpass = document.getElementById("cpassword")
var cpass_err = document.getElementById("err_cpassword")

var gender_msg = document.getElementById("msg")

function signin (){
    if(username.value == ""){
        user_err.innerHTML = "please enter your username"
        username.style.border = "1px solid red"
        username.focus()
        return false
    }
    else if(email.value == ""){
        email_err.innerHTML = "please enter your email"
        email.style.border = "1px solid red"
        email.focus()
        return false
    }
    else if(!email_regex.test(email.value)){
        email_err.innerHTML = "enter your valid email"
        email.style.border = "1px solid red"
        email.focus()
        return false
    }
    else if(pass.value == ""){
        pass_err.innerHTML = "please enter your password"
        pass.style.border = "1px solid red"
        pass.focus()
        return false
    }
    else if(!pass_regex.test(pass.value)){
        pass_err.innerHTML = "password need 8 character and also special character"
        pass.style.border = "1px solid red"
        pass.focus()
        return false
    }
    else if(pass.value != cpass.value){
        cpass_err.innerHTML = "password incorrect"
        cpass.style.border = "1px solid red"
        cpass.focus()
        return false
    }  
    // gender check  
    else if (gnder1.checked != true && gnder2.checked != true && gnder3.checked != true) {
        gender_msg.innerHTML = "You must select your gender!"
        gender_msg.style.color = "red"
        return false
    }
}

// show & hide start
function passhow(){
    if (pass.type == "password") {
        pass.type = "text"
        document.getElementById("eye").innerHTML = '<i class="fa-solid fa-eye"></i>'
    }
    else{
        pass.type = "password"
        document.getElementById("eye").innerHTML = '<i class="fa-solid fa-eye-slash"></i>'
    }
}
// show & hide end/

function valid(){
    if(username.value != ""){
        user_err.innerHTML = ""
        username.style.border = "2px solid green"
    }
}
username.addEventListener('blur',valid)

function valid1(){
    if(email.value != ""){
        email_err.innerHTML = ""
        email.style.border = "2px solid green"
    }
}
email.addEventListener('blur',valid1)

function valid2(){
    if(pass.value != ""){
        pass_err.innerHTML = ""
        pass.style.border = "2px solid green"
    }
}
pass.addEventListener('blur',valid2)

function valid3(){
    if(cpass.value != ""){
        cpass_err.innerHTML = ""
        cpass.style.border = "2px solid green"
    }
}
cpass.addEventListener('blur',valid3)