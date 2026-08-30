function openSurprise() {

    const welcome = document.getElementById("welcome");

    const main =  document.getElementById("mainContent");

    welcome.style.opacity = "0";

    setTimeout(() => {
        welcome.style.display = "none";
        main.style.display = "block";

        createHearts();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, 700);
}


function createHearts() {
    const container = document.querySelector(".hearts");

    const symbols = [
        "\u2764\uFE0F",
        "\u{1F495}",
        "\u{1F496}",
        "\u{1F497}",
        "\u{1F493}",
        "\u{1F498}",
        "\u{1F49E}"
    ];

    for (let i =  0; i < 35; i++) {
        const heart =  document.createElement("div");

        heart.className = "heart";

        heart.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];

        heart.style.left = Math.random() * 100 + "%";

        heart.style.fontSize = (15 + Math.random() * 25) + "px";

        heart.style.animationDuration = (3 + Math.random() * 4) + "s";

        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 7000);
    }
}

setInterval(() => {
    if (  document.getElementById("mainContent").style.display === "block") {
        createSmallHeart();
    }
}, 1500);

function createSmallHeart() {
    const container = document.querySelector(".hearts");

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "&#10084";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize = "18px";

    heart.style.animationDuration = "5s";

    container.appendChild(heart);

    setTimeout(() => {heart.remove();
    }, 5000);
}

document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("secretButton");

    const secretContainer = document.getElementById("secretContainer");

    const finalMessage = document.getElementById("finalMessage");

    const surprise = document.getElementById("secretSurprise");

    button.addEventListener("click", function () {
        console.log("SECRET BUTTON CLICKED &#10084");

        secretContainer.classList.add("hide");

        setTimeout(function () {
            finalMessage.classList.add("show");

            createFinalHeartExplosion();
        },  600);
    });

    function createFinalHeartExplosion() {
        const hearts = [
        "\u2764\uFE0F",
        "\u{1F495}",
        "\u{1F496}",
        "\u{1F497}",
        "\u{1F493}",
        "\u{1F498}",
        "\u{1F49E}"
        ];

        for (let i = 0; i < 60; i++) {
            const heart = document.createElement("div");

            heart.className = "final-floating-heart";

            heart.textContent = hearts[
                Math.floor(Math.random() * hearts.length)
            ];

            heart.style.left = Math.random() * 100 + "%";

            heart.style.bottom = "-30px";

            heart.style.fontSize = (15 + Math.random() * 30) + "px";

            heart.style.animationDuration = (4 + Math.random() * 4) + "s";

            heart.style.animationDelay = Math.random() * 1.5 + "s";

            surprise.appendChild(heart);

            setTimeout(function () {
                heart.remove();
            }, 9000);
        }
    }
});