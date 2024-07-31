document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('search').value;
    alert('Vous avez recherché : ' + query);
});

document.getElementById('loginButton').addEventListener('click', function() {
    alert('Connexion');
});

document.getElementById('signupButton').addEventListener('click', function() {
    alert('Inscription');
});

document.getElementById('menuToggle').addEventListener('click', function() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
});