import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Works from './pages/Works';
import Navbar from './components/Navbar';
import CaseStudies from './components/CaseStudies';
import ThemeContext from './contexts/ThemeContext';


const App = () => {

  return (
    <ThemeContext.Provider value={ {themeIsDark: 'the default light mode'} }>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/works/:year' element={ <Works /> } />
          <Route path='/works/case-studies' element={ <CaseStudies /> } />
        </Routes>
      </Router>
    </ThemeContext.Provider>
  )
}

export default App;