var canvas = document.getElementById("starfield");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d", { willReadFrequently: true });
var stars = 500;
var colorrange = [0, 60, 240];
var starArray = [];

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (var i = 0; i < stars; i++) {
    var x = Math.random() * canvas.offsetWidth;
    var y = Math.random() * canvas.offsetHeight;
    var radius = Math.random() * 1.2;
    var hue = colorrange[getRandom(0, colorrange.length - 1)];
    var sat = getRandom(50, 100);
    var opacity = Math.random();
    starArray.push({ x, y, radius, hue, sat, opacity });
}

var frameNumber = 0;
var opacity = 0;
var secondOpacity = 0;
var thirdOpacity = 0;

var baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);

function drawStars() {
    for (var i = 0; i < stars; i++) {
        var star = starArray[i];
        context.beginPath();
        context.arc(star.x, star.y, star.radius, 0, 360);
        context.fillStyle = "hsla(" + star.hue + ", " + star.sat + "%, 88%, " + star.opacity + ")";
        context.fill();
    }
}

function updateStars() {
    for (var i = 0; i < stars; i++) {
        if (Math.random() > 0.99) {
            starArray[i].opacity = Math.random();
        }
    }
}

const button = document.getElementById("valentinesButton");

button.addEventListener("click", () => {
    if (button.textContent === "Click Aku!! 💙") {
        button.textContent = "loading...";
        setTimeout(() => {
            button.style.display = "none";
            document.getElementById("love-container").style.display = "block";
        }, 1000);
    }
});

function drawTextWithLineBreaks(lines, x, y, fontSize, lineHeight) {
    lines.forEach((line, index) => {
        context.fillText(line, x, y + index * (fontSize + lineHeight));
    });
}

