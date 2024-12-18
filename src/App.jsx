import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NotFound from "./pages/404.jsx";
import Contributors from "./pages/Contributors.jsx";
const App = () => {
	return (
		<Router>
			{/* Main routes defined here */}
			<Routes>
				<Route path="/" element={<h1>Hello world</h1>} />{" "}
				{/* TODO: Change this with actual Home page */}
				<Route path="/contributors" element={<Contributors />} />
				{/* 404 page */}
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Router>
	);
};
export default App;
