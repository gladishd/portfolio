import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Me from './Me';
import Projects from './Projects';
import Work from './Work';
import Education from './Education';

const Pages = ({ user }) => {
  return (
    <Router>
      <Routes>
        <Route exact path="/portfolio/" element={<Me user={user} />} />
        <Route path="/portfolio/projects" element={<Projects user={user} />} />
        <Route path="/portfolio/work" element={<Work user={user} />} />
        <Route path="/portfolio/education" element={<Education user={user} />} />
      </Routes>
    </Router>
  );
};

export default Pages;
