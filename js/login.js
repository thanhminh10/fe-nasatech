document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();
  
    // Get form data
    const formData = new FormData(this); // Sử dụng FormData để lấy dữ liệu từ form
  
    const response = await loginUser(formData);
    console.log(response);
    
    if (response.status === 'success') {
      alert("Đăng nhập thành công")
      localStorage.setItem('token', response.token);  // Store JWT token
      window.location.href = '/';  // Redirect to home page
    } else {
      alert('Login failed: ' + response.message);
    }
});
  
// Function to call the login API
async function loginUser(formData) {
    try {
      const res = await fetch('http://localhost/sudes_net/api/login.php', {
        method: 'POST',
        body: formData // Gửi formData trực tiếp mà không cần thiết lập headers
      });
      return res.json();
    } catch (error) {
      console.error('Error:', error);
      return { status: 'error', message: 'Failed to login' };
    }
}
