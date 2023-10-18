var header = document.getElementById("header")
var toHome = document.getElementById("toHome")
window.onscroll = function () {
    if (window.scrollY > 300) {
        header.classList.add("headerFixed")
        toHome.classList.add("btnShow")
    }
    else {
        header.classList.remove("headerFixed")
        toHome.classList.remove("btnShow")
    }
}
toHome.addEventListener("click", function () {
    window.scroll({
        top: 0,
        behavior: "smooth"
    })
})