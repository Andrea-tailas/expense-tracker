const fetchUserData = async () => {
    const token = localStorage.getItem('token');
  
    try {
      const res = await fetch('/api/user', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
  
      const data = await res.json();
  
      if (res.status === 200) {
        document.getElementById('userInfo').innerText = `Welcome, ${data.username}`;
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
    }
  };
  
  document.getElementById('dashboardLink').addEventListener('click', fetchUserData);
  