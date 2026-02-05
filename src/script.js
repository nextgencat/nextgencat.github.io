var videoBG = document.getElementById("videoBG");
var overlay = document.getElementById("overlay");
var description = document.getElementById("description");
var overlayText = document.getElementById("overlayText");
var container = document.getElementById("container");

const text = "just chill guy.\nLanguages i use: C#, XAML, C++, HTMl, CSS and JS";
const text1 = "Click to proceed"

var clickSound = new Audio('src/sounds/click.mp3');
var hoverSound = new Audio('src/sounds/hover.mp3')
description.textContent = "";
overlayText.textContent = "";

function typeAnimation(texto, element, delay) {
    let i = 0;
    function step() {
        if (i < texto.length) {
        element.textContent += texto.charAt(i);
        i++;
        setTimeout(step, delay);
        }
    }
    element.textContent = "";
    step();
}

function start() {
    videoBG.play();
    overlay.style.animation = "hideOverlay 0.5s ease forwards";
    addEventListener("animationend", () => {
        overlay.style.pointerEvents = "none";
        overlay.remove();
        typeAnimation(text, description, 10);
    }, {once: true});
}

container.addEventListener('mouseover', (event) => {

    if (event.target.closest("BUTTON") || event.target.id === "profile-container") {
    hoverSound.currentTime = 0;
    hoverSound.play().catch(() => {});
}
});

function openLink(target) {
    let link = "";
    const btn = event.currentTarget;

    clickSound.currentTime = 0;
    clickSound.play();

    btn.style.animation = "none"
    void btn.offsetWidth;
    btn.style.animation = "clickAnim 0.3s ease"
    
    switch(target) {
        case "tg":
            link = "https://t.me/nextgencat";
            break;
        case "gh": 
            link = "https://github.com/nextgencat";
            break;
        case "donate":

            break;
    }

    setTimeout(() => {
        window.open(link, "_blank");
    }, 310);
}

typeAnimation(text1, overlayText, 40);
