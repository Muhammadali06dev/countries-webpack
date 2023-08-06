const ul = document.querySelector(".cards")


export const createCountries = (countries) => {
   ul.innerHTML = ''
   countries.forEach((country) => {
      const commonName = country.name.common,
         population = country.population,
         region = country.region,
         capital = country.capital ? country.capital : "NO Capital",
         flag = country.flags.svg


      const li = document.createElement("li")
      li.classList.add("cards__item")
      li.innerHTML = `
         <a href="./about.html?country=/name/${commonName}">
            <img src=${flag} alt="${commonName}-flag" width="267" height="160">
            <div class="cards__item-inner">
               <h3 class="cards__title">${commonName}</h3>
               <p class="population">Population: <span>${population}</span></p>
               <p class="region">Region: <span>${region}</span></p>
               <p class="capital">Capital: <span>${capital}</span></p>
            </div>
         </a>
         `

      ul.append(li)
   })
}


// ABOUT UI 
const countryInfo = document.querySelector(".country-info")

export const createCountryInfo = (country) => {
   const { population, borders, capital, flags, name, region, tld, currencies, languages, subregion } = country
   const nativeName = Object.values(name.nativeName)[0].official
   const currentcy = Object.values(currencies)[0].name
   const language = Object.values(languages)
   console.log(currentcy)

   countryInfo.innerHTML = `
   <img class="country-info__img" src="${flags.svg}" alt="germany-flag" width="560"
               height="400" />
            <div class="country-info__content">
               <h2>${name.common}</h2>
               <ul class="country-info__list">
                  <li class="country-info__item">
                     <p class="name">
                        Native Name:
                        <span>${nativeName}</span>
                     </p>
                     <p class="population">
                        Population:
                        <span>${population}</span>
                     </p>
                     <p class="region">
                        Region:
                        <span>${region}</span>
                     </p>
                     <p class="sub-region">
                        Sub Region:
                        <span>${subregion}</span>
                     </p>
                     <p class="capital">
                        Capital:
                        <span>${capital}</span>
                     </p>
                  </li>
                  <li class="country-info__item">
                     <p class="name">
                        Top Level Domain:
                        <span>${tld}</span>
                     </p>
                     <p class="population">
                        Currencies:
                        <span>${currentcy}</span>
                     </p>
                     <p class="region">
                        Languages:
                        <span>${language}</span>
                     </p>
                  </li>
               </ul>

               <div class="country-info__borders">
                  <h3>Border Countries:</h3
                  ${borders ? borders.map((border => {
      return `
                     <a href="./about.html?country=/alpha/${border}">${border}</a>
                     `
   }




   )) : "No Borders"}
               </div>
            </div>
   `

}