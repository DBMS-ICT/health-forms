
import React, { useEffect, useState } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useTranslation } from 'react-i18next';
import Header from './Header';
import Footer from './Footer';



export default function Healthform ()  {
  const [gender, setGender] = useState('');
  const [yesno,setyesno]=useState('');
  const[yesnohear,setyesnohear]=useState('');
  const[fullname,setfullname]=useState('');
  const[bloodgroup,setbloodgroup]=useState('');
  const[weight,setweight]=useState('');
  const[height,setheight]=useState('');
  const[birthday,setbirthday]=useState('');
  const[illnesses,setillnesses]=useState('');
  const[sensitive,setsensitive]=useState('');
  const[sick,setsick]=useState('');
  const[sensitivity,setsensitivity]=useState('');
  const [error, setError] = useState('');
  const [fullnameError, setFullnameError] = useState('');
const [bloodgroupError, setBloodgroupError] = useState('');
const[dateError,setdateError]=useState('');
const[genderError,setgenderError]=useState('');
const[heightError,setheightError]=useState('');
const[weighttError,setweightError]=useState('');
const[handleChangeyesnoError,sethandleChangeyesnoError]=useState('');
const[handleChangeyesnohearError,sethandleChangeyesnohearError]=useState('');
  

  
  const handleChange = (e) => {
    setGender(e.target.value);
    
  };
  const handleChangeyesno = (e) => {
    setyesno(e.target.value);
    
 };
  const handleChangeyesnohear = (e) => {
    setyesnohear(e.target.value);
    
  };
  
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const validateFullname = (value) => {
    const regex = /^[A-Za-z\s]*$/; // Regex to allow only letters and spaces
    return regex.test(value);
  };
  const handleFullnameChange = (e) => {
    const value = e.target.value;
    if (validateFullname(value) || value === '') {
      setfullname(value);
      setError('');
    } else {
      setError('Only letters and spaces are allowed in the fullname.');
    }
  };
  const validateNumber = (value) => {
    const regex = /^\d*$/; // Regex to allow only digits (0-9)
    return regex.test(value);
};

const handleNumberChange = (e) => {
    const value = e.target.value;
    if (validateNumber(value) || value === '') {
        setheight(value);                         
       setheightError('');
    } else {
      setheightError('Only numbers are allowed.');
    }
};
const handleNumberChangeweight = (e) => {
  const value = e.target.value;
  if (validateNumber(value) || value === '') {
      setweight(value);
      setweightError('');
  } else {
      setweightError('Only numbers are allowed.');
  }
};
  useEffect(() => {
    document.title = t('title'); 
  }, [i18n.language, t]);
 
   // Determine text alignment based on the current language
   const textAlign = i18n.language === 'ar' || i18n.language === 'ku' ? 'right' : 'left';
  const submit=(e)=>
  {
    e.preventDefault();
    
    setFullnameError('');
    setBloodgroupError('');

    // Validate fullname
    if (!fullname.trim()) {
        setFullnameError('Full name is required.');
    }

    // Validate bloodgroup
    if (!bloodgroup.trim()) {
        setBloodgroupError('Blood group is required.');
    }
    //validate datebirthday
    if (!dateError.trim()) {
     setdateError('Date of Birthday is required.');
  }
  //validate gender
  if (!genderError.trim()) {
   setgenderError('Gender is required.');
}
//validate height
if (!heightError.trim()) {
 setheightError('Height is required.');
}
//validate weight
if (!weighttError.trim()) {
 setweightError('Weight is required.');
}
if (!handleChangeyesnoError.trim()) {
  sethandleChangeyesnoError(' required.');
 }
 if (!handleChangeyesnohearError.trim()) {
  sethandleChangeyesnohearError(' required.');
 }
    // If there are errors, prevent submission
    if (fullnameError || bloodgroupError || dateError||genderError||heightError||weighttError||handleChangeyesnoError||handleChangeyesnohearError) {
        return;
    }
    // Define the map object with appropriate properties
    const map = {
        fullname,
       bloodgroup,
        weight,
       height,
        gender,
        yesno,
        yesnohear,
        sick,
        illnesses,
        sensitive,
        sensitivity,
        birthday,
    };

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(map),
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then((body) => {
        console.log(body);
        setfullname("");
        setbloodgroup("");
        setweight("");
        setheight("");
        setGender("");
        setyesno("");
        setyesnohear("");
        setsick("");
        setillnesses("");
       setsensitive("");
        setsensitivity("");
        setbirthday("");
        
        console.log("Your post has been submitted successfully.");
    })
    .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        console.log("There was an error submitting your post."); // Notify user of error
    });
};

  return (
 <>
  <div className="bg-gradient-to-r from-emerald-400 to-cyan-400 ">
  
<Header />
</div>
    <div className="bg-gradient-to-r from-emerald-400 to-cyan-400 min-h-screen flex items-center justify-center">
   
      <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">

        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
          <div className="rounded-t bg-white mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
              <h6 className="text-blueGray-700 text-xl font-bold mx-auto text-center " >
              {t('Health Form')}
              </h6>
     
              
        <div lassName="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150">
        <select onChange={(e) => changeLanguage(e.target.value)} defaultValue={i18n.language}>
        <option value="en">English</option>
        <option value="ku">kurdish</option>
        <option value="ar">Arabic</option>
      </select>
           
        </div>
            </div>
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form onSubmit={submit}>
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase"style={{ textAlign }}>
              {t('User Information')}
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2 " htmlFor="username"style={{ textAlign }}>
                    {t('FullName')}
                   
                    </label>
                    <input 
                    type="text"
                     id="fullname"
                     value={fullname}
                     onChange={handleFullnameChange}
                     
                     className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                 {fullnameError && <p style={{ color: 'red' }}>{fullnameError}</p>}
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" style={{ textAlign }}>
                    {t('Date Of Birthday')}
                    </label>
                    <input 
                    id="birthday" 
                    value={birthday}
                    onChange={
                      (e)=>
                      {
                    setbirthday(e.target.value);
                      }

                    }
                     className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                 {dateError && <p style={{ color: 'red' }}>{dateError}</p>}
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
      <h6 className="block uppercase text-blueGray-600 text-xs font-bold mb-2" style={{ textAlign }}>
      {t('Gender')}
      </h6>
      <div className={`flex ${i18n.language === 'ku' || i18n.language === 'ar' ? 'flex-row-reverse' : 'flex-row'} space-x-4`}>
        <label className="flex items-center">
          <input
            type="radio"
            value="male"
            id='male'
            checked={gender === 'male'}
            onChange={handleChange}
           
            className="form-radio h-4 w-4 text-blue-600 border-gray-300 focus:ring focus:ring-blue-500"
          />
          <span className="ml-2 text-blueGray-600"> {t('Male')}</span>
        </label>
        <label className="flex items-center">
          <input
         checked={gender === 'female'}
         onChange={handleChange}
           id='female'
            type="radio"
            value="female"
        
           
          
            className="form-radio h-4 w-4 text-blue-600 border-gray-300 focus:ring focus:ring-blue-500"

          />
          <span className={`ml-2 text-blueGray-600 ${i18n.language === 'ku' ? 'mr-2 ml-0' : ''}`}>{t('Female')}</span>
        </label>
      
      </div>
      {genderError && <p style={{ color: 'red' }}>{genderError}</p>}
    </div>
    </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" style={{ textAlign }}>
                    {t('Blood Group')}
                    </label>
                    <input
                     type="text"
                      id="bloodgroup" 
                      value={bloodgroup}
                      onChange={(e)=>{
                        setbloodgroup(e.target.value)
                       }
                      }
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  {bloodgroupError && <p style={{ color: 'red' }}>{bloodgroupError}</p>}
                  </div>
                </div>
                
              </div>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2 " htmlFor="username"style={{ textAlign }}>
                    {t('Weight')}
                   
                    </label>
                    <input 
                    type="text" 
                    id="weight" 
                    value={weight}
                   onChange={handleNumberChangeweight}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                 {weighttError && <p style={{ color: 'red' }}>{weighttError}</p>}
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" style={{ textAlign }}>
                    {t('Height')}
                    </label>
                    <input 
                    id="height" 
                    value={height}
                   onChange={handleNumberChange}
                     className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                   {heightError && <p style={{ color: 'red' }}>{heightError}</p>}
                  </div>
                </div>
                </div>
            

    <div className="flex flex-wrap">
  <div className="w-full lg:w-6/12 px-4">
    <div className="relative w-full mb-3">
      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="illnesses"style={{ textAlign }}>
 
        {t('Identify any illnesses youve had or are currently?')}
      </label>

      <Menu 
      as="div" 
      id="sick"
      
      className="relative inline-block text-center w-full">
        <div>
          <MenuButton className="inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" >
          {t('options')}

            <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
          </MenuButton>
        </div>

        <MenuItems
          transition
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
        >
          <div className="py-1">
            {["The Disease of the Heart", "Blood Pressure", "Diabetes", "Bones and Joints", "Kidney Disease", "Liver Disease", "Mental Illness"].map((item, index) => (
              <MenuItem key={index} onSelect={() => setsick(item)}>
                <p
                
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                >
                   {t(item)}
                </p>
              </MenuItem>
            ))}
          </div>
        </MenuItems>
      </Menu>
    </div>
  </div>

  <div className="w-full lg:w-6/12 px-4">
    <div className="relative w-full mb-3">
      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"style={{ textAlign }}>
     
        {t('If there is any problem please explain')}
       
      </label>
      <input
        type="text"
        value={illnesses}
         onChange={(e)=>{
           setillnesses(e.target.value)
          }
         }
       
        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
      />
    </div>
    
  </div>
  

              
              </div>
              <div className="flex flex-wrap">
  <div className="w-full lg:w-6/12 px-4">
    <div className="relative w-full mb-3">
      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" style={{ textAlign }}>
  
      {t('Do you have a sensitivity to it?')}
      </label>

      <Menu 
      id="sensitivity"
      
     

      as="div" 
      className="relative inline-block text-center w-full">
        <div>
          <MenuButton className="inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" >
          {t('options')}

            <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
          </MenuButton>
        </div>

        <MenuItems
          transition
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
        >
          <div className="py-1">
            {["Medication", "Food", "Something else"].map((item, index) => (
              <MenuItem   key={index} onSelect={() =>setsensitivity(item)}>
                <p
            
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                >
                  {t(item)}
                </p>
              </MenuItem>
            ))}
          </div>
        </MenuItems>
      </Menu>
    </div>
  </div>

  <div className="w-full lg:w-6/12 px-4">
    <div className="relative w-full mb-3">
      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"style={{ textAlign }}>
   
      {t('If yes please specify it')}
      </label>
      <input
        type="text"
        value={sensitive}
          onChange={(e)=>{
           setsensitive(e.target.value)
          }
         }
        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
      />
    </div>
  </div>
  </div>

  <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" style={{ textAlign }}>
                   
                  {t('wrire down the name of each medication you are currently taking')}
                    </label>
                    <input type="text"  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" style={{ textAlign }}>
                  
               {t('Any surgery or injuries that have occurred')}
                    </label>
                    <input   className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
      <h6 className="block uppercase text-blueGray-600 text-xs font-bold mb-2" style={{ textAlign }}>
    
       {t('Do you use glasses or lenses?')}
      </h6>
      <div className={`flex ${i18n.language === 'ku' || i18n.language === 'ar' ? 'flex-row-reverse' : 'flex-row'} space-x-4`}>
        <label className="flex items-center">
          <input
            type="radio"
            value="Yes"
            checked={yesno === 'Yes'}
            onChange={handleChangeyesno}
           
            className="form-radio h-4 w-4 text-blue-600 border-gray-300 focus:ring focus:ring-blue-500"
          />
          <span className={`ml-2 text-blueGray-600 ${i18n.language === 'ku'|| i18n.language === 'ar' ? 'mr-2 ml-0' : ''}`}>{t('Yes')}</span>
        </label>
        <label className="flex items-center">
          <input
         checked={yesno === 'No'}
         onChange={handleChangeyesno}
      
            type="radio"
            value="No"
        
           
          
            className="form-radio h-4 w-4 text-blue-600 border-gray-300 focus:ring focus:ring-blue-500"
          />
               
          <span className={`ml-2 text-blueGray-600 ${i18n.language === 'ku' || i18n.language === 'ar' ? 'mr-2 ml-0' : ''}`}>{t('No')}</span>
        </label>
      
      </div>
      {handleChangeyesnoError && <p style={{ color: 'red' }}>{handleChangeyesnoError}</p>}
    </div>
    </div>
    <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
      <h6 className="block uppercase text-blueGray-600 text-xs font-bold mb-2" style={{ textAlign }}>
   
       {t('Do you have any hearing problems?')}
      </h6>
      <div className={`flex ${i18n.language === 'ku'|| i18n.language === 'ar' ? 'flex-row-reverse' : 'flex-row'} space-x-4`}>
        <label className="flex items-center">
          <input
            type="radio"
            value="Yes"
            checked={yesnohear === 'Yes'}
            onChange={handleChangeyesnohear}
           
            className="form-radio h-4 w-4 text-blue-600 border-gray-300 focus:ring focus:ring-blue-500"
       
          />
               
          <span className="ml-2 text-blueGray-600">{t('Yes')}</span>
        </label>
        <label className="flex items-center">
          <input
         checked={yesnohear === 'No'}
         onChange={handleChangeyesnohear}
      
            type="radio"
            value="No"
        
           
          
            className="form-radio h-4 w-4 text-blue-600 border-gray-300 focus:ring focus:ring-blue-500"
          />
          <span className="ml-2 text-blueGray-600">{t('No')}</span>
        </label>
       
      </div>
      {handleChangeyesnohearError && <p style={{ color: 'red' }}>{handleChangeyesnohearError}</p>}
    </div>

    </div>
    
              </div>

              <div className="flex justify-start">
    <button className="bg-green-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="submit">
    {t('Submit')}
    </button>
</div>
             
            </form>
          </div>
        </div>
      
      </div>
    </div>
    <Footer />
    </>
  );
};


