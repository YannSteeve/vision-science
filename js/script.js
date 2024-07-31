const typedText = [
    "Vous souhaite la Bienvenue",
    " Nous vous accompagnons",
    " Au travers d'un programme",
    " Aussi riche que passionnant",
    "donc n'attendez plus",
    "INSCRIVEZ VOUS MAINTENANT",
];

let currentIndex = 0;
const typedElement = document.querySelector('.typed');
const cursorElement = document.querySelector('.typed-cursor');

function type(text, i) {
    if (i < text.length) {
        typedElement.textContent += text.charAt(i);
        setTimeout(() => type(text, i + 1), 100); // Affiche chaque caractère toutes les 100 ms
    } else {
        setTimeout(() => erase(text.length), 3000); // Attend 2 secondes avant d'effacer
    }
}

function erase(length) {
    const text = typedText[currentIndex];
    if (length > 0) {
        typedElement.textContent = text.substring(0, length - 1);
        setTimeout(() => erase(length - 1), 50); // Efface chaque caractère toutes les 50 ms
    } else {
        currentIndex = (currentIndex + 1) % typedText.length; // Passe au texte suivant
        setTimeout(() => type(typedText[currentIndex], 0), 500); // Attend avant de commencer à taper le texte suivant
    }
}

function blinkCursor() {
    cursorElement.style.display = cursorElement.style.display === 'none' ? 'inline' : 'none';
}

setInterval(blinkCursor, 500); // Clignote le curseur toutes les 0.5 secondes
type(typedText[currentIndex], 0); // Commence avec le premier texte



// JavaScript pour ajouter des fonctionnalités interactives
document.addEventListener('DOMContentLoaded', function() {
    // Système de connexion simulé
    const connexionLink = document.querySelector('nav a[href="connexion.html"]');
    connexionLink.addEventListener('click', function(e) {
        e.preventDefault();
        const username = prompt("Entrez votre nom d'utilisateur:");
        if (username) {
            alert(`Bienvenue, ${username}! Vous êtes maintenant connecté.`);
            connexionLink.textContent = username;
        }
    });

    // Animation simple pour le showcase
    const showcase = document.getElementById('showcase');
    showcase.style.opacity = 0;
    let opacity = 0;
    const fadeIn = setInterval(() => {
        if (opacity >= 1) {
            clearInterval(fadeIn);
        }
        showcase.style.opacity = opacity;
        opacity += 0.1;
    }, 100);

    // Ajout d'un effet de survol sur les boîtes
    const boxes = document.querySelectorAll('#boxes .box');
    boxes.forEach(box => {
        box.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        box.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Ajout d'un compteur de visites (simulé)
    const visitCount = localStorage.getItem('visitCount') || 0;
    localStorage.setItem('visitCount', parseInt(visitCount) + 1);
    const footer = document.querySelector('footer');
    const visitorCounter = document.createElement('p');
    visitorCounter.textContent = `Nombre de visites: ${parseInt(visitCount) + 1}`;
    footer.appendChild(visitorCounter);
});



