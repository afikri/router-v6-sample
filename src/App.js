
import React from 'react';
import { Routes, Route } from "react-router-dom"
import { Home, About, NotFound, Navbar } from './components/index';


function App() {
  return (
    <div className="App">
      <Navbar/>

      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
