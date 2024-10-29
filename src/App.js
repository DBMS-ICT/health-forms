import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hawalgryform from './components/Hawalgryform';
import Healthform from './components/Healthform';
import Login from './components/Login';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';



const App = () => {
    return (
        <div className="App">
            <Router>
                <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                    <Route path="/" element={<Login />} />
                    <Route path="/Health-form" element={<Healthform />} />
                    <Route path="/Hawalgry-form" element={<Hawalgryform />} />
                    <Route path='/Home' element={<Home />}/>
                    {/* Add any additional routes here */}
                </Routes>
            </Router>
            {/* Uncomment if you want to render these components directly */}
            {/* <Hawalgryform /> */}
            {/* <Healthform /> */}
         
        </div>
        
    );
};

export default App;