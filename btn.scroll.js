let scrolltotop = document.getElementById('scroll-to-top');

window.onscroll = function () {
    if(scrollY >= 600) {
        scrolltotop.style.display = "block";
    }else {
        scrolltotop.style.display = "none";
    }
}
scrolltotop.onclick = function () {
    scroll({
        top: 0,
        behavior: 'smooth'
    });
}