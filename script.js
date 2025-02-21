// Gallery navigation buttons functionality
document.getElementById("nextBtn").addEventListener("click", function() {
    changeImage(1);
});

document.getElementById("prevBtn").addEventListener("click", function() {
    changeImage(-1);
});

let currentIndex = 0;
const images = [
    "files/18.webp", 
    "files/1.webp", 
    "files/2.webp"
];

function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = images.length - 1;
    if (currentIndex >= images.length) currentIndex = 0;

    document.getElementById("leftImage").src = images[(currentIndex - 1 + images.length) % images.length];
    document.getElementById("centerImage").src = images[currentIndex];
    document.getElementById("rightImage").src = images[(currentIndex + 1) % images.length];
}