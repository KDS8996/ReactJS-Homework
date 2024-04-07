import React from 'react';

const CarItem = ({ car, onDelete }) => {
  const { id, make, model } = car;

  return (
    <div className="car-item">
      <p>{make} {model}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default CarItem;
