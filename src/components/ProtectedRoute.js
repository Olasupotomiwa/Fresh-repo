// ProtectedRoute.js
import React from 'react';
import { Route,  useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate(); // Initialize the navigate function

 
  

  return (
    
        <Route
          element={isAuthenticated ? children : navigate('/log-in') }
        />
      );

};

export default ProtectedRoute;

