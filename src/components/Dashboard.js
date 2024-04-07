import React, { useState } from 'react';
import DataTable from './DataTable';
import CreateForm from './CreateForm';
import './Dashboard.css';

const Dashboard = () => {
  const [cars, setCars] = useState([
    { id: 1, make: 'Toyota', model: 'Camry', year: 2022 },
    { id: 2, make: 'Honda', model: 'Civic', year: 2021 },
    // Add more cars as needed...
  ]);

  const handleDeleteCar = (id) => {
    const updatedCars = cars.filter((car) => car.id !== id);
    setCars(updatedCars);
  };

  const handleAddCar = (newCar) => {
    setCars([...cars, newCar]);
  };

  return (
    <div className="dashboard">
      <h1>Car Inventory</h1>
      <DataTable cars={cars} onDelete={handleDeleteCar} />
      <CreateForm onAdd={handleAddCar} />
    </div>
  );
};

export default Dashboard;
