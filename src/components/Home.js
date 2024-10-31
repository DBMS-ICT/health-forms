// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer'; 
import Header from './Header';



const Home = () => {
  return (
   
    <div className="bg-slate-200 flex flex-col justify-between h-screen">
      <div className="!bg-slate-200 p-4 md:bg-slate-100">
        
      <Header />
      </div>
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold">Ministry Of Peshmerga</h1>
      </header>
     
      <div className="flex flex-col items-center space-y-4 mb-8">
        <Link 
          to="/Health-form" 
          className="bg-green-500 text-white px-6 py-3 rounded shadow hover:bg-green-600 transition duration-200 w-full md:w-auto"
        >
          Go to Health Form
        </Link>
        <Link 
          to="/Hawalgry-form" 
          className="bg-blue-500 text-white px-6 py-3 rounded shadow hover:bg-blue-600 transition duration-200 w-full md:w-auto"
        >
          Go to Hawalgry Form
        </Link>
      </div>

      <Footer /> 
    </div>
  );
};

export default Home;
