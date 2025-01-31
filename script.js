document.querySelector('.yes-btn').addEventListener('click', () => {
    // Cacher la page de départ et le bouton "Yes"
    document.querySelector('.content').style.display = 'none';
    
    // Montrer les cœurs et le message
    document.getElementById('message').classList.remove('hidden');
    
    // Créer des cœurs flottants
    createHearts();
    
    // Créer l'animation pour que les cœurs forment un grand cœur
    setTimeout(() => {
        createBigHeart();
    }, 3000); // Les cœurs commencent à se rassembler après 3 secondes
});

// Fonction pour créer les petits cœurs
function createHearts() {
    for (let i = 0; i < 50; i++) {
        let heart = document.createElement('div');
        heart.classList.add('heart');
        
        // Position aléatoire pour chaque cœur
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.top = Math.random() * window.innerHeight + 'px';
        
        document.querySelector('.hearts-container').appendChild(heart);
    }
}

// Fonction pour faire se rassembler les cœurs
function createBigHeart() {
    const hearts = document.querySelectorAll('.heart');
    
    hearts.forEach((heart, index) => {
        // Animation des cœurs pour qu'ils se déplacent vers un grand cœur
        heart.style.animation = 'none'; // Arrêter l'animation de flottement
        heart.style.transition = `transform ${index * 0.1 + 1}s ease-in-out, opacity ${index * 0.1 + 1}s ease`;
        
        // Faire se rassembler les cœurs au centre
        heart.style.transform = `translate(${window.innerWidth / 2 - 15}px, ${window.innerHeight / 2 - 15}px) scale(2)`;
        heart.style.opacity = '0';
    });
    
    // Afficher le message une fois les cœurs rassemblés
    document.querySelector('.heart-message').style.opacity = '1';
}
