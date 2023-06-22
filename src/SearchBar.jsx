import React, { useState } from 'react'

function SearchBar() {
  const [sortBy, setSortBy] = useState('best_match');
  const [formData, setFormData] = useState({restaurant: "", location: ""});
  

  const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
  };

  const getSortByClass = (sortByOption) => {
    if (sortBy === sortByOption) {
      return 'active';
    } else {
      return '';
    }
  };

  const handleSortByChange = (sortByOption) => {
    setSortBy(sortByOption);
  };

  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return (
        <li
          className={getSortByClass(sortByOptionValue)}
          key={sortByOptionValue}
          onClick={() => {
            handleSortByChange(sortByOptionValue);
          }}
        >
          {sortByOption}
        </li>
      );
    });
  };


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Restaurant: ${formData.restaurant}, Location: ${formData.location}, ${sortBy}` );
};


  return (
    <div>
      <h4>Search component</h4>
        <ul>{renderSortByOptions()}</ul>

        <form onSubmit={handleSubmit}>
            <label htmlFor="restaurant">Restaurant:</label>
            <input className='search' type="text" id="restaurant" name="restaurant" value={formData.restaurant} onChange={handleChange}/>

            <label htmlFor="location">Location:</label>
            <input className='location' type="text" id="location" name="location" value={formData.location} onChange={handleChange}/>
            <button className='go' type="submit">Submit</button>
        </form>
    </div>
  )
}

export default SearchBar