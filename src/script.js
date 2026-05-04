const cursor = document.getElementById("cursor");
const overlay = document.getElementById("overlay");
const sound = new Audio("./src/sounds/bedrott.mp3");
sound.loop = true;
sound.volume = 0.1;

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;

let isPlaying = false;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function smoothCursor() {
    currentX += (mouseX - currentX) * 0.15;
    currentY += (mouseY - currentY) * 0.15;

    cursor.style.left = currentX + "px";
    cursor.style.top = currentY + "px";

    requestAnimationFrame(smoothCursor);
}

function musicControl() {
    if (!isPlaying) {
        sound.play();
    } else if (isPlaying) {
        sound.pause();
    }
    isPlaying = !isPlaying;
}

overlay.addEventListener("click", () => {
    overlay.style.animation = "overlayAnim 1s ease forwards";
    sound.play();
    setTimeout(() => {
        overlay.remove();
        isPlaying = true;
    }, 1000);

});

function openLink(type) {
    switch(type) {
        case 0:
            window.open("https://github.com/nextgencat", "_blank");
            break;
        case 1:
            window.open("https://t.me/nextgencat", "_blank");
            break;
        default:
            console.warn("Unknown link type:", type);
    }
}

smoothCursor();