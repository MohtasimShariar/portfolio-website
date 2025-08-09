// Show menu mobile
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

// Open menu
if(navToggle){
  navToggle.addEventListener('click', () =>{
    navMenu.classList.add('show-menu')
  })
}

// Close menu
if(navClose){
  navClose.addEventListener('click', () =>{
    navMenu.classList.remove('show-menu')
  })
}

// Remove menu on link click (mobile)
const navLinks = document.querySelectorAll('.nav__link')

navLinks.forEach(n => n.addEventListener('click', () =>{
  navMenu.classList.remove('show-menu')
}))

// Scroll active link
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
  const scrollY = window.pageYOffset

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 70,
          sectionId = current.getAttribute('id'),
          navLink = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      navLink.classList.add('active-link')
    }else{
      navLink.classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)

// Typed effect
const typedText = document.getElementById('typed');
const words = ['Full Stack Developer', 'Web Designer', 'Tech Enthusiast', 'Open Source Contributor'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 120;
let erasingSpeed = 60;
let delayBetweenWords = 1800;

function type() {
  const currentWord = words[wordIndex];
  if (!isDeleting) {
    typedText.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(type, delayBetweenWords);
      return;
    }
  } else {
    typedText.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }
  setTimeout(type, isDeleting ? erasingSpeed : typingSpeed);
}

document.addEventListener('DOMContentLoaded', () => {
  if(words.length) setTimeout(type, delayBetweenWords);
});

// Optional: Change header background on scroll for better readability
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if(window.scrollY > 50) {
    header.style.background = 'rgba(18, 18, 18, 0.95)';
    header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.9)';
  } else {
    header.style.background = 'rgba(18, 18, 18, 0.8)';
    header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.7)';
  }
});
