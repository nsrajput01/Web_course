
function toogleNav(){
    const navbar = document.getElementById('navLinks');
    if(navbar.classList.contains('show')){
        navbar.classList.remove('show');
    }else{
        navbar.classList.add('show');
    }
}
const currentURL = window.location.href;
const links = document.querySelectorAll(".navlink");
links.forEach((link) => {
    
    if(currentURL.includes(link.href)){
        link.classList.add("change");
    }
});
let mybutton = document.getElementById('back-to-top');
window.onscroll = function(){scrollFunction()};

function scrollFunction(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop>20){
        mybutton.style.display = "block";
    }else{
        mybutton.style.display = "none";
    }
}
mybutton.onclick = function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// document.getElementById('popupButton').addEventListener(
//     'click', function(){
//         var popup = document.getElementById('popup');
//         popup.style.display = 'flex';
//         setTimeout(function(){
//             popup.style.display = 'none';
//         }, 7000);
//     }
// );
// document.getElementById('popupButto').addEventListener(
//     'click', function(){
//         var popup = document.getElementById('popu');
//         popup.style.display = 'flex';
//         setTimeout(function(){
//             popup.style.display = 'none';
//         }, 7000);
//     }
// );
// document.getElementById('popupButt').addEventListener(
//     'click', function(){
//         var popup = document.getElementById('pop');
//         popup.style.display = 'flex';
//         setTimeout(function(){
//             popup.style.display = 'none';
//         }, 7000);
//     }
// );




const textElement = document.getElementById('text');
const text = "Welcome To Web Development Course";
let index = 0;

function type(){
    if (index<text.length){
        textElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 100);
    }
}
type();