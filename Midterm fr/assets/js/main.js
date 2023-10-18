/* SHOW MENU */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click',() => {
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/* REMOVE MENU MOBILE */
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When click each nav__link, remove show-menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* CHANGE HEADER BACKGROUND */
const scrollHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >=50 ? header.classList.add('bg-header')
                      : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/*SCROLL SECTIONS ACTIVE LINK */
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }
    })

}
window.addEventListener('scroll', scrollActive)

/* SHOW SCROLL UP */
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/* SCROLL REVEAL */
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})
sr.reveal(`.home__data, .footer__content,.footer__logo,.footer__description,.valid`)
sr.reveal(`.home__tree-1`,{origin:'left', delay:800})
sr.reveal(`.home__tree-2`,{origin:'right', delay: 800})
sr.reveal(`.home__img`, {delay: 800})
sr.reveal(`.category__card, .items__card`, {interval: 100})
sr.reveal(`.about__img, .about__data, footer-tree-2`,{origin:'left'})
sr.reveal(`.party__images, .party__data`,{origin:'right'})

/* ALERT */
function addToCart() {
    var alertBox = document.createElement("div");
    alertBox.className = "alert";
    alertBox.textContent = "Added to cart";
    document.body.appendChild(alertBox);
    
    setTimeout(function() {
      document.body.removeChild(alertBox);
    }, 1100);
  }

/* THANK YOU CARD */
const popupLink = document.getElementById("popup-link");
const popupImage = document.getElementById("popup-image");

popupLink.addEventListener("click", function(event) {
  event.preventDefault();
  popupImage.style.display = "block";

  setTimeout(function() {
    popupImage.style.display = "none";
  }, 3000);
});