// === ระบบดวงดาว ===
const canvas = document.getElementById("starfield");
const context = canvas.getContext("2d");
function initStars() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
window.addEventListener("resize", initStars); initStars();

// === ระบบรูปลอย ===
var imgUrls = [
    "public/images/photo1.jpg", "public/images/photo2.jpg", "public/images/photo3.jpg",
    "public/images/photo4.jpg", "public/images/photo5.jpg", "public/images/photo6.jpg",
    "public/images/photo7.jpg", "public/images/photo8.jpg", "public/images/photo9.jpg",
    "public/images/photo10.jpg", "public/images/photo11.jpg", "public/images/photo12.jpg",
    "public/images/photo13.jpg", "public/images/photo14.jpg", "public/images/photo15.jpg",
    "public/images/photo16.jpg", "public/images/photo17.jpg", "public/images/photo18.jpg",
    "public/images/photo19.jpg", "public/images/photo20.jpg", "public/images/photo21.jpg",
    "public/images/photo22.jpg", "public/images/photo23.jpg", "public/images/photo24.jpg",
    "public/images/photo25.jpg", "public/images/photo26.jpg", "public/images/photo27.jpg"
];

let floatingImages = [];
function createFloatingImage() {
    const img = new Image();
    img.src = imgUrls[Math.floor(Math.random() * imgUrls.length)];
    floatingImages.push({
        image: img,
        x: Math.random() * canvas.width,
        y: canvas.height + 50,
        size: 50 + Math.random() * 50,
        speed: 1 + Math.random() * 2
    });
}

function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    // วาดดาว
    context.fillStyle = "white";
    for(let i=0; i<100; i++) { context.fillRect(Math.random()*canvas.width, Math.random()*canvas.height, 1, 1); }
    // วาดรูปลอย
    floatingImages.forEach((p, i) => {
        if (p.image.complete) context.drawImage(p.image, p.x, p.y, p.size, p.size);
        p.y -= p.speed;
        if (p.y < -100) floatingImages.splice(i, 1);
    });
    requestAnimationFrame(animate);
}
setInterval(createFloatingImage, 1000); // สร้างรูปลอยทุก 1 วินาที
animate();

// === ระบบปุ่ม ===
var emojisSad = ["🥺", "😭", "😮‍💨", "💔", "pls pls pls🥺"];
document.getElementById("btn-love").addEventListener("click", function() {
    document.getElementById("emoji-display").innerText = "💖🥰✨";
    alert("Hore!!! Aku sangat mencintaimu lho!!! 💕");
});

var scaleNotLove = 1.0;
document.getElementById("btn-notlove").addEventListener("click", function() {
    scaleNotLove -= 0.25;
    document.getElementById("emoji-display").innerText = emojisSad[Math.floor(Math.random() * emojisSad.length)];
    if (scaleNotLove <= 0.1) document.getElementById("btn-notlove").style.display = "none";
    else document.getElementById("btn-notlove").style.transform = "scale(" + scaleNotLove + ")";
});