function drawText() {
    var fontSize = Math.min(30, window.innerWidth / 24);
    var lineHeight = 8;

    context.font = fontSize + "px Comic Sans MS";
    context.textAlign = "center";
    
    context.shadowColor = "rgba(45, 45, 255, 1)";
    context.shadowBlur = 8;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;

    if(frameNumber < 250){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("Aku tak percaya. Setiap hari aku memikirkan betapa beruntungnya aku memiliki dirimu", canvas.width/2, canvas.height/2);
        opacity = opacity + 0.01;
    }
    if(frameNumber >= 250 && frameNumber < 500){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("Aku tak percaya. Setiap hari aku memikirkan betapa beruntungnya aku memiliki dirimu", canvas.width/2, canvas.height/2);
        opacity = opacity - 0.01;
    }
    if(frameNumber == 500){ opacity = 0; }

    if(frameNumber > 500 && frameNumber < 750){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        if (window.innerWidth < 600) {          
            drawTextWithLineBreaks(["Di antara triliunan bintang, selama miliaran tahun... Aku menemukanmu, dan sekarang aku menginginkanmu..."], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("Di antara triliunan bintang, selama miliaran tahun... Aku menemukanmu, dan sekarang aku menginginkanmu...", canvas.width/2, canvas.height/2);
        }
        opacity = opacity + 0.01;
    }
    if(frameNumber >= 750 && frameNumber < 1000){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["Di antara triliunan bintang, selama miliaran tahun... Aku menemukanmu, dan sekarang aku menginginkanmu..."], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("Di antara triliunan bintang, selama miliaran tahun... Aku menemukanmu, dan sekarang aku menginginkanmu...", canvas.width/2, canvas.height/2);
        }
        opacity = opacity - 0.01;
    }
    if(frameNumber == 1000){ opacity = 0; }

    if(frameNumber > 1000 && frameNumber < 1250){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("Aku ingin menikahimu dan menghabiskan hidupku bersamamu selamanya", canvas.width/2, canvas.height/2);
        opacity = opacity + 0.01;
    }
    if(frameNumber >= 1250 && frameNumber < 1500){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("Aku ingin menikahimu dan menghabiskan hidupku bersamamu selamanya", canvas.width/2, canvas.height/2);
        opacity = opacity - 0.01;
    }
    if(frameNumber == 1500){ opacity = 0; }

    if(frameNumber > 1500 && frameNumber < 1750){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("Itu luar biasa dan merupakan hal paling beruntung yang pernah ada", canvas.width/2, canvas.height/2);
        opacity = opacity + 0.01;
    }
    if(frameNumber >= 1750 && frameNumber < 2000){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("Itu luar biasa dan merupakan hal paling beruntung yang pernah ada", canvas.width/2, canvas.height/2);
        opacity = opacity - 0.01;
    }
    if(frameNumber == 2000){ opacity = 0; }

    if(frameNumber > 2000 && frameNumber < 2250){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["Tapi sekarang aku akan kembali menerima cinta dari seseorang yang mengerti aku"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("Tapi sekarang aku akan kembali menerima cinta dari seseorang yang mengerti aku", canvas.width/2, canvas.height/2);
        }
        opacity = opacity + 0.01;
    }
    if(frameNumber >= 2250 && frameNumber < 2500){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["and yet here I am to get the impossible", "chance to get to know you"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("Tapi sekarang aku akan kembali menerima cinta dari seseorang yang mengerti aku", canvas.width/2, canvas.height/2);
        }
        opacity = opacity - 0.01;
    }
    if(frameNumber == 2500){ opacity = 0; }

    if(frameNumber > 2500 && frameNumber < 99999){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["Aku sangat mencintaimu Nara lebih dari seluruh waktu dan ruang di alam semesta dapat menampungnya"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("Aku sangat mencintaimu Nara lebih dari seluruh waktu dan ruang di alam semesta dapat menampungnya", canvas.width/2, canvas.height/2);
        }
        opacity = opacity + 0.01;
    }
    
    if(frameNumber >= 2750 && frameNumber < 99999){
        context.fillStyle = `rgba(45, 45, 255, ${secondOpacity})`;
        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["Aku tak sabar untuk menghabiskan waktu bersamanya, merawatnya, dan berbagi kasih sayang ini dengannya!!"], canvas.width / 2, (canvas.height/2 + 60), fontSize, lineHeight);
        } else {
            context.fillText("Aku tak sabar untuk menghabiskan waktu bersamanya, merawatnya, dan berbagi kasih sayang ini dengannya!!", canvas.width/2, (canvas.height/2 + 50));
        }
        secondOpacity = secondOpacity + 0.01;
    }

    if(frameNumber >= 3000 && frameNumber < 99999){
        context.fillStyle = `rgba(45, 45, 255, ${thirdOpacity})`;
        context.fillText("Semoga kalian berdua bahagia bersama untuk waktu yang lama <3", canvas.width/2, (canvas.height/2 + 120));
        thirdOpacity = thirdOpacity + 0.01;
        document.getElementById("valentinesButton").style.display = "block";
    }   

    context.shadowColor = "transparent";
    context.shadowBlur = 0;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;
}

function draw() {
    context.putImageData(baseFrame, 0, 0);
    drawStars();
    updateStars();
    drawFloatingImages();
    drawText();
    if (frameNumber < 99999) {
        frameNumber++;
    }
    window.requestAnimationFrame(draw);
}

window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);
});

window.requestAnimationFrame(draw);

