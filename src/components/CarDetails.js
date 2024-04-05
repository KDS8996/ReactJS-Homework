import React from 'react';
import { useParams } from 'react-router-dom';

// Mock data: array of car objects
const cars = [
  { id: 1, make: 'Toyota', model: 'Camry', year: 2022 },
  { id: 2, make: 'Honda', model: 'Accord', year: 2021 },
  { id: 3, make: 'Ford', model: 'Mustang', year: 2023 }
];

function findCarById(carId) {
  return cars.find(car => car.id === parseInt(carId));
}

function CarDetails() {
  const { id } = useParams();
  const car = findCarById(id);

  if (!car) {
    return <div>Car not found</div>;
  }

  return (
    <div>
      <h2>Car Details</h2>
      <p>Make: {car.make}</p>
      <p>Model: {car.model}</p>
      <p>Year: {car.year}</p>
    </div>
  );
}

export default CarDetails;
