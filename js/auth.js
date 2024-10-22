document.getElementById('registerForm').addEventListener('submit', async function(e) {
    e.preventDefault();
  
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Call the API for registration
    const response = await registerUser(name, email, password);
    
    if (response.status === 'success') {
      alert('Registration successful!');
      window.location.href = 'login.html';  // Redirect to login page
    } else {
      alert('Registration failed: ' + response.message);
    }
  });
  
  async function registerUser(name, email, password) {
    try {
      const res = await fetch('http://your-backend-url/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });
      return res.json();
    } catch (error) {
      console.error('Error:', error);
      return { status: 'error', message: 'Failed to register' };
    }
}



document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    const response = await loginUser(email, password);
    
    if (response.status === 'success') {
      localStorage.setItem('token', response.token);  // Store JWT token
      window.location.href = 'home.html';  // Redirect to home page
    } else {
      alert('Login failed: ' + response.message);
    }
  });
  
  // Function to call the login API
  async function loginUser(email, password) {
    try {
      const res = await fetch('http://your-backend-url/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      return res.json();
    } catch (error) {
      console.error('Error:', error);
      return { status: 'error', message: 'Failed to login' };
    }
  }
  