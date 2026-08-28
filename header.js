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
