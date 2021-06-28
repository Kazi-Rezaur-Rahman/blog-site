//toggle-menu
const body = document.querySelector('.body');
const header = document.querySelector('.header');
const burger = document.querySelector('.burger');
const line = document.querySelectorAll('.line');
const navUl = document.querySelector('.navUl');

var navBar = false;
burger.addEventListener('click',()=>{
  if(navBar === false){
    navUl.style.display = "flex";
    //navUl.style.transition = "1.5s";
    navBar = true;
  } else if(navBar === true){
    navUl.style.display = "none";
    //navUl.style.transition = "1.5s";
    navBar = false;
  }
})
//nav menu close on click
  /*navUl.addEventListener('click',()=>{
      navUl.style.display = "none";
    })

window.addEventListener('scroll',()=>{
  header.classList.toggle('sticky', window.scrollY > 0);
})*/


//smooth scroll
const links = document.querySelectorAll(".navUl a");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}


const about = document.querySelector(".btn a");


  about.addEventListener("click", (e)=>{
    e.preventDefault();
    const aboutSection = about.getAttribute("href");
    const offsetTopAbout = document.querySelector(aboutSection).offsetTop;

    scroll({
      top: offsetTopAbout,
      behavior: "smooth"
    });
  });




//nav-menu desktop resize solution
function desktopMenu(navMenu){
  if(navMenu.matches){
    navUl.style.display = "flex";
  }else{
    navUl.style.display = "none";
  }
}
var navMenu = window.matchMedia('(min-width: 769px)')
desktopMenu(navMenu)
navMenu.addListener(desktopMenu)





//about-scrolltrigger
gsap.registerPlugin(ScrollTrigger);
let tl = gsap.timeline({
  scrollTrigger:{
    trigger: '.about',
    pin: false,
    start: 'top top',
    end: 'bottom bottom',
    markers: true,
    snap: false,
    scrub: true
  }
});
tl.from('.about-left', {x: -1500, opacity:0,duration:1})
tl.to('.about-right', {opacity:1,duration:1})
//tl.to('.grid-heading', {opacity:1,duration:1, delay:3})


//list scorlltrigger
gsap.registerPlugin(ScrollTrigger);
let tline = gsap.timeline({
  scrollTrigger:{
    trigger: '.grid',
    pin: false,
    start: 'top top',
    end: 'center 30%',
    markers: true,
    //scrub: true,
    snap: false
  }
});
tline.from('.grid-heading', {opacity:0,duration:2, delay:1})


//list masonary grid display
var macy = Macy({
    container: '#macy-container',
    trueOrder: false,
    waitForImages: false,
    margin: 24,
    columns: 4,
    breakAt: {
        940: 3,
        650: 2,
        400: 1
    }
});
