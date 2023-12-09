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
            })
        }
    })
    /*==================== stiky navbar ====================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


/*==================== scroll reveal ====================*/
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*==================== typed js ====================*/
const typed = new Typed('.multiple-text', {
    strings: ['Web Developer', 'Student', 'Network Technician'],
    typeSpeed: 100,
    backSpeed: 90,
    backDelay: 450,
    loop: true
});

/*==================== contact form ====================*/
const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `

    Name: ${fullName.value}<br> 
    <br> 
    Email: ${email.value} <br> 
    <br> 
    Téléphone : ${phone.value} <br> 
    <br> 
    Message : <br>
    <br> 
    ${mess.value}

    `;

    Email.send({
        SecureToken: "01714b00-e16d-4334-ba5f-34a71812d021",
        To: 'contact@ryanqueva.fr',
        From: "contact@ryanqueva.fr",
        Subject: subject.value,
        Body: bodyMessage
    }).then(
        message => {
            if (message == "OK") {
                Swal.fire({
                    title: "Good job!",
                    text: "Email send !",
                    icon: "success",
                    showCloseButton: true
                });
            }
        }
    );
}

function checkInputs() {
    const items = document.querySelectorAll(".item");

    for (const item of items) {
        if (item.value == "") {
            item.classList.add("error");
            errorBox();
        }

        if (items[1].value != "") {
            checkEmail();
        }

        items[1].addEventListener("keyup", () => {
            checkEmail()
        })

        item.addEventListener("keyup", () => {
            if (item.value != "") {
                item.classList.remove("error");
            } else {
                item.classList.add("error");
            }
        })
    }
}

function checkEmail() {
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

    if (!email.value.match(emailRegex)) {
        email.classList.add("error");
    } else {
        email.classList.remove("error");
    }
}

function errorBox() {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Un champ est incomplet !",
        showCloseButton: true
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();

    if (
            !fullName.classList.contains("error") &&
            !email.classList.contains("error") &&
            !phone.classList.contains("error") &&
            !subject.classList.contains("error") &&
            !mess.classList.contains("error")
        ){

        sendEmail();

        form.reset();
        return false;

    }
});

/*==================== onload dev ====================*/

// window.onload = () => {

//     Swal.fire({

//         icon: "info",
//         title: "Tu cherches un alternant motivée ?! Contact moi !",
//         toast: false,
//         backdrop: false,

//         position: "top",
//         showConfirmButton: false,
//         timer: 5000,
//         timerProgressBar: true,

//         footer: '<a href="#contact" style="color: #FFF; background-color: #1f242d; border-radius:10%; padding: 1rem;">Me contacter !</a>'
        
//     });
// }

