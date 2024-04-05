import React from 'react';

const DataTable = ({ cars }) => {
  return (
    <table className="data-table">
      <thead>
        <tr>
          <th>Make</th>
          <th>Model</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
        {cars.map((car) => (
          <tr key={car.id}>
            <td>{car.make}</td>
            <td>{car.model}</td>
            <td>{car.year}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
