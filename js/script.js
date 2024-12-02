"use strict";
/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    /*==================== scroll sections active link ====================*/
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*==================== stiky navbar ====================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*==================== scroll reveal ====================*/
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-content, .heading, .subtitle', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
/*==================== typed js ====================*/
const typed = new Typed('.multiple-text', {
    strings: ['Technicien réseau', 'Technicien support', 'Développeur web'],
    typeSpeed: 100,
    backSpeed: 90,
    backDelay: 500,
    loop: true
});
/*==================== Day/night button ====================*/
const toggle = document.getElementById('toggle');

toggle.addEventListener('change', () => {
  if (toggle.checked === true) {
    document.documentElement.removeAttribute('data-theme');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
});
/*==================== popup ====================*/
// function PopUpPromo() {
//     Swal.fire({
//         titleText: "Offre limitée !",
//         confirmButtonText: "Decouvrir !",
//         html: "<p class=\"popup-text\">Popup texte !</p>",
//         timer: 10000,
//         timerProgressBar: true,
//         background: '#1f242d',
//         color: '#FFF',
//         icon: "info",
//         iconColor: '#A0E5AF',
//         width: '600',
//         padding: '50px',
//         showClass: {
//           popup: `
//             animate__animated
//             animate__fadeInLeft
//             animate__faster
//           `
//         },
//         hideClass: {
//           popup: `
//             animate__animated
//             animate__fadeOutRight
//             animate__faster
//           `
//         },
//         customClass: {
//             title: 'popup-title',
//             timerProgressBar: 'popup-progressbar',
//             htmlContainer: 'popup-text',
//             confirmButton: 'popup-confirmbutton',
//             popup: 'popup'
//           }
//       });
// }