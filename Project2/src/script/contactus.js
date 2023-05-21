$(document).ready(function() {
    var department = [
        "Computer Engineering","Industrial Engineering","Mechanical Engineering","Medicine", "Civil Engineering", "Law"
    ];
    $("#department").autocomplete({
      source: department
    });

    $("#entrydate").datepicker();

    // Help button click event
    $("#helpButton").click(function() {
        alert("Please fill out the form with the required information.");
      });
  
      // Form submission event
      $("form").submit(function(event) {
        event.preventDefault(); // Prevent form submission
  
        // Perform form validation here
        var name = $("#name").val();
        var department = $("#department").val();
        var email = $("#email").val();
        var message = $("#message").val();
        var birthday = $("#birthday").val();
  
        // Perform additional validation or data processing as needed
  
        // Submit the form via AJAX or perform any desired action
        // Here, we'll simply log the form data to the console
        console.log("Name: " + name);
        console.log("Department: " + department);
        console.log("Email: " + email);
        console.log("Message: " + message);
        console.log("Birthday: " + birthday);
  
        // Optionally, display a success message or redirect the user
        alert("Form submitted successfully!");
      });
    
  });

document.getElementById('contactus').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
  
    // Validate form data
    if (name === '' || email === '' || message === '') {
      alert('Please fill in all the required fields.');
      return;
    }
  
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    // Process the form data or display a success message
    alert('Form submitted successfully!');
    // You can add further logic here to send the data to a server or perform additional actions.
  });
  
  function validateEmail(email) {
    // Email validation regular expression
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

