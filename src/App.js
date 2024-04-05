import React from 'react';
import './App.css';
import UserProfile from './components/UserProfile'; // Import UserProfile component
import { AuthProvider } from './context/AuthContext'; // Import AuthProvider from context

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Car Inventory Dashboard</h1>
        <AuthProvider>
          <UserProfile />
        </AuthProvider>
      </header>
    </div>
  );
}

export default App;
