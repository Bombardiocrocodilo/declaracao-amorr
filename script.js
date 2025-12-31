// Música no primeiro toque
const musica = document.getElementById("musica");

function iniciarMusica() {
    musica.play().catch(() => {});
}

document.addEventListener("click", iniciarMusica, { once: true });
document.addEventListener("touchstart", iniciarMusica, { once: true, passive: true });


// Corações caindo
const heartsContainer = document.querySelector(".hearts");

function criarCoracao() {
    const heart = document.createElement("div");
    heart.innerHTML = "🧡";
    heart.style.position = "absolute";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-10px";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    heart.style.opacity = Math.random();
    heart.style.filter = "drop-shadow(0 0 10px orange)";
    heart.style.animation = "fall 5s linear";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(criarCoracao, 300);

// Animação
const style = document.createElement("style");
style.innerHTML = `
@keyframes fall {
    to {
        transform: translateY(110vh);
    }
}`;
document.head.appendChild(style);
