// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Contact form validation and submission
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!form.checkValidity()) {
      alert('Please fill out all fields correctly.');
      return;
    }

    // For demo, just show an alert and reset form
    alert('Thank you for your message! I will get back to you soon.');
    form.reset();
  });
}
