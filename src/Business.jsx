import React from 'react'

function Business({name, address, city, state, zipCode, category, rating, reviews, imageSrc, id}) {

  return (
    <div>
        <div className='restaurant-list' key={id}>
          <img src={imageSrc} alt=''/>
          <h1>Name: {name}</h1>
          <h2>Address: {address}</h2>
          <h2>City: {city}</h2>
          <h2>State: {state}</h2>
          <h2>Zip: {zipCode}</h2>
          <h2>Category: {category}</h2>
          <h2>Rating: {rating}</h2>
          <h2>Reviews: {reviews}</h2>
        </div>

    </div>
  )
}

export default Business