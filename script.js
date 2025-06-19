function toggleMenu(){
    const menu = document.queryselector(".menu-links");
    const icon = document.queryselector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Typing effect for "Frontend Developer"
const text = "Frontend Developer";
let index = 0;
const typedText = document.querySelector(".typed-text");

function type() {
    if (index < text.length) {
        typedText.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100);
    }
}
typedText.textContent = "";
type();
