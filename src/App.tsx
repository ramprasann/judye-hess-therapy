import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { MyPractice } from './pages/MyPractice';
import { AboutMe } from './pages/AboutMe';
import { Qualifications } from './pages/Qualifications';
import { Publications } from './pages/Publications';
import { FamilyTherapy } from './pages/FamilyTherapy';
import { CouplesTherapy } from './pages/CouplesTherapy';
import { GroupTherapy } from './pages/GroupTherapy';
import { Blog } from './pages/Blog';
import { BlogDetails } from './pages/BlogDetails';
import { Contact } from './pages/Contact';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-practice" element={<MyPractice />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/my-qualifications" element={<Qualifications />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/family-therapy" element={<FamilyTherapy />} />
        <Route path="/couples-therapy" element={<CouplesTherapy />} />
        <Route path="/group-therapy" element={<GroupTherapy />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact-location" element={<Contact />} />
        
        {/* URL Aliases and Redirects to preserve 100% original inbound links */}
        <Route path="/contact" element={<Navigate to="/contact-location" replace />} />
        <Route path="/contact-and-location" element={<Navigate to="/contact-location" replace />} />

        {/* Individual Blog Article Routes */}
        <Route path="/less-is-more" element={<BlogDetails />} />
        <Route path="/walking-the-tightrope-of-intimacy" element={<BlogDetails />} />
        <Route path="/dual-dwelling-duos" element={<BlogDetails />} />
        <Route path="/got-questions" element={<BlogDetails />} />
        <Route path="/blog/:slug" element={<BlogDetails />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
