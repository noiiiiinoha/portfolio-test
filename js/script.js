
function toggleHamburger() {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const hamburgerNav = document.querySelector('.hamburger-nav');
  hamburgerMenu.classList.toggle('active'); // Toggle active on hamburger-menu
  hamburgerNav.classList.toggle('active'); // Toggle active on hamburger-nav
}
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
// Form handling
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission

      // Get form data
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      // Store data in localStorage
      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
      localStorage.setItem('message', message);

      // Redirect to confirm.html
      window.location.href = 'confirm.html';
    });
  }
  // フォームの入力値を復元する処理
  const name = localStorage.getItem('name');
  const email = localStorage.getItem('email');
  const message = localStorage.getItem('message');

  if (name) {
      document.getElementById('name').value = name;
  }
  if (email) {
      document.getElementById('email').value = email;
  }
  if (message) {
      document.getElementById('message').value = message;
  }

});