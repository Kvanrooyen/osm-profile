// src/App.js

import React from 'react';
import ProfileOverview from './components/ProfileOverview';
import RecentChangesets from './components/RecentChangesets';
import './App.css';

function App() {
  return (
    <div className="App">
      <ProfileOverview />
      <RecentChangesets/>
    </div>
  );
}

export default App;
