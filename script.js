// Smooth-scroll navigation for anchor links 
document.querySelectorAll('nav a[href^="#"]').forEach(link => { link.addEventListener('click', (event) => { event.preventDefault(); const target = document.querySelector(link.getAttribute('href')); if (target) { target.scrollIntoView({ behavior: 'smooth' }); } }); });
// Contact form handler (client-side only demo) 
const contactForm = document.getElementById('contact-form'); 
if (contactForm) { contactForm.addEventListener('submit', (event) => { event.preventDefault(); const button = contactForm.querySelector('button'); const originalText = button.textContent; button.textContent = 'Message Sent ✓'; button.disabled = true; setTimeout(() => { button.textContent = originalText; button.disabled = false; contactForm.reset(); }, 2500); }); }