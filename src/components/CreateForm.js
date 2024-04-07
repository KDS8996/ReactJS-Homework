import React, { useState } from 'react';

const CreateForm = ({ onAdd }) => {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new car object
    const newCar = {
      id: Math.floor(Math.random() * 1000), 
      make,
      model,
      year
    };
    // Invoke the onAdd function passed from the parent component (Dashboard)
    onAdd(newCar);
    // Reset form fields after submission
    setMake('');
    setModel('');
    setYear('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Make:
        <input type="text" value={make} onChange={(e) => setMake(e.target.value)} required />
      </label>
      <label>
        Model:
        <input type="text" value={model} onChange={(e) => setModel(e.target.value)} required />
      </label>
      <label>
        Year:
        <input type="number" value={year} onChange={(e) => setYear(e.target.value)} required />
      </label>
      <button type="submit">Add Car</button>
    </form>
  );
};

export default CreateForm;
