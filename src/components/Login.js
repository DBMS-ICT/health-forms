import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import logo from '../assets/img/wazaratypeshmarga.png'; 

const Login = () => {
  const navigate = useNavigate(); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); 

  const emailRule1 = "emailhealth@gmail.com"; 
  const passwordRule1 = "123456"; 
  const emailRule2 = "emailhawalgry@gmail.com"; 
  const passwordRule2 = "123456"; 
  const emailRule3 = "email12345@gmail.com"; 
  const passwordRule3 = "123456"; 

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault(); 

    if (email === emailRule1 && password === passwordRule1) {
      navigate('/Health-form');
    } else if (email === emailRule2 && password === passwordRule2) {
      navigate('/Hawalgry-form');
    } else if (email === emailRule3 && password === passwordRule3) {
      navigate('/Home');
    } else {
      alert('Invalid email or password'); 
    }
  };

  return (
    <div className="bg-gradient-to-r from-emerald-400 to-cyan-400 min-h-screen flex items-center justify-center">
      <div className="w-full sm:w-4/12 md:w-3/12 lg:w-1/4 px-4 mx-auto mt-6">
        <div className="flex flex-col items-center">
          <img 
            src={logo} 
            alt="Ministry of Peshmerga" 
            className="mb-4 w-20 h-auto" 
          />
        </div>
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
          <div className="rounded-t bg-white mb-0 px-6 py-6">
            <div className="text-center flex justify-between"></div>
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form onSubmit={handleLogin}>
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase text-center">
                Sign in
              </h6>
              <div className="block">
                <div className="w-full lg:w-11/12 px-4"> 
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                      Email
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      value={email} 
                      onChange={handleEmailChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
                    />
                  </div>
                </div>
                <div className="w-full lg:w-11/12 px-4"> 
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                      Password
                    </label>
                    <input 
                      type={showPassword ? "text" : "password"} 
                      id="password" 
                      value={password} 
                      onChange={handlePasswordChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
                    />
                  </div>
                  <button 
                    type="button" 
                    onClick={toggleShowPassword} 
                    className="text-sm text-blueGray-600"
                  >
                    {showPassword ? 'Hide Password' : 'Show Password'}
                  </button>
                </div>
              </div>
              
              <div className="flex justify-center">
                <button 
                  className="bg-green-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" 
                  type="submit" 
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
