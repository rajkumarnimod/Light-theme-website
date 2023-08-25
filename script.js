let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

// loader aniumation code ////////////////////////
var la = gsap.timeline(); 
 
la.to("#loader_t, #loader_r, #loader_b, #loader_l",{
    top:"-100vh",
    delay:0.7,
    duration:0.5,
    stagger:0.2
})

var nb = gsap.timeline();
nb.from(".flex h3, .navbar",{
    y:-100,
    duration:1,
    delay:1.5,
    opacity:1,
    stagger:0.2
})

var tl = gsap.timeline();
tl.from(".hero_left_text h2, .hero_left_text h3, .hero_left_text p ,.hero_left_text i",{
    x:-100,
    duration:1,
    delay:2.5,
    opacity:0,
    stagger:0.3
})


gsap.from(".about .about_content",{
    scale:0,
    delay:1,
    duration:2,
   scrollTrigger:{
          trigger:".about .about_content",
          scroller:"body",
          start:"top 120%",
          end:"top 100%",
          scrub:5
   }
})
gsap.from(".project .project_container, .project .project_content",{
    scale:0,
    delay:1,
    duration:2,
    stagger:0.2,
   scrollTrigger:{
          trigger:".project .project_container, .project .project_content",
          scroller:"body",
          start:"top 120%",
          end:"top 100%",
          scrub:5
   }
})

gsap.from(".skills .heading, .skills h2, .skills .skills_content",{
    scale:0,
    delay:1,
    duration:2,
    stagger:0.2,
   scrollTrigger:{
          trigger:".skills .heading, .skills h2, .skills .skills_content",
          scroller:"body",
          start:"top 120%",
          end:"top 100%",
          scrub:5
   }
})

gsap.from(".contact h1, .contact p",{
    scale:0,
    delay:1,
    duration:2,
    stagger:0.2,
   scrollTrigger:{
          trigger:".contact h1, .contact p",
          scroller:"body",
          start:"top 120%",
          end:"top 100%",
          scrub:5
   }
})
////////////////////////////////// top scroll ////////////////////////////////////////// 
const button = document.querySelector('.btn');

const displayButton = () => {
  window.addEventListener('scroll', () => {
    console.log(window.scrollY);
  
    if (window.scrollY > 100) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  });
};

const scrollToTop = () => {
  button.addEventListener("click", () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    }); 
    console.log(event);
  });
};

displayButton();
scrollToTop();

