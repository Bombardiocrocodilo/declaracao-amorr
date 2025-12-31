const heartsContainer = document.querySelector('.hearts');

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '🧡';

    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (Math.random() * 20 + 15) + 'px';

    const duration = Math.random() * 3 + 4; // 4s a 7s
    heart.style.animationDuration = duration + 's';

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

setInterval(createHeart, 150);

const music = document.getElementById('bg-music');
music.volume = 0.4;

let musicStarted = false;

function startMusic() {
    if (!musicStarted) {
        music.play();
        musicStarted = true;

        document.removeEventListener('click', startMusic);
        document.removeEventListener('touchstart', startMusic);
    }
}

document.addEventListener('click', startMusic);
document.addEventListener('touchstart', startMusic);