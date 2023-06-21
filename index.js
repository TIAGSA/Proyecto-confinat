const headerToggle = document.querySelector(".header-toggle")
const headerNav = document.querySelector(".header-nav")

headerToggle.addEventListener("click" , () => {
    headerNav.classList.toggle("header-nav_visible")
})