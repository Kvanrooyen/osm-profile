// src/App.js

import React from 'react';
import ProfileOverview from './components/ProfileOverview';
import RecentChangesets from './components/RecentChangesets';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <ProfileOverview />
      <RecentChangesets />
      <Footer />
    </div>
  );
}

export default App;
