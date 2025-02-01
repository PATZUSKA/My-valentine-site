const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const heartContainer = document.querySelector(".hearts-container");

// 🎯 Déplacer "No" aléatoirement
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// 🎉 Quand on clique sur "Yes"
yesBtn.addEventListener("click", () => {
    document.body.style.background = "black"; // Supprimer le fond
    document.querySelector(".background").style.display = "none";
    document.querySelector(".question").style.display = "none";
    document.getElementById("heart-animation").classList.remove("hidden");

    createHearts();
    setTimeout(createBigHeart, 3000);
});

// 💖 Générer des cœurs flottants
function createHearts() {
    for (let i = 0; i < 50; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.top = Math.random() * window.innerHeight + "px";
        heartContainer.appendChild(heart);
    }
}

// 🏹 Formation du grand cœur
function createBigHeart() {
    document.querySelectorAll(".heart").forEach((heart, index) => {
        heart.style.transition = `transform ${index * 0.1 + 1}s, opacity ${index * 0.1 + 1}s`;
        heart.style.transform = `translate(${window.innerWidth / 2}px, ${window.innerHeight / 2}px) scale(2)`;
        heart.style.opacity = "0";
    });
    document.querySelector(".heart-message").style.opacity = "1";
}