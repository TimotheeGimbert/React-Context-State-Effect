import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// PAGES
import Home from './pages/Home';
import Works from './pages/Works';
// COMPONENTS
import Navbar from './components/Navbar';
import CaseStudies from './components/CaseStudies';


const App = () => (
  <Router>

    <Navbar />

    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/works' element={ <Works /> } />
      <Route path='/works/case-studies' element={ <CaseStudies /> } />
    </Routes>

  </Router>
)

export default App;