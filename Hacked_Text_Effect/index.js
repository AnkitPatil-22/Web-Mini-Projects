const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

let text = document.querySelector("h1");

const hackedEffect = () => {
    let iteration = 0;

    let prevText = text.innerText;
    clearInterval(interval);
    text.onmouseover = () => {};

    interval = setInterval(() => {
        text.innerText = text.innerText
            .split("")
            .map((letter, index) => {
                if (index < iteration) {
                    return text.dataset.value[index];
                } else {
                    return letters[Math.floor(Math.random() * 26)];
                }
            })
            .join("");

        if (iteration > text.dataset.value.length) {
            clearInterval(interval);
            text.innerText = text.dataset.value;
            text.dataset.value = prevText;
            text.onmouseover = () => hackedEffect();
        }
        iteration += 1 / 3;
    }, 30);
};

text.onmouseover = () => hackedEffect();
window.onload = () => {
    setTimeout(() => {
        hackedEffect();
    }, 1000);
};
