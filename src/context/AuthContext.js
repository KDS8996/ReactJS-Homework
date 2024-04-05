import React, { createContext, useState, useContext } from 'react';

// Create a new context for authentication
const AuthContext = createContext();

// Custom hook to consume the AuthContext
export const useAuth = () => useContext(AuthContext);

// AuthProvider component to wrap the app and provide authentication context
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signIn = (email, password) => {
    // Implement your sign-in logic here
    setUser({ email });
  };

  const signOut = () => {
    setUser(null);
  };

  const authContextValue = {
    user,
    signIn,
    signOut,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
