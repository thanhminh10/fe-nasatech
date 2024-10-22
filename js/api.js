async function fetchProducts() {
    const token = localStorage.getItem('token');  // Retrieve the token
    
    const res = await fetch('http://your-backend-url/api/products/all', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    
    const data = await res.json();
    console.log(data);  // Display the product data
}