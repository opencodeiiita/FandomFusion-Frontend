
import { Eye, Play, Tv, Users } from "lucide-react";
import { Card } from "./components/Card";
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
        <Route path="/" element={<MyCards />} /> {/* Corrected component name */}
        <Route path="/contributors" element={<Contributors />} />
        {/* 404 page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

function MyCards() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card
            type="game"
            title="Red Dead Redemption 2"
            subtitle="By Rockstar Games"
            imageUrl="https://c4.wallpaperflare.com/wallpaper/219/629/87/red-dead-redemption-2-red-dead-redemption-hd-wallpaper-preview.jpg"
            rating={92}
            votes={10000}
            tags={["Trending", "Best in Asia"]}
            stats={{
              primary: {
                icon: <Users className="w-4 h-4" />,
                label: "Active Players",
                value: 2500,
              },
              secondary: {
                icon: <Play className="w-4 h-4" />,
                label: "Total Plays",
                value: 8400000,
              },
            }}
          />
          <Card
            type="movie"
            title="Inception"
            subtitle="Directed by Christopher Nolan"
            imageUrl="https://wallpapercave.com/wp/msi4htu.jpg"
            rating={88}
            votes={12000}
            tags={["Top 5 IMDB", "Critics' Pick"]}
            stats={{
              primary: {
                icon: <Users className="w-4 h-4" />,
                label: "Currently Watching",
                value: 4100,
              },
              secondary: {
                icon: <Eye className="w-4 h-4" />,
                label: "Total Views",
                value: 15000000,
              },
            }}
          />
          <Card
            type="anime"
            title="Mushoku Tensei"
            subtitle="Produced by Studio Bind"
            imageUrl="https://images7.alphacoders.com/126/thumbbig-1266440.webp"
            rating={95}
            votes={5000}
            tags={["Top Rated", "Fan Favorite"]}
            stats={{
              primary: {
                icon: <Tv className="w-4 h-4" />,
                label: "Episodes Available",
                value: 24,
              },
              secondary: {
                icon: <Eye className="w-4 h-4" />,
                label: "Total Views",
                value: 18500000,
              },
            }}
          />
        </div>
      </div>
    </>
  );
}

export default App;

