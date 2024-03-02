const modal = document.querySelector('.hmob-modal-wrap');
const openModalBtn = document.querySelector('.signup-button');
const closeModalBtn = document.querySelector('.close');
const overlay = document.querySelector('.modal-overlay');

// Function to open the modal
function openModal() {
  modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
  modal.style.display = 'none';
}

// Open the modal when the button is clicked
openModalBtn.addEventListener('click', openModal);

// Close the modal when the close button is clicked
closeModalBtn.addEventListener('click', closeModal);

// Close the modal when clicking on the overlay
overlay.addEventListener('click', function (event) {
  if (event.target === overlay) {
    closeModal();
  }
});

// Simulated function to send email confirmation
function sendConfirmationEmail(email) {
  // This is a placeholder function to simulate email sending
  console.log('Sending confirmation email to:', email);
}

// Form submission logic
const registrationForm = document.getElementById('registrationForm');
registrationForm.addEventListener('submit', function (event) {
  event.preventDefault();

  // Get values from the form fields
  const username = registrationForm.elements['username'].value;
  const email = registrationForm.elements['email'].value;
  const password = registrationForm.elements['password'].value;
  const confirmPassword = registrationForm.elements['confirmPassword'].value;

  // Check if email is valid
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Check if password meets length requirements
  if (password.length < 6) {
    alert('Password must be at least 6 characters long.');
    return;
  }

  // Check if passwords match
  if (password !== confirmPassword) {
    alert('Passwords do not match.');
    return;
  }

  // Process the form data (e.g., send it to the server)
  console.log('Username:', username);
  console.log('Email:', email);
  console.log('Password:', password);
  console.log('Confirm Password:', confirmPassword);

  // Send confirmation email (simulate sending)
  sendConfirmationEmail(email);

  // Close the modal after successful registration
  closeModal();
});
