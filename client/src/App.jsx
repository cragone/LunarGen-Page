import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ContactPage from './containers/ContactPage';
import Navbar from './components/DaisyuiNavBar';
import HomePage from './containers/HomePage';

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
        {/* Add more routes for other pages if needed */}
      </Routes>
    </Router>
    </div>

  );
}

export default App; // This should be the only default export in App.jsx
