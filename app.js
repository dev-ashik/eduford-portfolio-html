const bars = document.querySelector("#bars");
const xmark = document.querySelector("#xmark");
const navLinks = document.querySelector(".nav-links");

bars.onclick = () => {
    navLinks.classList.toggle("active");
    bars.classList.add("none");
}

xmark.onclick = () => {
    navLinks.classList.remove("active"); 
    bars.classList.remove("none");
}