var imgUrls = [
    "public/images/photo1.jpg.jpg",
    "public/images/photo2.jpg.jpg",
    "public/images/photo3.jpg.jpg",
    "public/images/photo4.jpg.jpg",
    "public/images/photo5.jpg.jpg",
    "public/images/photo6.jpg.jpg",
    "public/images/photo7.jpg.jpg",
    "public/images/photo8.jpg.jpg",
    "public/images/photo9.jpg.jpg",
    "public/images/photo10.jpg.jpg",
    "public/images/photo11.jpg.jpg",
    "public/images/photo12.jpg.jpg",
    "public/images/photo13.jpg.jpg",
    "public/images/photo14.jpg.jpg",
    "public/images/photo15.jpg.jpg",
    "public/images/photo16.jpg.jpg",
    "public/images/photo17.jpg.jpg",
    "public/images/photo18.jpg.jpg",
    "public/images/photo19.jpg.jpg",
    "public/images/photo20.jpg.jpg",
    "public/images/photo21.jpg.jpg",
    "public/images/photo22.jpg.jpg",
    "public/images/photo23.jpg.jpg",
    "public/images/photo24.jpg.jpg",
    "public/images/photo25.jpg.jpg",
    "public/images/photo26.jpg.jpg",
    "public/images/photo27.jpg.jpg"
];

var floatingImages = [];

function spawnFloatingImage() {
    if (frameNumber >= 210 && frameNumber % 60 === 0 && floatingImages.length < 15) { 
        var img = new Image();
        img.src = imgUrls[Math.floor(Math.random() * imgUrls.length)];
        floatingImages.push({
            image: img,
            x: Math.random() * (canvas.width - 120),
            y: canvas.height + 100,
            speed: 1 + Math.random() * 1.5,
            size: 80 + Math.random() * 60, 
            opacity: 0,
            angle: Math.random() * 360,
            spin: (Math.random() - 0.5) * 0.02
        });
    }
}

function drawFloatingImages() {
    spawnFloatingImage();
    for (var i = 0; i < floatingImages.length; i++) {
        var p = floatingImages[i];
        p.y -= p.speed; 
        p.angle += p.spin; 
        if (p.opacity < 1 && p.y > 100) p.opacity += 0.02; 
        if (p.y < 100) p.opacity -= 0.02; 
        context.save();
        context.globalAlpha = Math.max(0, p.opacity);
        context.translate(p.x + p.size/2, p.y + p.size/2);
        context.rotate(p.angle);
        context.beginPath();
        context.arc(-p.size/2 + 10, -p.size/2 + 10, 10, Math.PI, Math.PI * 1.5);
        context.closePath();
        if (p.image.complete && p.image.naturalWidth > 0) { context.drawImage(p.image, -p.size/2, -p.size/2, p.size, p.size); }
        context.restore();
        if (p.y < -150) {
            floatingImages.splice(i, 1);
            i--;
        }
    }
}

// ==========================================
// LOVE / NOT LOVE BUTTON LOGIC
// ==========================================

var scaleNotLove = 1.0;
var notLoveCount = 0;

var notLoveMessages = [
    { emoji: "😢💔", text: "Yakin nih? Coba pikir lagi deh..." },
    { emoji: "😭😭", text: "Kamu serius?? Coba jawab sekali lagi ya..." },
    { emoji: "🥺🥺🥺", text: "Ini kesempatan terakhirmu lho... Yakin tidak cinta?" }
];

document.getElementById("btn-love").addEventListener("click", function() {
    document.getElementById("emoji-display").innerText = "💖😘✨";
    document.getElementById("notlove-message").innerText = "";
    alert("Hore!!! Aku paling menyayangimu, Nara!!! 😖💕");
});

document.getElementById("btn-notlove").addEventListener("click", function() {
    scaleNotLove -= 0.25;
    notLoveCount++;

    var msgIndex = Math.min(notLoveCount - 1, notLoveMessages.length - 1);
    var msg = notLoveMessages[msgIndex];

    document.getElementById("emoji-display").innerText = msg.emoji;
    document.getElementById("notlove-message").innerText = msg.text;

    if (scaleNotLove <= 0.1) {
        document.getElementById("btn-notlove").style.display = "none";
        document.getElementById("emoji-display").innerText = "😭😭😭";
        document.getElementById("notlove-message").innerText = "Oke... tapi aku tetap menyayangimu 💔";
    } else {
        document.getElementById("btn-notlove").style.transform = "scale(" + scaleNotLove + ")";
    }
});
