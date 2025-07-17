const form = document.getElementById('contactForm');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Clear previous errors
  document.getElementById('nameError').textContent = "";
  document.getElementById('emailError').textContent = "";
  document.getElementById('messageError').textContent = "";

  // Get values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  let isValid = true;

  if (name === "") {
    document.getElementById('nameError').textContent = "Name is required.";
    isValid = false;
  }

  if (email === "") {
    document.getElementById('emailError').textContent = "Email is required.";
    isValid = false;
  } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    document.getElementById('emailError').textContent = "Enter a valid email.";
    isValid = false;
  }

  if (message === "") {
    document.getElementById('messageError').textContent = "Message cannot be empty.";
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted successfully!");
    form.reset();
  }
});

