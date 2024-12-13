
let userName = document.getElementById("name")
let userEmail = document.getElementById("email")
let userPassword = document.getElementById("password")
let signUp = document.getElementById("signUp")
let allUsers = []

function creatAccount(){
    let user = {
        uName : userName.value,
        uEmail : userEmail.value,
        uPassword : userPassword.value
    }
    
    allUsers.push(user)
    localStorage.setItem("allusers",JSON.stringify(allUsers))
    if (validation(userName)&validation(userEmail)&validation(userPassword)) {
        window.location = "index.html";
        
    }   
    clearInput()
}
function clearInput(){
    userName.value = null
    userEmail.value = null
    userPassword.value = null
}

function validation(e){
    let regex = {
        name : /^[A-Z][a-z]{2,10}$/,
        email : /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        password : /^[A-Z].{2,10}$/
    }
    if(regex[e.id].test(e.value)){
        e.classList.add("is-valid")
        e.classList.remove("is-invalid")
        return true
    }
    else{
        e.classList.remove("is-valid")
        e.classList.add("is-invalid")
        return false
    }
    
}

