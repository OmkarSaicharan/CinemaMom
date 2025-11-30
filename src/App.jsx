import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]);

  // Telugu Movie Data
  const teluguMoviesData = [
    {
      id: 1,
      title: 'Gundamma Katha – NTR, ANR, Savitri',
      language: 'telugu',
      year: 1962,
      imdb: 8.5,
      videoId: '7996TZ9lCeI'
    },
    {
      id: 2,
      title: 'Palletoori Pilla – ANR, NTR, Anjali Devi',
      language: 'telugu',
      year: 1954,
      imdb: 7.8,
      videoId: 'uppbKc7puTw'
    },
    {
      id: 3,
      title: 'Gunasundari Katha – Sriranjani, Kasturi Siva Rao',
      language: 'telugu',
      year: 1949,
      imdb: 7.2,
      videoId: '2euC7gqzLTw'
    },
    {
      id: 4,
      title: 'Drohi – Jaggayya, Vanisree',
      language: 'telugu',
      year: 1970,
      imdb: 7.0,
      videoId: 'MJRhl30ahKQ'
    },
    {
      id: 5,
      title: 'Nenu Meeku Baga Kaavalsinavaadini – Kiran Abbavaram',
      language: 'telugu',
      year: 2022,
      imdb: 6.5,
      videoId: 'A91ED_aZXvs'
    },
    {
      id: 6,
      title: 'Sarangadhariya – Latest Super Hit',
      language: 'telugu',
      year: 2023,
      imdb: 7.9,
      videoId: 'UKnYw_6QOJw'
    },
    {
      id: 7,
      title: 'Touch Chesi Chudu – Ravi Teja',
      language: 'telugu',
      year: 2018,
      imdb: 6.2,
      videoId: 'IUf7wbZUbAw'
    },
    {
      id: 8,
      title: 'Ye Endaka Godugu – Latest',
      language: 'telugu',
      year: 2023,
      imdb: 7.1,
      videoId: '3y3pRuLon_E'
    },
    {
      id: 9,
      title: '30 Rojullo Preminchadam Ela – Amritha Aiyer',
      language: 'telugu',
      year: 2023,
      imdb: 6.8,
      videoId: 'uDpRzwT1MZo'
    },
    {
      id: 10,
      title: 'UTSAVAM – Dilip Prakash, Regina Cassandra',
      language: 'telugu',
      year: 2021,
      imdb: 6.4,
      videoId: 'as0XMR9vyhg'
    }
  ];

  useEffect(() => {
    setMovies(teluguMoviesData);
    setFilteredMovies(teluguMoviesData);
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredMovies(movies);
    } else {
      const filtered = movies.filter(movie =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredMovies(filtered);
    }
  }, [searchQuery, movies]);

  const handleSearch = (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      const filtered = movies.filter(movie =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredMovies(filtered);
    }
  };

  const openModal = (videoId) => {
    setCurrentVideoId(videoId);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentVideoId('');
    document.body.style.overflow = 'auto';
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close modal when clicking outside
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <div className="App">
      {/* Floating Sci-Fi Elements */}
      <div className="floating-elements">
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
      </div>

      {/* Header */}
      <Header 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />

      {/* Hero Section */}
      <HeroSection />

      {/* Main Content */}
      <main className="container">
        {/* Language Filter */}
        <LanguageFilter />

        {/* Telugu Movies Section */}
        <MoviesSection 
          movies={filteredMovies}
          openModal={openModal}
          searchQuery={searchQuery}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Video Modal */}
      <VideoModal 
        isOpen={isModalOpen}
        videoId={currentVideoId}
        closeModal={closeModal}
      />
    </div>
  );
};

// Header Component
const Header = ({ searchQuery, setSearchQuery, handleSearch, isMobileMenuOpen, toggleMobileMenu }) => {
  return (
    <header>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <i className="fas fa-film"></i>
            <span>CinemaMom</span>
          </div>
          <button className="mobile-toggle" onClick={toggleMobileMenu}>
            <i className={isMobileMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
          </button>
          <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <a href="#home">Home</a>
            <a href="#movies">Movies</a>
            <a href="#new-releases">New Releases</a>
            <a href="#trending">Trending</a>
            <a href="#about">About</a>
          </div>
          <div className="search-bar">
            <input 
              type="text" 
              placeholder="Search for movies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyUp={handleSearch}
            />
            <button onClick={handleSearch}>
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1>Welcome to CinemaMom</h1>
        <p>Your premium destination for authentic Telugu cinema. Watch classic movies with direct official links.</p>
      </div>
    </section>
  );
};

// Language Filter Component
const LanguageFilter = () => {
  return (
    <div className="language-filter">
      <button className="lang-btn active">
        <i className="fas fa-play-circle"></i> Telugu Movies
      </button>
    </div>
  );
};

// Movies Section Component
const MoviesSection = ({ movies, openModal, searchQuery }) => {
  return (
    <section className="movies-section">
      <h2 className="section-title">
        <i className="fas fa-video"></i> Premium Telugu Cinema Collection
      </h2>
      <div className="movie-grid">
        {movies.length === 0 ? (
          <p style={{ 
            gridColumn: '1 / -1', 
            textAlign: 'center', 
            padding: '40px', 
            color: 'var(--text-muted)' 
          }}>
            No movies found matching your criteria.
          </p>
        ) : (
          movies.map(movie => (
            <MovieCard 
              key={movie.id}
              movie={movie}
              openModal={openModal}
              isHighlighted={searchQuery && movie.title.toLowerCase().includes(searchQuery.toLowerCase())}
            />
          ))
        )}
      </div>
    </section>
  );
};

// Movie Card Component
const MovieCard = ({ movie, openModal, isHighlighted }) => {
  return (
    <div className={`movie-card ${isHighlighted ? 'highlighted' : ''}`}>
      <h3 className="movie-title">{movie.title}</h3>
      <div className="movie-meta">
        <span>{movie.year}</span>
        <span className="imdb-rating">
          <i className="fas fa-star"></i> {movie.imdb}/10
        </span>
      </div>
      <button 
        className="play-btn" 
        onClick={() => openModal(movie.videoId)}
      >
        <i className="fas fa-play"></i> Play Movie
      </button>
    </div>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>CinemaMom</h3>
            <p>Your premium destination for authentic Telugu cinema. Watch the latest and classic movies with direct official links.</p>
            <div className="social-icons">
              <a href="#facebook"><i className="fab fa-facebook"></i></a>
              <a href="#twitter"><i className="fab fa-twitter"></i></a>
              <a href="#instagram"><i className="fab fa-instagram"></i></a>
              <a href="#youtube"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#movies">Movies</a></li>
              <li><a href="#new-releases">New Releases</a></li>
              <li><a href="#trending">Trending</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Languages</h3>
            <ul className="footer-links">
              <li><a href="#telugu">Telugu Movies</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Support</h3>
            <ul className="footer-links">
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#help">Help Center</a></li>
              <li><a href="#terms">Terms of Use</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2023 CinemaMom. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Video Modal Component
const VideoModal = ({ isOpen, videoId, closeModal }) => {
  if (!isOpen) return null;

  return (
    <div className="modal" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal" onClick={closeModal}>
          <i className="fas fa-times"></i>
        </button>
        <div className="video-container">
          <iframe 
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            allow="autoplay; encrypted-media" 
            allowFullScreen
            title="Movie Player"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default App;