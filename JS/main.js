//Contact Form
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    
    if (!name || !email || !message) {
      alert('All fields are required.');
      return false;
    }
    
    // Simple regex for email validation
    var emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; 
    if (!emailRegEx.test(email)) {
      alert('Please enter a valid email address.');
      return false;
    }
    
    alert('Form submitted successfully.');
    return true;
  });

