// === ระบบดวงดาว ===
const canvas = document.getElementById("starfield");
const context = canvas.getContext("2d");
function initStars() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "white";
    for(let i=0; i<100; i++) { context.fillRect(Math.random()*canvas.width, Math.random()*canvas.height, 2, 2); }
    requestAnimationFrame(animate);
}
window.addEventListener("resize", initStars); initStars(); animate();

// === ระบบรูปภาพ ===
var imgUrls = [
    "public/images/photo1.jpg", 
    "public/images/photo2.jpg", 
    "public/images/photo3.jpg",
    "public/images/photo4.jpg", 
    "public/images/photo5.jpg", 
    "public/images/photo6.jpg",  
    "public/images/photo8.jpg", 
    "public/images/photo9.jpg",
    "public/images/photo10.jpg", 
    "public/images/photo11.jpg", 
    "public/images/photo12.jpg",
    "public/images/photo13.jpg", 
    "public/images/photo14.jpg",
    "public/images/photo15.jpg",
    "public/images/photo16.jpg",
    "public/images/photo17.jpg", 
    "public/images/photo18.jpg",
    "public/images/photo19.jpg",
    "public/images/photo20.jpg", 
    "public/images/photo21.jpg",
    "public/images/photo22.jpg", 
    "public/images/photo23.jpg", 
    "public/images/photo24.jpg",
    "public/images/photo25.jpg", 
    "public/images/photo26.jpg", 
    "public/images/photo27.jpg"
];

// === ระบบปุ่ม ===
document.getElementById("btn-love").addEventListener("click", function() {
    document.getElementById("emoji-display").innerText = "💖🥰✨";
    // สุ่มรูปขึ้นมาโชว์
    var photo = document.getElementById("photo-display");
    photo.src = imgUrls[Math.floor(Math.random() * imgUrls.length)];
    photo.style.display = "block";
    alert("Hore!!! Aku sangat mencintaimu lho!!! 💕");
});

var scaleNotLove = 1.0;
document.getElementById("btn-notlove").addEventListener("click", function() {
    scaleNotLove -= 0.25;
    if (scaleNotLove <= 0.1) {
        document.getElementById("btn-notlove").style.display = "none";
        document.getElementById("emoji-display").innerText = "😱😱😱😱";
    } else {
        document.getElementById("btn-notlove").style.transform = "scale(" + scaleNotLove + ")";
    }
});
