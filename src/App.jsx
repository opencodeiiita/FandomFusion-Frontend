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
  // Sample media data with more detailed information
  const mediaItems = [
    {
      type: 'movie',
      title: 'Inception',
      subtitle: 'Science Fiction, Thriller',
      imageUrl: "https://www.usatoday.com/gcdn/presto/2020/07/14/USAT/886994a3-dbeb-48ab-a34e-5a83ffbf307f-D1_2Inception_Cov_31.JPG",
      imdbRating: 8.8,
      genres: ['Sci-Fi', 'Action', 'Thriller'],
      releaseYear: 2010
    },
    {
      type: 'game',
      title: 'The Last of Us Part II',
      subtitle: 'Action, Adventure, Survival',
      imageUrl: "https://image.api.playstation.com/vulcan/img/rnd/202010/2618/itbSm3suGHSSHIpmu9CCPBRy.jpg",
      platformLogos: [
        "https://upload.wikimedia.org/wikipedia/commons/0/00/PlayStation_logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/e/e5/Xbox_Logo.svg"
      ],
      starRating: 9.3,
      genres: ['Action', 'Adventure', 'Survival Horror'],
      releaseYear: 2020
    },
    {
      type: 'anime',
      title: 'Attack on Titan',
      subtitle: 'Dark Fantasy, Post-apocalyptic',
      imageUrl: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/02/attackontitan_anime_colossustitan_eren.jpg",
      starRating: 9.5,
      genres: ['Dark Fantasy', 'Action', 'Survival'],
      releaseYear: 2013
    }
  ];
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
	 /* <div className="min-h-screen bg-white p-6">
      <div className="container mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-display text-primary mb-4">
            Media Explorer
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover and curate your favorite movies, games, and anime with our interactive media cards.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mediaItems.map((media, index) => (
            <Card
              key={index}
              type={media.type}
              title={media.title}
              subtitle={media.subtitle}
              imageUrl={media.imageUrl}
              imdbRating={media.imdbRating}
              starRating={media.starRating}
              platformLogos={media.platformLogos}
              genres={media.genres}
              releaseYear={media.releaseYear}
            />
          ))}
        </div>
      </div>
    </div>*/
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
