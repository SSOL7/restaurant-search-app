import React, { useState } from 'react';
import BusinessList from './BusinessList';
import SearchBar from './SearchBar';
import './App.css';

const business = [
  {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'Samgyeopsal Grill',
  address: 'Gwangjin-gu',
  city: 'Seoul',
  state: 'Korea',
  zipCode: '10101',
  category: 'Korean',
  rating: 4.5,
  reviews: 90,
  id: 1
},
{
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'Kimchi factory',
  address: 'Haeundae-gu',
  city: 'Busan',
  state: 'Korea',
  zipCode: '3407',
  category: 'Korean',
  rating: 4,
  reviewCount: 100,
  id: 2
},
];


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar />
        <BusinessList business={business} />
      </header>
    </div>
  );
}

export default App;
