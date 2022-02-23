window.onload = function(){ 
    let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
};

let path = window.location.pathname;
if (path == "/") {
    var typed = new Typed('.typing-text', {
        strings : ['front end developer', 'web designer', 'web developer'],
        loop : true,
        typeSpeed : 150
    });
};


VanillaTilt.init(document.querySelectorAll('.tilt'),{
    max:25
});

};