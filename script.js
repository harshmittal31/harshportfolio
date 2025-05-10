// Basic JavaScript for smooth scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example: Simple form submission alert (for demonstration purposes only)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        alert('Message sent successfully! (This is a demo)');
        this.reset(); // Clear the form
    });
}

// Dynamic role typing effect
const roles = [
    "Software Developer",
    "AI Expert",
    "Graphic Designer",
    "Freelancer",
    "Web Developer",
    "Tech Consultant",
    "Open Source Contributor"
];

let roleIndex = 0;
let charIndex = 0;
let typingForward = true;

const roleElement = document.getElementById("role-text");

function typeEffect() {
    if (!roleElement) return;

    const currentRole = roles[roleIndex];
    if (typingForward) {
        charIndex++;
        if (charIndex > currentRole.length) {
            typingForward = false;
            setTimeout(typeEffect, 1500);
            return;
        }
    } else {
        charIndex--;
        if (charIndex === 0) {
            typingForward = true;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }
    roleElement.textContent = currentRole.substring(0, charIndex);
    setTimeout(typeEffect, 100);
}

typeEffect();

// Modal functionality
function openModal(projectId) {
    document.getElementById(projectId + '-modal').style.display = "block";
}

function closeModal(projectId) {
    document.getElementById(projectId + '-modal').style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target.className === 'modal') {
        closeModal(event.target.id.replace('-modal', ''));
    }
}

// Dark/Light Mode Toggle
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
});
