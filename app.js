// sup menu 
let link = document.getElementById("btnproject");
let subMenu = document.getElementById("submenu");
let btnlearning = document.getElementById("btnlearning");
let subMenu1 = document.getElementById("submenu1");
let clickTimer;
let click = true;

link.addEventListener("click", function (e) {
    e.preventDefault();
    if (clickTimer) {
    clearTimeout(clickTimer);
    clickTimer = null;
    window.location.href = "Projects.html";
    } else {
        clickTimer = setTimeout(() => {
        subMenu.classList.toggle("hidden");
        clickTimer = null;
        }, 200);
    }
});

btnlearning.addEventListener("click", function (e) {
    e.preventDefault();

    if (clickTimer) {
    clearTimeout(clickTimer);
    clickTimer = null;
    window.location.href = "Learning Outcomes.html";
    } else {
        clickTimer = setTimeout(() => {
        subMenu1.classList.toggle("hidden");
        clickTimer = null;
        }, 200);
    }
});
