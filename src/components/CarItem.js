import React from 'react';

const CarItem = ({ car }) => {
  return (
    <div>
      <h3>{car.name}</h3>
      <p>{car.description}</p>
    </div>
  );
};

export default CarItem;
