// Smooth scroll for nav links and CTA
const navLinks = document.querySelectorAll('.nav-links a, .cta-btn');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Sticky nav background transition
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.style.background = 'rgba(10,6,24,0.98)';
    navbar.style.boxShadow = '0 2px 24px 0 #7f5cff33';
  } else {
    navbar.style.background = 'rgba(10,6,24,0.95)';
    navbar.style.boxShadow = '0 2px 24px 0 rgba(127, 92, 255, 0.08)';
  }
});

// Initialize AOS
AOS.init({
  duration: 900,
  once: true,
  easing: 'ease-in-out',
});
