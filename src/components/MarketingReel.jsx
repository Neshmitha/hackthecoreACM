import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    title: "ACUMEN",
    subtitle: "HACK THE CORE",
    image: "/assets/marketing/hero.png",
    description: "The ultimate technical challenge awaits. Are you ready to dive into the core?"
  },
  {
    title: "ROUND 1: THE DECRYPTOR",
    subtitle: "MASTER THE GRID",
    image: "/assets/marketing/crossword.png",
    description: "Solve high-stakes digital crosswords. Every letter counts in the race against time."
  },
  {
    title: "ROUND 2: THE QUANTUM CHOICE",
    subtitle: "SPLIT-SECOND DECISIONS",
    image: "/assets/marketing/mcq.png",
    description: "Navigate through complex technical MCQs. One wrong move and the core destabilizes."
  },
  {
    title: "THE GRAND FINALE",
    subtitle: "CLAIM YOUR VICTORY",
    image: "/assets/marketing/victory.png",
    description: "Rise to the top of the leaderboard and become the ultimate Acumen champion."
  }
];

const MarketingReel = ({ onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="marketing-reel-overlay">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="reel-slide"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="reel-image-container">
            <img src={slides[currentSlide].image} alt={slides[currentSlide].title} />
            <div className="reel-gradient-overlay" />
          </div>

          <div className="reel-content">
            <motion.h4
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="reel-subtitle"
            >
              {slides[currentSlide].subtitle}
            </motion.h4>
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="reel-title neon-text"
            >
              {slides[currentSlide].title}
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="reel-description"
            >
              {slides[currentSlide].description}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="reel-controls">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`reel-dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      <button className="reel-close-btn" onClick={onClose}>×</button>

      <style jsx>{`
        .marketing-reel-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: #000;
          z-index: 9999;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }

        .reel-slide {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: center;
          padding: 10% 5%;
          text-align: center;
        }

        .reel-image-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
        }

        .reel-image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .reel-gradient-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 40%, transparent 100%);
        }

        .reel-content {
          max-width: 800px;
          margin-bottom: 50px;
        }

        .reel-subtitle {
          color: var(--neon-pink);
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700;
          letter-spacing: 4px;
          margin-bottom: 10px;
          text-transform: uppercase;
        }

        .reel-title {
          font-size: 4rem;
          margin-bottom: 20px;
          line-height: 1;
        }

        .reel-description {
          font-size: 1.2rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        .reel-controls {
          position: absolute;
          bottom: 30px;
          display: flex;
          gap: 12px;
        }

        .reel-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          cursor: pointer;
          transition: all 0.3s;
        }

        .reel-dot.active {
          background: var(--neon-blue);
          box-shadow: 0 0 10px var(--neon-blue);
          width: 30px;
          border-radius: 6px;
        }

        .reel-close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          background: none;
          border: none;
          color: #fff;
          font-size: 2.5rem;
          cursor: pointer;
          opacity: 0.5;
          transition: opacity 0.3s;
          z-index: 10000;
        }

        .reel-close-btn:hover {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .reel-title { font-size: 2.5rem; }
          .reel-description { font-size: 1rem; }
        }
      `}</style>
    </div>
  );
};

export default MarketingReel;
