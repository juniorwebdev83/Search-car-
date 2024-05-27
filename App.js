import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import UserProfile from './components/UserProfile';
import CarPosts from './components/CarPosts';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path="/profile" component={UserProfile} />
        <Route path="/carposts" component={CarPosts} />
      </div>
    </Router>
  );
};

export default App;
