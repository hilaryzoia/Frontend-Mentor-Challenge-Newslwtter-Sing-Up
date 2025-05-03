document.addEventListener('DOMContentLoaded', (event) => {
  const form = document.getElementById('form');
  const emailInput = document.getElementById('email');
  const errorMessage = document.getElementById('email-error');

  // Initially hide the error message
  errorMessage.style.display = 'none'; 

  form.addEventListener('submit', (e) => {
    // Prevent default form submission regardless of validation outcome initially
    e.preventDefault(); 

    const emailValue = emailInput.value.trim();
    // Standard regex for basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

    // Check if email is empty or doesn't match the regex pattern
    if (emailValue === "" || !emailRegex.test(emailValue)) {
      // Email is not valid
      emailInput.classList.add('error'); // Add error class for styling
      errorMessage.style.display = 'block'; // Show the custom error message
    } else {
      // Email is valid
      emailInput.classList.remove('error'); // Remove error class
      errorMessage.style.display = 'none'; // Hide the error message

      // Store the valid email in localStorage to display on the success page
      localStorage.setItem('subscribedEmail', emailValue);

      // Redirect to success page
      // Ensure 'sucess.html' is the correct path relative to index.html
      window.location.href = 'sucess.html'; 
    }
  });

  // Optional: Remove error state when user starts typing again
  emailInput.addEventListener('input', () => {
      if (emailInput.classList.contains('error')) {
          emailInput.classList.remove('error');
          errorMessage.style.display = 'none';
      }
  });
});
