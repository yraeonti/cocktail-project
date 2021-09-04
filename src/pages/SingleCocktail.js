import React, { useEffect } from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const [loading, setLoading] = React.useState(false)
  const [cocktail, setCocktail] = React.useState("")
   const {id} = useParams()

  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await fetch(url + id)
      const data = await response.json()
      console.log(data)
      if (data.drinks) {
        const {strDrink: name,
              strDrinkThumb: image,
               strAlcoholic: info,
              strCategory: category,
              strGlass: glass,
              strInstructions: instructions,
              strIngredient1,
              strIngredient2,
              strIngredient3} = data.drinks[0]
              const ingre = [strIngredient1, strIngredient2, strIngredient3]
              const newcocktail = {name, image, info, category, glass, ingre}
              setCocktail(newcocktail)
              setLoading(false)
      }
      else{
        setCocktail(null)
        
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
    

  }

  useEffect(() => {
    fetchData()
  },[id])



if (loading) {
  return <Loading/>
}
if (!cocktail) {
  return <h2 className="section-title"> No details to display</h2>
}
const {name, image, info, category, glass, ingre} = cocktail
  return (
    <section>
       <Link to='/' className='btn btn-primary'>
          back home
        </Link>
        <h2 className='section-title'>{name}</h2>
         <div className='drink'>
          <img src={image} alt={name}></img>
          <div className='drink-info'>
            <p>
              <span className='drink-data'>name :</span> {name}
            </p>
            <p>
              <span className='drink-data'>category :</span> {category}
            </p>
            <p>
              <span className='drink-data'>info :</span> {info}
            </p>
            <p>
              <span className='drink-data'>glass :</span> {glass}
            </p>
            <p>
              <span className='drink-data'>ingredients :</span>
              {ingre.map((item, index) => item? <span key={index}>{item}</span> : null)}
            </p>
            </div>
            </div>


    </section>
)
}

export default SingleCocktail
