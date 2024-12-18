import React from "react";
import Card from "../components/Card";
import { FaEye, FaUserAlt, FaStar, FaComment } from "react-icons/fa";

const Home = () => {
  return (
    <div className="p-4 flex flex-wrap gap-6 justify-start">
      {/* Movie Card */}
      <Card
        type="movie"
        title="Inception"
        subtitle="Science Fiction, 2010"
        description="A skilled thief is given a chance at redemption if he can successfully perform inception."
        imageUrl="https://wallpapercave.com/wp/R8khIqX.jpg"
        imdbRating={8.8}
        views={1200000}
        votes={500000}
        totalReviews={15000}
      />

      {/* Anime Card */}
      <Card
        type="anime"
        title="Attack on Titan"
        subtitle="Action, 2013"
        description="In a world where titans eat humans, humanity fights back for survival."
        imageUrl="https://wallpapercave.com/wp/wp13224418.jpg"
        starRating={9.5}
        views={2000000}
        votes={750000}
        totalReviews={25000}
      />

      {/* Game Card */}
      <Card
        type="game"
        title="The Witcher 3"
        subtitle="RPG, 2015"
        description="Geralt of Rivia, a monster hunter, searches for his adopted daughter in a war-torn world."
        imageUrl="https://wallpapercave.com/wp/wp4423032.jpg"
        platformLogos={[
          "https://img.icons8.com/?size=100&id=13650&format=png&color=000000", // Placeholder for platform icons
        ]}
        views={800000}
        players={300000}
        votes={150000}
        totalReviews={10000}
      />

      {/* Another Movie Card */}
      <Card
        type="movie"
        title="Interstellar"
        subtitle="Adventure, 2014"
        description="A team of explorers travels through a wormhole in space in an attempt to ensure humanity's survival."
        imageUrl="https://wallpapercave.com/wp/wp9444177.jpg"
        imdbRating={8.6}
        views={1000000}
        votes={450000}
        totalReviews={12000}
      />
    </div>
  );
};

export default Home;
