// src/routers/ProtectedRoute.jsx
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = localStorage.getItem('authToken');  // Check if the user has the token

  if (!isLoggedIn) {
    toast.error("Not Logged In", { position: toast.POSITION.TOP_RIGHT });
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? <Component {...props} /> : <Redirect to="/landing" />
      }
    />
  );
};

export default ProtectedRoute;
