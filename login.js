// login signup page

document.addEventListener('DOMContentLoaded',function(){
    var showSignupLink = document.getElementById('showSignup');
    var showLoginLink = document.getElementById('showlogin');
    var loginForm = document.getElementById('loginform');
    var SignupForm = document.getElementById('signupform');

    loginForm.classList.remove('hidden');
    SignupForm.classList.add('hidden');

    if(showSignupLink && showLoginLink && loginForm && SignupForm){
        showSignupLink.addEventListener('click', function(event){
            event.preventDefault();
            console.log('Signup link clicked')
            loginForm.classList.add('hidden');
            SignupForm.classList.remove('hidden');
        });
        showLoginLink.addEventListener('click', function(event){
            event.preventDefault();
            console.log('Login link clicked');
            SignupForm.classList.add('hidden');
            loginForm.classList.remove('hidden');
        });
    }else{
        console.error('one or more element are missing');
    }
});
// document.getElementById('showSignup').addEventListener('click', function(){
//     document.getElementById('loginform').classList.add('hidden');
//     document.getElementById('signupform').classList.remove('hidden');
// });
// document.getElementById('showlogin').addEventListener('click', function(){
//     document.getElementById('signupform').classList.add('hidden');
//     document.getElementById('loginform').classList.remove('hidden');
// });

