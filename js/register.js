document.getElementById('registerForm').addEventListener('submit', async function(e) {
  e.preventDefault();

  // Get form data
  const formData = new FormData(this); // Sử dụng FormData để lấy dữ liệu từ form
  
  // Call the API for registration
  const response = await registerUser(formData);
  console.log(response);
  
  if (response.status === 'success') {
    alert('Registration successful!');
    window.location.href = 'login.html';  // Redirect to login page
  } else {
    alert('Registration failed: ' + response.message);
  }
});

// Function to register user
async function registerUser(formData) {
  try {
    const res = await fetch('http://localhost/sudes_net/api/register.php', {
      method: 'POST',
      body: formData // Gửi dữ liệu từ FormData
    });
    return res.json();
  } catch (error) {
    console.error('Error:', error);
    return { status: 'error', message: 'Failed to register' };
  }
}

  