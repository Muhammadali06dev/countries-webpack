const searchFormEl = document.querySelector(".search")

searchFormEl.search.addEventListener("input", () => {
   const searchValue = searchFormEl.search.value.toLowerCase()
   const cards = document.querySelectorAll(".cards__item")
   const cardsTitle = document.querySelectorAll(".cards__title")
   cardsTitle.forEach(((title, i) => {
      if (title.textContent.toLowerCase().includes(searchValue)) {
         cards[i].style.display = "block"
      } else {
         cards[i].style.display = "none"
      }
   }))

})

import { createCountries } from "./updateUI"
import getData from "./request"

const searchSelect = document.querySelectorAll(".search__select-list li"),
   searchSelectSpan = document.querySelector(".search__select span")

searchSelect.forEach((li) => {
   li.addEventListener("click", () => {
      searchSelectSpan.textContent = li.textContent

      let filterAPI

      if (li.textContent == "All") {
         filterAPI = "https://restcountries.com/v3.1/all"
      } else {
         filterAPI = `https://restcountries.com/v3.1/region/${li.textContent}`
      }
      getData(filterAPI)
         .then((data) => {
            createCountries(data)
         })
         .catch((err) => {
            alert(err.message)
         })
   })
})
