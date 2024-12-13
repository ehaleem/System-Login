let loginEmail = document.getElementById("loginEmail")
let loginPassword = document.getElementById("loginPassword")
let loginBtn = document.getElementById("loginBtn")
let arrUsers = JSON.parse(localStorage.getItem("allusers"))

loginBtn.addEventListener("click",function(){
    for (let i = 0; i < arrUsers.length; i++) {
        if (loginEmail.value === arrUsers[i].uEmail && loginPassword.value === arrUsers[i].uPassword) {
            location.href = "home.html"
            sessionStorage.setItem("nameUser",arrUsers[i].uName)
        }
        else{
            console.log("false");
        }
        
    }
})
