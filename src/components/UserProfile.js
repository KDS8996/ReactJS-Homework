import React from 'react';
import { useAuth } from '../context/AuthContext'; // Adjust import path for AuthContext

const UserProfile = () => {
  const { user, signIn, signOut } = useAuth(); // Use authentication context

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.email}!</p>
          <button onClick={signOut}>Sign Out</button>
        </div>
      ) : (
        <div>
          <p>Please sign in</p>
          <button onClick={() => signIn('test@example.com', 'password')}>
            Sign In
          </button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
