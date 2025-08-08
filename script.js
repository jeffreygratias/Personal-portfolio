document.addEventListener('DOMContentLoaded', () => {
    // Active navigation link highlighting on scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');

    window.onscroll = () => {
        sections.forEach(sec => {
            const top = window.scrollY;
            const offset = sec.offsetTop - 150;
            const height = sec.offsetHeight;
            const id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
            }
        });
    };

    // Scroll Reveal Animations
    ScrollReveal({
        reset: true,
        distance: '80px',
        duration: 2000,
        delay: 200
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .skills-container, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


    // Typed.js for the text animation
    const typed = new Typed('.multiple-text', {
        strings: ['Frontend Developer', 'AI Specialist', 'Automation Expel'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });

    // Interactive Skills Section
    const skillsBoxes = document.querySelectorAll('.skills-box');
    skillsBoxes.forEach(box => {
        box.addEventListener('click', () => {
            const skillList = box.querySelector('.skill-list');
            skillList.classList.toggle('show');
        });
    });
    
    // Prevent certificate action links from triggering skill box toggle
    const certificateLinks = document.querySelectorAll('.certificate-actions a');
    certificateLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    });

    // Formspree Integration
    const form = document.getElementById('contact-form');
    const thankYouMessage = document.getElementById('thank-you-message');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const data = new FormData(form);
        
        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                form.style.display = 'none';
                thankYouMessage.style.display = 'block';
            } else {
                alert('There was a problem with your submission. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('There was a problem with your submission. Please try again.');
        }
    });
});
