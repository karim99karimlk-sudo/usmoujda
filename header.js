const topBar = document.querySelector(".top-bar");
let lastScroll = 0;

// FIX: Instead of hardcoding px values in JS (which breaks responsive design),
// we toggle a class on the body and let CSS handle the specific padding values via media queries.
window.addEventListener("scroll", () => {
    let currentScroll = window.scrollY;

    if (currentScroll <= 0) {
        topBar.classList.remove("hide");
        document.body.classList.remove("scrolled");
    } else if (currentScroll > lastScroll) {
        topBar.classList.add("hide");
        document.body.classList.add("scrolled");
    } else {
        topBar.classList.remove("hide");
        document.body.classList.remove("scrolled");
    }

    lastScroll = currentScroll;
});

const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const nav = document.getElementById("nav");

menuBtn.onclick = () => {
    nav.classList.add("active");
}

closeBtn.onclick = () => {
    nav.classList.remove("active");
}

document.querySelectorAll("#nav a").forEach(link => {
    link.onclick = () => {
        nav.classList.remove("active");
    }
});
