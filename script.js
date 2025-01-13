// Toggle background color
document.getElementById('toggle-bg-btn').addEventListener('click', function () {
    const body = document.body;
    body.style.backgroundColor = body.style.backgroundColor === 'white' ? '#f5f5f5' : 'white';
  });
  
  // Adjust text size for the entire webpage
  document.getElementById('font-slider').addEventListener('input', function () {
    const root = document.documentElement;
    const fontSize = `${this.value}px`;
    root.style.fontSize = fontSize;
    document.getElementById('font-size-display').innerText = fontSize;
  });
  
  // Modal functionality
  const modal = document.getElementById('modal');
  const openModalBtn = document.getElementById('open-modal-btn');
  const closeModalBtn = document.getElementById('close-modal-btn');
  
  openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
  });
  
  closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });
  
  // Form validation and success message
  document.getElementById('signup-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission
  
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const dropdown = document.getElementById('dropdown-menu');
    const successMessage = document.createElement('p');
    let isValid = true;
  
    // Clear previous success messages
    const existingMessage = document.querySelector('.success-message');
    if (existingMessage) existingMessage.remove();
  
    // Name validation
    if (name.value.length < 3) {
      isValid = false;
      document.getElementById('name-error').innerText = 'Name must be at least 3 characters long.';
    } else {
      document.getElementById('name-error').innerText = '';
    }
  
    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
      isValid = false;
      document.getElementById('email-error').innerText = 'Enter a valid email address.';
    } else {
      document.getElementById('email-error').innerText = '';
    }
  
    // Password validation
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordPattern.test(password.value)) {
      isValid = false;
      document.getElementById('password-error').innerText =
        'Password must be at least 8 characters long, with one uppercase letter and one number.';
    } else {
      document.getElementById('password-error').innerText = '';
    }
  
    // Dropdown validation
    if (!dropdown.value) {
      isValid = false;
      document.getElementById('dropdown-message').innerText = 'Please select a role.';
    } else {
      document.getElementById('dropdown-message').innerText = '';
    }
  
    // If all fields are valid
    if (isValid) {
      // Display success message
      successMessage.innerText = 'Registration successful!';
      successMessage.className = 'success-message';
      successMessage.style.color = 'black';
      successMessage.style.marginTop = '10px';
      document.getElementById('signup-form').appendChild(successMessage);
  
      // Optionally, clear the form fields
      name.value = '';
      email.value = '';
      password.value = '';
      dropdown.value = '';
    }
  });
  