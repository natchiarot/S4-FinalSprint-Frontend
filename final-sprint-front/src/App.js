import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HTMLPage from './HTMLPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HTMLPage filePath="/home.html" />} />
      <Route path="/alert" element={<HTMLPage filePath="/alert.html" />} />
      <Route path="/signin" element={<HTMLPage filePath="/signin.html" />} />
      <Route path="/signup" element={<HTMLPage filePath="/signup.html" />} />
      <Route path="/resume-search" element={<HTMLPage filePath="/resumeSearch.html" />} />
      <Route path="/resume-search-results" element={<HTMLPage filePath="/resumeSearchResults.html" />} />
      <Route path="/resume-view" element={<HTMLPage filePath="/resumeView.html" />} />
      <Route path="*" element={<HTMLPage filePath="/404.html" />} />
    </Routes>
  </Router>
);

export default App;
