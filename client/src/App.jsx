import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import StoryPage from './containers/StoryPage';
import Navbar from './components/DaisyuiNavBar';
import HomePage from './containers/HomePage';
import ContactPage from './containers/ContactPage';

function App() {
  return (
    <div>
    <div>
      <Navbar />
    </div>
    <Router>
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/ContactPage" element={<ContactPage />} />
        <Route path="/StoryPage" element={<StoryPage />} />
        {/* Add more routes for other pages if needed */}
      </Routes>
    </Router>
    </div>

  );
}

export default App; // This should be the only default export in App.jsx
