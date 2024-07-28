document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await res.json();
  
      if (res.status === 200) {
        localStorage.setItem('token', data.token);
        alert('Login successful');
        document.getElementById('dashboardLink').click();
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
    }
  });
  
  document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });
  
      const data = await res.json();
  
      if (res.status === 201) {
        alert('Registration successful');
        document.getElementById('loginLink').click();
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
    }
  });
  