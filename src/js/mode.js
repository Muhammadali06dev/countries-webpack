const modeBtn = document.querySelector(".header__dark-mode"),
   body = document.querySelector("body")

const darkModeLocal = localStorage.getItem("mode") ? localStorage.getItem("mode") : null

if (darkModeLocal) {
   body.classList.add("dark-mode")
}

modeBtn.addEventListener("click", () => {
   body.classList.toggle("dark-mode")
   darkModeLocal ? localStorage.setItem("mode", '') : localStorage.setItem("mode", "dark")
})