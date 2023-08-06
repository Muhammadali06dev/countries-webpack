import "../css/main.css"
import getData from "./request"
import loaderToggler from "./loader"
import { createCountries } from "./updateUI"
import "./filter"
import "./mode"



const API = "https://restcountries.com/v3.1/all"

getData(API).then((data) => {
   createCountries(data)
}).catch((err) => {
   console(err.message)
   // loaderToggler(false)
})

