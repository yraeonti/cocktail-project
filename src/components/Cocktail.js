import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = (props) => {
  const {id, type, name, glass, image } = props
  return (
    <section className='cocktail'>
       <div className='img-container'>
         <img src={image} alt={name}/>
       </div>
       <div className='cocktail-footer'>
       <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{type}</p>
        <Link to={`/singlecocktail/${id}`} className='btn btn-primary btn-details'> Details</Link>
       </div>

    </section>
  )
}

export default Cocktail
