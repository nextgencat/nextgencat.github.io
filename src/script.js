const tg_link = "https://t.me/nextgencat";
const dc_link = "https://discord.gg/"
const gh_link = "https://github.com/nextgencat"

const text = "haii!! my name is nextgencat. Now im learning html, css & js";
const el = document.getElementById("desc");
let i = 0;

function type() {
    if (i < text.length) {
        el.textContent += text[i];
        i++;
        setTimeout(type, 50);
    }
}

function tg() {
    window.open(tg_link, '_blank')
}

function dc() {
    window.open(dc_link, '_blank')
}

function gh() {
    window.open(gh_link, '_blank')
}

const overlayEl = document.getElementById("overlay");

function start() {
    overlayEl.style.animation = "overlayOut 0.7s ease forwards";
    overlayEl.addEventListener('animationend', () => {
        overlayEl.remove();
        type();
    }, {once: true});

}