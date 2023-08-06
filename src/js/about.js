import "../css/main.css"
import "./mode"
import getData from "./request"
import { createCountryInfo } from "./updateUI"

const queryString = window.location.search
const queryParams = new URLSearchParams(queryString)
const country = queryParams.get("country")
const countryAPI = `https://restcountries.com/v3.1/${country}`


getData(countryAPI)
   .then(data => {
      createCountryInfo(data[0])
   })
   .catch(err => {
      console(err.message)
   })