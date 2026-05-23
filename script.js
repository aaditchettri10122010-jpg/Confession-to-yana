const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");
const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");
const letterWindow = document.querySelector(".letter-window");

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout(() => {
        letterWindow.classList.add("open");
    }, 50);
});

noBtn.addEventListener("mouseover", () => {
    const containerRect = letterWindow.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();
    const padding = 12;

    const minX = containerRect.left + padding - btnRect.left;
    const maxX = containerRect.right - padding - btnRect.right;
    const minY = containerRect.top + padding - btnRect.top;
    const maxY = containerRect.bottom - padding - btnRect.bottom;

    const moveX = Math.random() * (maxX - minX) + minX;
    const moveY = Math.random() * (maxY - minY) + minY;

    noBtn.style.transition = "transform 0.25s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

yesBtn.addEventListener("click", () => {
    title.textContent = "Yippeeee!";
    catImg.src = "cat_dance.gif";
    letterWindow.classList.add("final");
    buttons.style.display = "none";
    finalText.style.display = "block";
});
