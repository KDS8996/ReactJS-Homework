import React from 'react';
import DataTable from './DataTable';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Car Inventory</h1>
      <DataTable />
    </div>
  );
};

export default Dashboard;
