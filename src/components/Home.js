import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Home</h1>
      <p className="mb-4">You have access to both forms.</p>
      <div>
        <Link to="/Health-form" className="bg-green-500 text-white px-4 py-2 rounded mr-2">
          Go to Health Form
        </Link>
        <Link to="/Hawalgry-form" className="bg-blue-500 text-white px-4 py-2 rounded">
          Go to Hawalgry Form
        </Link>
      </div>
    </div>
  );
};

export default Home;
