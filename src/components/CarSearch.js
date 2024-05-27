import React, { useState } from 'react';

const CarSearch = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div>
      <input 
        type="text" 
        value={query}
        onChange={handleSearch}
        placeholder="Search for a car..."
      />
    </div>
  );
};

export default CarSearch;
