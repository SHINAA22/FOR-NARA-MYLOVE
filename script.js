// === 1. ระบบดวงดาวระยิบระยับ (Canvas Starfield) ===
const canvas = document.getElementById("starfield");
const context = canvas.getContext("2d");

let stars = 500;
let starArray = [];

function initStars() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    starArray = [];
    for (let i = 0; i < stars; i++) {
        starArray.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2,
            opacity: Math.random()
        });
    }
}

function drawStars() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "#ffffff";
    for (let i = 0; i < stars; i++) {
        let star = starArray[i];
        context.globalAlpha = star.opacity;
        context.fillRect(star.x, star.y, star.size, star.size);
    }
}

function animate() {
    drawStars();
    requestAnimationFrame(animate);
}

window.addEventListener("resize", initStars);
initStars();
animate();

// === 2. รายการรูปภาพ (ตรวจสอบแล้วว่าไม่มีนามสกุลซ้ำ) ===
var imgUrls = [
    "public/images/photo1.jpg", "public/images/photo2.jpg", "public/images/photo3.jpg",
    "public/images/photo4.jpg", "public/images/photo5.jpg", "public/images/photo6.jpg",
    "public/images/photo8.jpg", "public/images/photo9.jpg",
    "public/images/photo10.jpg", "public/images/photo11.jpg", "public/images/photo12.jpg",
    "public/images/photo13.jpg", "public/images/photo14.jpg", "public/images/photo15.jpg",
    "public/images/photo16.jpg", "public/images/photo17.jpg", "public/images/photo18.jpg",
    "public/images/photo19.jpg", "public/images/photo20.jpg", "public/images/photo21.jpg",
    "public/images/photo22.jpg", "public/images/photo23.jpg", "public/images/photo24.jpg",
    "public/images/photo25.jpg", "public/images/photo26.jpg", "public/images/photo27.jpg"
];

// === 3. ระบบควบคุมปุ่มหลัก ===
const button = document.getElementById("valentinesButton");

button.addEventListener("click", () => {
    button.style.display = "none";
    const loveContainer = document.getElementById("love-container");
    if (loveContainer) {
        loveContainer.style.display = "block";
    }
});

// === 4. ระบบจัดการปุ่ม Love / Not Love ===
var scaleNotLove = 1.0;
var emojisSad = ["🥺", "😭", "😮‍💨", "💔", "pls pls pls🥺"];

document.getElementById("btn-love").addEventListener("click", function() {
    document.getElementById("emoji-display").innerText = "💖🥰✨";
    alert("Hore!!! Aku sangat mencintaimu lho!!! 💕");
});

document.getElementById("btn-notlove").addEventListener("click", function() {
    scaleNotLove -= 0.25;
    if (scaleNotLove <= 0.1) {
        document.getElementById("btn-notlove").style.display = "none";
        document.getElementById("emoji-display").innerText = "😱😱😱😱";
    } else {
        document.getElementById("btn-notlove").style.transform = "scale(" + scaleNotLove + ")";
        var randomSad = emojisSad[Math.floor(Math.random() * emojisSad.length)];
        document.getElementById("emoji-display").innerText = randomSad;
    }
});
