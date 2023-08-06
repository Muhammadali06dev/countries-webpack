import loaderToggler from "./loader"

// Send request 
const getData = async (resource) => {
   loaderToggler(true)
   const request = await fetch(resource)
   if (!request.ok) {
      loaderToggler(false)
      throw new Error("Something went wrong")
   } else {
      const data = await request.json()
      loaderToggler(false)
      return data
   }
}



export default getData