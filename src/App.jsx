// App.jsx - CORRETTO COMPLETO

import React, { Suspense, lazy } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import './App.css';

//  IMPORT ChristmasTime
const ChristmasTime = lazy(() => import('./tasks/ChristmasTime'));

function TaskListHome() {
  const tasks = [
    { id: 1, name: 'Click here for Christmas Experience🎄', path: '/task1' },
  ];

  return (
  <div className="home-container">
     <div style={{ position: 'relative', zIndex: 2 }}>
        <header className="home-header">
          <h1>🎄 Practice Lab Final - CHRISTMAS EDITION 🎄</h1>
          <p className="subtitle">by Federico Lanzafame</p>
        </header>
<section className="tasks-grid">
  <Link to="/task1" className="christmas-cta">
    <span className="cta-left">
      <span className="cta-label">Christmas Experience</span>
      <span className="cta-sub">Click to start the magic</span>
    </span>
    <span className="cta-right">
      🎅🛷✨
    </span>
  </Link>
</section>

      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<TaskListHome />} />
          {/*  ROUTE AGGIUNTA */}
          <Route
            path="/task1"
            element={
              <Suspense fallback={<div className="loading-container"><div className="spinner"></div><p>Caricamento...</p></div>}>
                <ChristmasTime />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
