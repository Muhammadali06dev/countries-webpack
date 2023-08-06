import "../css/main.css"
import getData from "./request"
import { createCountries } from "./updateUI"
import "./filter"



const API = "https://restcountries.com/v3.1/all"

getData(API).then((data) => {
   createCountries(data)
}).catch((err) => {
   console.log(err.message)
})

