// src/tasks/ChristmasTime.jsx - NEVE CSS PERFETTA
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function ChristmasTime() {
  return (
    <div className="christmas-container">
      {/* MUSIC */}
      <audio autoPlay loop>
        <source src="/background.mp3" type="audio/mp3" />
      </audio>

      {/* NEVE CSS - 25 FIOCCHI STABILI */}
      <div className="snow-background">
        {Array.from({ length: 25 }, (_, i) => (
          <div key={i} className="snowflake" style={{ '--i': i }}></div>
        ))}
      </div>

      {/* TITOLO + MESSAGGIO */}
      <header className="christmas-header">
        <h1>🎄 Christmas Time 🎄</h1>
        <p className="christmas-message">
          Professor,<br /><br />
          I truly wanted to thank you for the experience you shared with us throughout this course.<br />
          It wasn't just a path of study; it was a journey filled with discovery, effort, curiosity, and above all, growth.<br /><br />
          You didn't simply teach us concepts.<br />
          You passed on a way of thinking, of approaching challenges with clarity and passion.<br />
          And that means far more than any single lesson.<br /><br />
          With sincere gratitude. ✨
        </p>
        <p className="signature">Federico Lanzafame</p>
      </header>

      {/* BACK BUTTON */}
      <div className="back-button-container">
        <Link to="/" className="back-button">
          ← Torna alla Home
        </Link>
      </div>
    </div>
  );
}

export default ChristmasTime;
