let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function changeSlide(index) {
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = index;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

setInterval(() => {
  changeSlide((currentSlide + 1) % slides.length);
}, 3000);

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}




document.getElementById('inquiryForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    fetch('YOUR_GOOGLE_WEB_APP_URL', { // Replace with your Google Apps Script URL
        method: 'POST',
        body: new URLSearchParams(data),
    })
    .then(response => response.text())
    .then(data => {
        if (data === 'Success') {
            alert('Your inquiry has been submitted successfully!');
            e.target.reset(); // Reset form after submission
        } else {
            alert('There was a problem submitting your inquiry.');
        }
    })
    .catch(error => console.error('Error:', error));
});

