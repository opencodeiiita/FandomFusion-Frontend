import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css';
import Home from './pages/Home.jsx';
import NotFound from './pages/404.jsx';
import Auth from './pages/Auth.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';
import ResetPassword from './pages/ResetPassword.jsx';
import Signup from './pages/Signup.jsx';
import LandingPage from './pages/LandingPage.jsx'; // Assuming you want a landing page

const App = () => {
  // Simulate logging in by setting a token in localStorage
  useEffect(() => {
    // Set a valid token programmatically (this is for simulation; you would replace this with a real login flow)
    if (!localStorage.getItem('authToken')) {
      localStorage.setItem('authToken', 'valid_token'); // Automatically set token for testing
    }
  }, []);

  return (
    <Router>
      <MainContent />
    </Router>
  );
};

const MainContent = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // If there is no token and we're not on the LandingPage, redirect to LandingPage
    if (!localStorage.getItem('authToken')) {
      if (location.pathname !== '/') {
        navigate('/'); // Redirect to Landing page if not logged in
      }
    }
  }, [location, navigate]);

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <Routes location={location}>
          {/* Public Routes */}
          <Route path="/land" element={<LandingPage />} /> 
          <Route path="/auth" element={<Auth />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/signup" element={<Signup />} />
          
          {/* Protected Route */}
          <Route path="/" element={localStorage.getItem('authToken') ? <Home /> : <LandingPage />} />

          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default App;
