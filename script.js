// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        let target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.location.href = this.getAttribute('href'); // Redirect if not on the same page
        }
    });
});

// Glowing hover effect on navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('mouseover', function () {
        this.style.textShadow = "0px 0px 20px rgba(255, 255, 0, 1)";
    });
    link.addEventListener('mouseout', function () {
        this.style.textShadow = "2px 2px 5px rgba(250, 250, 250, 0.7)";
    });
});

// Crack the Bet Animation Effect
function crackTheBetAnimation() {
    const elements = document.querySelectorAll('.crack-the-bet');
    elements.forEach(el => {
        el.style.animation = "crackEffect 1.5s infinite alternate";
    });
}

document.addEventListener("DOMContentLoaded", crackTheBetAnimation);

// Keyframe animations
const styleSheet = document.styleSheets[0];
styleSheet.insertRule
// Crack the Bet Animation
document.addEventListener("DOMContentLoaded", () => {
    const crackBetHeadings = document.querySelectorAll(".crack-the-bet");
    crackBetHeadings.forEach((heading) => {
        heading.style.animation = "crackEffect 1.5s infinite alternate";
    });
});

// Smooth Scroll for Navigation
document.querySelectorAll("nav ul li a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: "smooth",
            });
        }
    });
});

// Image Hover Effect
document.querySelectorAll(".image-gallery img").forEach((image) => {
    image.addEventListener("mouseover", () => {
        image.style.transform = "scale(1.2)";
        image.style.transition = "transform 0.3s ease-in-out";
    });
    image.addEventListener("mouseout", () => {
        image.style.transform = "scale(1)";
    });
});