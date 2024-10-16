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
    strings: ['Freelance', 'Développeur web', 'Technicien réseau'],
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
/*==================== contact form ====================*/
// const form = document.querySelector('form');
// const fullName = document.getElementById("name");
// const email = document.getElementById("email");
// const phone = document.getElementById("phone");
// const subject = document.getElementById("subject");
// const mess = document.getElementById("message");

// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     checkInputs();

//     if (
//             !fullName.classList.contains("error") &&
//             !email.classList.contains("error") &&
//             !phone.classList.contains("error") &&
//             !subject.classList.contains("error") &&
//             !mess.classList.contains("error")
//         ){
//         sendEmail();
//         form.reset();
//         return false;
//     }
// });

// function sendEmail() {
//     const bodyMessage = `

//     Name: ${fullName.value}<br> 
//     <br> 
//     Email: ${email.value} <br> 
//     <br> 
//     Téléphone : ${phone.value} <br> 
//     <br> 
//     Message : <br>
//     <br> 
//     ${mess.value}

//     `;

//     Email.send({

//         SecureToken: "0f9974e0-e90f-4cd1-a454-aab9a7ad1233",
//         To: 'contact@ryanqueva.fr',
//         From: "contact@ryanqueva.fr",
//         Subject: subject.value,
//         Body: bodyMessage

//     }).then(
//         message => {
//             if (message == "OK") {
//                 Swal.fire({
//                     title: "Good job!",
//                     text: "Email send !",
//                     icon: "success",
//                     showCloseButton: true
//                 });
//             }
//         }
//     );
// }

// function checkInputs() {
//     const items = document.querySelectorAll(".item");

//     for (const item of items) {
//         if (item.value == "") {
//             item.classList.add("error");
//             errorBox();
//         }

//         if (items[1].value != "") {
//             checkEmail();
//         }

//         items[1].addEventListener("keyup", () => {
//             checkEmail()
//         })

//         item.addEventListener("keyup", () => {
//             if (item.value != "") {
//                 item.classList.remove("error");
//             } else {
//                 item.classList.add("error");
//             }
//         })
//     }
// }

// function checkEmail() {
//     const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

//     if (!email.value.match(emailRegex)) {
//         email.classList.add("error");
//     } else {
//         email.classList.remove("error");
//     }
// }

// function errorBox() {
//     Swal.fire({
//         icon: "error",
//         title: "Oops...",
//         text: "Un champ est incomplet !",
//         showCloseButton: true
//     });
// }

function PopUpPromo() {
    Swal.fire({
        titleText: "Offre limitée !",
        confirmButtonText: "Decouvrir !",
        html: "<p class=\"popup-text\">Profitez de -5% jusqu'au 30 avril sur l'ensemble de mes solutions digitales !</p>",
        timer: 10000,
        timerProgressBar: true,
        background: '#1f242d',
        color: '#FFF',
        icon: "info",
        iconColor: '#A0E5AF',
        width: '600',
        padding: '50px',
        showClass: {
          popup: `
            animate__animated
            animate__fadeInLeft
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutRight
            animate__faster
          `
        },
        customClass: {
            title: 'popup-title',
            timerProgressBar: 'popup-progressbar',
            htmlContainer: 'popup-text',
            confirmButton: 'popup-confirmbutton',
            popup: 'popup'
          }
      });
}