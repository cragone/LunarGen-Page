import React, {useState} from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import StoryPage from './containers/StoryPage';
import Navbar from './components/DaisyuiNavBar';
import HomePage from './containers/HomePage';
import ContactPage from './containers/ContactPage';
import LoadingContext from './components/LoadingContext';

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {loading && <img src="https://loading.io/asset/733820"/>}
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
    </LoadingContext.Provider>
  );
}

export default App; // This should be the only default export in App.jsx
