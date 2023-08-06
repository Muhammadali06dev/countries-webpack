// Overlay Toggler
const loader = document.querySelector(".loader")
function loaderToggler(state) {
   if (state) {
      loader.classList.remove("hidden")
   } else {
      loader.classList.add("hidden")
   }
}

export default loaderToggler