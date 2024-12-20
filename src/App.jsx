import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'; 
import { CSSTransition, TransitionGroup } from 'react-transition-group'; 
import './App.css'; // Make sure your CSS file has the animation styles
import Home from './pages/Home.jsx'; 
import NotFound from './pages/404.jsx';
import Auth from './pages/Auth.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';
import ResetPassword from './pages/ResetPassword.jsx';
import Signup from './pages/Signup.jsx';

const App = () => {
  return (
    <Router>
      <MainContent />
    </Router>
  );
};

// Main content where the routes and animations will occur
const MainContent = () => {
  const location = useLocation(); // Correct usage inside Router
  console.log('Current path:', location.pathname);

  return (
    <div className="App">
      <TransitionGroup>
        <CSSTransition
          key={location.key} // Unique key for each route change
          timeout={300} // Duration of the transition
          classNames="page" // Add CSS class for animations
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/Auth" element={<Auth />} />
			<Route path='/Signup' element={<Signup/>} />
            <Route path="/ForgotPassword" element={<ForgotPassword />} />
            <Route path="/ResetPassword" element={<ResetPassword />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default App;
