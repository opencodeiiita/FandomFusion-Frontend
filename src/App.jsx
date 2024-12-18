import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import './App.css';
import Home from './pages/Home.jsx'; 
import NotFound from './pages/404.jsx';
const App = () => {
return (
	<Router>
		<div className="App">
		  {/* Main routes defined here */}
		  <Routes>
			<Route path="/" element={<Home />} />
			{ <Route path="/register" element={<Register />} /> }
			{ <Route path="/profile" element={<Profile />} /> }
			{ <Route path="/settings" element={<Settings />} /> }
		  </Routes>
		  <Route path="*" element={NotFound}/>
		</div>
	</Router>
);
};  
export default App;



