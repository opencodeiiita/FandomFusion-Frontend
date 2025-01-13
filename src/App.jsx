<<<<<<< HEAD
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css';
import Home from './pages/Home.jsx';
import NotFound from './pages/404.jsx';
import Auth from './pages/Auth.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';
import ResetPassword from './pages/ResetPassword.jsx';
import Signup from './pages/Signup.jsx';
import LandingPage from './pages/LandingPage.jsx';
import Search from './pages/SearchPage.jsx';
import { AuthProvider } from './context/authContext.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <MainContent />
        <ToastContainer />
      </Router>
    </AuthProvider>
  );
};
=======
import { useState } from "react";
import "./App.css";
import { Card } from "./components/Card";
import SearchPage from "./pages/search-page";
import { Route,Routes } from "react-router-dom";
function App() {
	return (
	   <Routes>
		 <Route path='/search' element={<SearchPage/>}></Route>
	   </Routes>
	);
}
>>>>>>> f61199e (Extend Search Functionality to Movies and Games)

const MainContent = () => {
  const location = useLocation();
  const isAuthenticated = !!localStorage.getItem('authToken'); // Check if authToken exists

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
          <Route path="/search" element={<Search />} />

          {/* Default Route: Redirect based on authentication */}
          <Route
            path="/"
            element={isAuthenticated ? <Home /> : <Navigate to="/land" replace />}
          />

          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default App;
