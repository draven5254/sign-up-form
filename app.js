"Use strict";

let currentSlide = 0;
const slides = document.querySelectorAll(".slides li");
const interval = 3000; // Change image every 3 seconds (adjust as needed)

function showSlide() {
  slides[currentSlide].style.opacity = 0;
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.opacity = 1;
}

// Initialize the slideshow
slides[currentSlide].style.opacity = 1;

// Start automatic slideshow
setInterval(showSlide, interval);

function validatePassword() {
  const password = document.getElementById("user-password");
  const confirmPassword = document.getElementById("confirm-password");
  const errorElement = document.getElementById("passwordError");

  //   input tags
  const inputElements = document.querySelectorAll("input");

  if (password.value !== confirmPassword.value) {
    errorElement.innerHTML = "*Passwords do not match.";
    password.style.border = "1px solid red";
    confirmPassword.style.border = "1px solid red";
  } else {
    errorElement.innerHTML = ""; // Clear any previous error messages

    password.style.border = "1px solid #64ccc5";
    confirmPassword.style.border = "1px solid #64ccc5";

    for (var i = 0; i < inputElements.length; i++) {
      inputElements[i].value = "";
    }

    // You can also submit the form here if the passwords match.
    // For example: document.getElementById("passwordForm").submit();
  }
}
