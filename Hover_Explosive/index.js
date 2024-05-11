const enhance = (id) => {
    const element = document.getElementById(id),
        text = element.innerText.split("");

    element.innerHTML = "";

    text.forEach((letter) => {
        const span = document.createElement("span");
        span.className = "letter";
        span.innerHTML = letter;

        element.appendChild(span);
    });
};

enhance("channel-link");
