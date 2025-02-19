// Crack the Bet Animation
document.addEventListener("DOMContentLoaded", function () {
    const crackBet = document.getElementById("crack-the-bet");
    setInterval(() => {
        crackBet.style.transform = scale($,{1 :+ Math.random() * 0.2});
    }, 500);
});

// Shiv Puja Image Upload
document.getElementById("imageUpload")?.addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function () {
            document.getElementByeId("preview").innerHTML =
        }
        reader.readAsDataURL(file);
    }
});