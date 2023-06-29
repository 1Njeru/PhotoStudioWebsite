import Header from './components/Header';
import AnimRoutes from './components/AnimRoutes';
import React from 'react';

import {BrowserRouter as Router} from 'react-router-dom'
import { motion } from 'framer-motion'
import About from './pages/Abot';
import Portfolio from './pages/Portfolio';


const App = () => {
  return  (
  <>
  <Router>
  <Header />
  <AnimRoutes />
  
  
  </Router>
  </>

  )
};

export default App;
