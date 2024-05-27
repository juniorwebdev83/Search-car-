import React, { useState } from 'react';
import CarSearch from './components/CarSearch';
import CarList from './components/CarList';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
  const [cars] = useState([
    { name: 'Toyota Camry', description: 'Reliable and fuel-efficient.' },
    { name: 'Ford Mustang', description: 'Sporty and powerful.' },
    { name: 'Tesla Model S', description: 'Electric and innovative.' }
  ]);

  const [filteredCars, setFilteredCars] = useState(cars);

  const handleSearch = (query) => {
    const result = cars.filter(car => car.name.toLowerCase().includes(query.toLowerCase()));
    setFilteredCars(result);
  };

  return (
    <div className="App">
      <Navbar />
      <h1>Search Car Hub</h1>
      <CarSearch onSearch={handleSearch} />
      <CarList cars={filteredCars} />
    </div>
  );
};

export default App;
