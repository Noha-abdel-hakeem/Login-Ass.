let signupName = document.querySelector('#signupName');
let signupEmail = document.querySelector('#signupEmail');
let signupPass = document.querySelector('#signupPass');
let signupBtn = document.querySelector('#signupBtn');
let linkLogin = document.querySelector('#linkLogin');
let linkCreatAccounts = document.querySelector('#linkCreatAccounts');
let login = document.querySelector('#login');
let createAccount = document.querySelector('#createAccount');
let formtext = document.querySelector('#formtext');
let loginBtn = document.querySelector('#loginBtn');
let signinEmail = document.querySelector('#signinEmail');
let signinPassword = document.querySelector('#signinPassword');
let formInputErrorMessage = document.querySelector('.formInputErrorMessage');
let homePage = document.querySelector('#homePage');
let formTitle = document.querySelector('.formTitle');
let nav = document.querySelector('.nav');
let logoutBtn = document.querySelector('.logoutBtn');
let successMes = document.querySelector('#successMes');
let dataArray =[];





signupBtn.addEventListener('click', function(){
    addUsers()
})
function addUsers(){
    var dataObj ={
        name : signupName.value ,
        email : signupEmail.value ,
        password : signupPass.value ,
    }
 dataArray.push(dataObj)
localStorage.setItem('uesrData', JSON.stringify(dataArray))
    clearData()

}

function clearData(){
    signupName.value = "";
    signupEmail.value = "";
    signupPass.value = "";
}



linkCreatAccounts.addEventListener('click', function(){
    login.classList.replace('d-block', 'd-none');
    createAccount.classList.replace('d-none', 'd-block');
})
linkLogin.addEventListener('click', function(){
createAccount.classList.replace('d-block', 'd-none');
login.classList.replace('d-none', 'd-block');

})


if(localStorage.getItem('uesrData')){
    signupBtn.addEventListener('click' , function(){
        if(signupName.value == "" || signupEmail.value == "" || signupPass.value == ""){
            swal("Sorry,You should fill the form!!");

        
        } else {
            validateDataSignup()
            //  successMes.classList.replace("d-none", "d-block")
            //  dataArray = JSON.parse(localStorage.getItem('uesrData'))
            //  login.classList.replace('d-block', 'd-none');
            //  createAccount.classList.replace('d-block', 'd-none');
            //  homePage.classList.replace('d-none' , 'd-block')
            //  nav.classList.replace('d-none' , 'd-block')
        }

    })
}else {
    swal("This email is exist");

}



 if(localStorage.getItem('uesrData')){
    loginBtn.addEventListener('click' , function(){
        if(signinEmail.value == "" || signinPassword.value == ""){
            swal("Sorry,You should fill the form!!")
        }else {
           
            validateData()

            
        }
    })
 }else {
    swal("This email not exist");
 }


logoutBtn.addEventListener('click', function(){
    login.classList.replace('d-none', 'd-block');
    homePage.classList.replace('d-block' , 'd-none')
    nav.classList.replace('d-block' , 'd-none')
    clearData()

})

function validateData(){
    var passRegex = /^[A-Za-z0-9]{8}$/
    var emailRegex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/
    if(emailRegex.test(signinEmail.value) && passRegex.test(signinPassword.value)){
        dataArray = JSON.parse(localStorage.getItem('uesrData'))
        login.classList.replace('d-block', 'd-none');
        createAccount.classList.replace('d-block', 'd-none');
        homePage.classList.replace('d-none' , 'd-block')
        nav.classList.replace('d-none' , 'd-block')   
     }else{
        swal("Sorry,Your data is incorrect!!")
    }
}
function validateDataSignup(){
    var nameRegex =/^[A-Z][a-zA_Z ]{6,12}$/
    var passRegex = /^[A-Za-z0-9]{8}$/
    var emailRegex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/
    if(emailRegex.test(signupEmail.value) && passRegex.test(signupPass.value) && nameRegex.test(signupName.value)){
        // successMes.classList.replace("d-none", "d-block")
console.log("yess");
}else{
    // alert('Sorry,Your data is incorrect!!')
    console.log("noo");
    }
}
