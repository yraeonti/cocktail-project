import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {searchterm, setSearchterm} = useGlobalContext()

  return (
    <section className="section search">
      <form className="search-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-control">
          <label htmlFor="name" > Search </label>
          <input type="text" id="name" value={searchterm} onChange={(e) => {setSearchterm(e.target.value)}}/>

        </div>
      </form>
       
    </section>
  )
}

export default SearchForm
