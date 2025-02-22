const track = document.getElementById("image-track");

const handleOnDown = (e) => {
    track.dataset.mouseDownAt = e.clientX;
};

const handleOnMove = (e) => {
    if (track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
    const maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100;
    const nextPercentage = Math.max(Math.min(parseFloat(track.dataset.prevPercentage) + percentage, 0), -100);

    track.dataset.percentage = nextPercentage;

    track.animate(
        {
            transform: `translate(${nextPercentage}%, -50%)`,
        },
        { duration: 1200, fill: "forwards" }
    );

    for (const image of track.getElementsByClassName("image")) {
        image.animate({ objectPosition: `${100 + nextPercentage}% center` }, { duration: 1200, fill: "forwards" });
    }
};

const handleOnUp = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
};

/* EVENTS */
window.onmousedown = (e) => handleOnDown(e);
window.onmouseup = (e) => handleOnUp(e);
window.onmousemove = (e) => handleOnMove(e);

window.ontouchstart = (e) => handleOnDown(e.touches[0]);
window.ontouchend = (e) => handleOnUp(e.touches[0]);
window.ontouchmove = (e) => handleOnMove(e.touches[0]);
