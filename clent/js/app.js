document.getElementById('loginLink').addEventListener('click', () => {
    document.getElementById('loginSection').classList.remove('hidden');
    document.getElementById('registerSection').classList.add('hidden');
    document.getElementById('dashboardSection').classList.add('hidden');
  });
  
  document.getElementById('registerLink').addEventListener('click', () => {
    document.getElementById('loginSection').classList.add('hidden');
    document.getElementById('registerSection').classList.remove('hidden');
    document.getElementById('dashboardSection').classList.add('hidden');
  });
  
  document.getElementById('dashboardLink').addEventListener('click', () => {
    document.getElementById('loginSection').classList.add('hidden');
    document.getElementById('registerSection').classList.add('hidden');
    document.getElementById('dashboardSection').classList.remove('hidden');
  });
  