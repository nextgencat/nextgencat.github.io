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

type();

function tg() {
    window.open(tg_link, '_blank')
}

function dc() {
    window.open(dc_link, '_blank')
}

function gh() {
    window.open(gh_link, '_blank')

}
