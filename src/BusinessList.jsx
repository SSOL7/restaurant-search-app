import React from 'react'
import Business from './Business'

function BusinessList({business}) {

  return (
    <div>
        <h4>Business List Component</h4>
          {business.map(item => {
            return (
              <Business
                key={item.id}
                imageSrc={item.imageSrc}
                name={item.name}
                address={item.address}
                city={item.city}
                state={item.state}
                zipCode={item.zipCode}
                category={item.category}
                rating={item.rating}
                reviews={item.reviews}
              />
            );
          })}
    </div>
  )
}

export default BusinessList