document.addEventListener("DOMContentLoaded", function () {
    const heartsContainer = document.querySelector(".hearts-container");

    function createHeart() {
        const heart = document.createElement("div");
        heart.innerHTML = "💖";
        heart.classList.add("heart");

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s";

        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createHeart, 300);
});
