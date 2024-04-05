import React from 'react';
import { Link } from 'react-router-dom';

function CarList() {
  const cars = []; // Initialize cars with an empty array

  return (
    <div>
      <h1>Car Inventory</h1>
      <ul>
        {cars.map((car, index) => (
          <li key={index}>
            <Link to={`/details/${car.id}`}>{car.make} {car.model}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CarList;
