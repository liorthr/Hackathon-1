function submitForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var question = document.getElementById('question').value;
    
    fetch('YOUR_WEB_APP_URL', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'name=' + encodeURIComponent(name) + '&email=' + encodeURIComponent(email) + '&question=' + encodeURIComponent(question)
    })
    .then(response => {
      if (response.ok) {
        alert('Form submitted successfully!');
        document.getElementById('contact-form').reset();
      } else {
        alert('Error submitting form!');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Error submitting form!');
    });
  }
  