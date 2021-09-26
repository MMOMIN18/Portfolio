/* const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById("nav__toggle");
    const nav = document.getElementById("nav-menu");

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        });
    }
}
showMenu('navToggle', 'nav-menu');  */

const navToggle = document.querySelector(".nav__toggle");

//console.log(navMenu.classList) 
const navLink = document.querySelectorAll(".nav__link");
const contactForm = document.querySelector('.contact_form')
console.log(contactForm)

let namee = document.getElementById('name')
let email = document.getElementById('email')
let subject = document.getElementById('subject')
let number = document.getElementById('number');
let message = document.getElementById('message');

contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    let formData = {
        name: namee.value,
        email: email.value,
        subject: subject.value,
        number: number.value,
        message: message.value

    }
    //console.log(formData);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/')
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.onload = function(){
        console.log(xhr.responseText);
        if(xhr.responseText == 'success'){
            alert('Email Sent');
            namee.value ='';
            email.value = '';
            subject.value = '';
            number.value = '';
            message.value = '';
        }else{
            alert('Something Went Wrong!')
        }        
    } 
    xhr.send(JSON.stringify(formData));
})


 navToggle.addEventListener('click', function(){
    const navMenu = document.querySelector(".nav__menu");
    navMenu.classList.toggle("show-menu");
    
});  

// Remove menu Mobile

function linkAction() { 
    const navMenu = document.getElementById("nav-menu")
    navMenu.classList.remove("show-menu");
    console.log("RAN TO STOP")
}
navLink.forEach(n => n.addEventListener('click',linkAction));

//Scroll Sections Active Link

const sections = document.querySelectorAll('section[id]');


function scrollActive(){
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        
        const sectionTop = current.offsetTop - 50;
        
        sectionId  = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionHeight + sectionTop){
             document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        }else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }

    });

}
window.addEventListener('scroll', scrollActive);

function scrollHeader(){
    const header = document.getElementById('header');
        if(this.scrollY >= 200) header.classList.add('scroll-header'); else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

//Show Scroll Top

function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    if(this.scrollY>=560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll');
}
window.addEventListener('scroll',scrollTop); 
