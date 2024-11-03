
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie'; // Import Cookies
import { useTranslation } from 'react-i18next';
import Header from './Header';
import Footer from './Footer';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


export default function Hawalgryform  ()  {
   
    const [currentStep, setCurrentStep] = useState(1);
    const[fullname,setfullname]=useState('');
    const[location,setlocation]=useState('');
    const[age,setage]=useState('');
    const[certificate,setcertificate]=useState('');
    const[partyMember,setpartyMember]=useState('');
    const[partyName,setpartyName]=useState('');
    const[connectionDate,setconnectionDate]=useState(null);
    const[supporter,setsupporter]=useState('');
    const[traveled,settraveled]=useState('');
    const[citizenship,setcitizenship]=useState('');
    const[Supportheadquarters,setSupportheadquarters]=useState('');
    const[namefather,setnamefather]=useState('');
    const[fatherlive,setfatherlive]=useState('');
    const[fatherwork,setfatherwork]=useState('');
    const[ fatherparty,setfatherparty]=useState('');
    const[ namemother,setnamemother]=useState('');
    const[motherlive,setmotherlive]=useState('');
    const[motherwork,setmotherwork]=useState('');
    const[partymother,setpartymother]=useState('');
    const[ namebrother,setnamebrother]=useState('');
    const[brotherlive,setbrotherlive]=useState('');
    const[brotherwork,setbrotherwork]=useState('');
    const[partybrother,setpartybrother]=useState('');
    const[namesister,setnamesister]=useState('');
    const[sisterlive,setsisterlive]=useState('');
    const[sisterwork,setsisterwork]=useState('');
    const[partysister,setpartysister]=useState('');
    const[fatherbrother,setfatherbrother]=useState('');
    const[fatherbrotherlive,setfatherbrotherlive]=useState('');
    const[fatherbrotherwork,setfatherbrotherwork]=useState('');
    const[partyfatherbrother,setpartyfatherbrother]=useState('');
    const[motherbrother,setmotherbrother]=useState('');
    const[motherbrothelive,setmotherbrothelive]=useState('');
    const[motherbrothework,setmotherbrothework]=useState('');
    const[partymotherbrother,setpartymotherbrother]=useState('');
    const[mothersister,setmothersister]=useState('');
    const[mothersisterlive,setmothersisterlive]=useState('');
    const[mothersisterwork,setmothersisterwork]=useState('');
    const[partymothersister,setpartymothersister]=useState('');
    const[fathersister,setfathersister]=useState('');
    const[fathersisterlive,setfathersisterlive]=useState('');
    const[fathersisterwork,setfathersisterwork]=useState('');
    const[partyfathersister,setpartyfathersister]=useState('');
    const [error, setError] = useState('');
    const [locationError, setlocationError] = useState('');
    const[ageError,setageError]=useState('');
    const[cirtificateError,setcirtificateError]=useState('');
    const[partyNameError,setpartyNameError]=useState('');
    const[dateError,setdateError]=useState('');
    const[supporterError,setsupporterError]=useState('');
    const[namefatherError,setnamefatherError]=useState('');
    const[fatherliveError,setfatherliveError]=useState('');
    const[fatherworkError,setfatherworkError]=useState('');
    const[partynamefatherError,setpartnamefatherError]=useState('');
    const[fullnameError,setfullnameError]=useState('');
    const[namemotherError,setnamemotherError]=useState('');
    const[motherliveError,setmotherliveError]=useState('');
    const[motherworkError,setmotherworkError]=useState('');
    const[partynamemotherError,setpartnamemotherError]=useState('');

    const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    document.title = t('title'); 
  }, [i18n.language, t]);
   // Determine text alignment based on the current language
   const textAlign = i18n.language === 'ar' || i18n.language === 'ku' ? 'right' : 'left';
 
  const [yesno,setyesno]=useState('');

  const handleChange = (e) => {
   setyesno(e.target.value);
    
  };
   

  const [yesnosafar,setyesnosafar]=useState('');

  const handleChangesafar = (e) => {
   setyesnosafar(e.target.value);
    
  };
  const handleNext = () => {
    // Save the current form data to cookies
   
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const validateFullname = (value) => {
    const regex = /^[A-Za-z\s]*$/; // Regex to allow only letters and spaces
    return regex.test(value);
  };
  //validate age
const validateNumber = (value) => {
  const regex = /^\d*$/; // Regex to allow only digits (0-9)
  return regex.test(value);
};

  const handleFullnameChange = (e) => {
    const value = e.target.value;
    if (validateFullname(value) || value === '') {
      setfullname(value);
     setfullnameError('');
    } else {
      setfullnameError('Only letters and spaces are allowed in the fullname.');
    }
  };
  const handleAgeChange = (e) => {
    const value = e.target.value;
    if (validateNumber(value) || value === '') {
        setage(value);                         
       setageError('');
    } else {
     setageError('Only numbers are allowed.');
    }
  };

  //validate name father
  const validatenamefather = (value) => {
    const regex = /^[A-Za-z\s]*$/; // Regex to allow only letters and spaces
    return regex.test(value);
  };
 
  const handlenamefatherChange = (e) => {
    const value = e.target.value;
    if (validatenamefather(value) || value === '') {
    setnamefather(value);
     setnamefatherError('');
    } else {
     setnamefatherError('Only letters and spaces are allowed in the Name father.');
    }
  };
  //validate name mother
  const validatenamemother = (value) => {
    const regex = /^[A-Za-z\s]*$/; // Regex to allow only letters and spaces
    return regex.test(value);
  };
 
  const handlenamemotherChange = (e) => {
    const value = e.target.value;
    if (validatenamemother(value) || value === '') {
   setnamemother(value);
     setnamemotherError('');
    } else {
     setnamemotherError('Only letters and spaces are allowed in the Name Mother.');
    }
  };
 

const submit=(e)=>{
  e.preventDefault();
  setError('');
  setdateError('');
  setlocationError('');
  setageError('');
  setpartyNameError('');
  setsupporterError('');
  setnamefatherError('');
  setfatherliveError('');
  setfatherworkError('');
setpartnamefatherError('');
setnamemotherError('');
setmotherliveError('');
setmotherworkError('');
setpartnamemotherError('');

  
  let hasError = false; // Flag to check if there are errors
  //validate location
  if (!location.trim()) {
   setlocationError('Blood group is required.');
    hasError = true;
}
//validate certificate
if (!certificate.trim()) {
setcirtificateError('certificate is required.');
   hasError = true;
}
//validate party name
if (!partyName.trim()) {
  setpartyNameError('Party Name is required.');
     hasError = true;
  }
  //validate date connection
  if (!dateError.trim()) {
    setdateError('Date connection is required.');
    hasError = true;
 }
 //validate suport you
 if (!supporterError.trim()) {
 setsupporterError('who is suport you is required.');
  hasError = true;
}
//validate father live
 if (!fatherliveError.trim()) {
 setfatherliveError('Father live you is required.');
  hasError = true;
}
//validate father work
 if (!fatherworkError.trim()) {
 setfatherworkError('Father work is required.');
  hasError = true;
}
//validate father party name
 if (!partynamefatherError.trim()) {
 setpartnamefatherError('Party name is required.');
  hasError = true;
}



  const map ={
    fullname,
    location,
    age,
    certificate,
    partyMember,
    partyName,
    connectionDate: connectionDate.toISOString().split('T')[0],
    supporter,
    traveled,
    citizenship,
    Supportheadquarters,
    namefather,
    fatherlive,
    fatherwork,
    fatherparty,
    namemother,
    motherwork,
    partymother,
    motherlive,
    namebrother,
    brotherlive,
    brotherwork,
    partybrother,
    namesister,
    sisterwork,
    sisterlive,
    partysister,
    fatherbrother,
    fatherbrotherwork,
    fatherbrotherlive,
    partyfatherbrother,
    motherbrother,
    motherbrothework,
    motherbrothelive,
    partymotherbrother,
    mothersister,
    mothersisterwork,
    mothersisterlive,
    partymothersister,
    fathersister,
    fathersisterlive,
    fathersisterwork,
    partyfathersister,
  
}
   
 
  
 

 

  
  
  
   // Determine text alignment based on the current language
   const textAlign = i18n.language === 'ar' || i18n.language === 'ku' ? 'right' : 'left';
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
    setlocation("");
    setage("");
    setcertificate("");
    setyesno("");
    setpartyMember("");
    setpartyName("");
    setconnectionDate(null);
    setsupporter("");
    settraveled("");
    setcitizenship("");
    setyesnosafar("");
    setSupportheadquarters("");
    setnamefather("");
    setfatherlive("");
    setfatherwork("");
    setfatherparty("");
    setnamemother("");
    setmotherwork("");
    setpartymother("");
    setmotherlive("");
    setnamebrother("");
    setbrotherlive("");
    setbrotherwork("");
    setpartybrother("");
    setnamesister("");
    setsisterwork("");
    setsisterlive("");
    setpartysister("");
    setfatherbrother("");
    setfatherbrotherwork("");
    setfatherbrotherlive("");
    setpartyfatherbrother("");
    setmotherbrother("");
    setmotherbrothework("");
    setmotherbrothelive("");
    setpartymotherbrother("");
    setmothersister("");
    setmothersisterwork("");
    setmothersisterlive("");
    setpartymothersister("");
    setfathersister("");
    setfathersisterlive("");
    setfathersisterwork("");
   setpartyfathersister("");
   setError('');
   setlocationError('');
   setageError('');
   setcirtificateError('');
   setpartyNameError('');
   setdateError('');
   setfullnameError('');
   setnamefatherError('');
   setfatherliveError('');
   setfatherworkError('');
   setnamemotherError('');
setmotherliveError('');
setmotherworkError('');
setpartnamemotherError('');

    console.log("Your post has been submitted successfully.");
})
.catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
    console.log("There was an error submitting your post."); // Notify user of error
});
};


  return (
    <>
    <div className="bg-slate-200">
    
  <Header />
  </div>
    <div className="bg-slate-200 min-h-screen flex items-center justify-center">
   
      <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
     
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
          <div className="rounded-t bg-white mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
     
              <h6 className="text-blueGray-700 text-xl font-bold mx-auto text-center " >
              {t('Intelligence forms')}
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
            {currentStep === 1 && (
                <>
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase"style={{ textAlign }}>
              {t('')}
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      name="fullname"
                    
                     className="block uppercase text-blueGray-600 text-xs font-bold mb-2 " htmlFor="username"style={{ textAlign }}>
                    {t('FullName')}
                   
                    </label>
                    <input type="text"
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
                    {t('Location')}
                    </label>
                    <input
                      name="location"
                      id='location'
                      value={location}
                      onChange={
                        (e)=>
                        {
                          setlocation(e.target.value);
                        }
                      }
                    
                     className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                   {locationError && <p style={{ color: 'red' }}>{locationError}</p>}
           
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" style={{ textAlign }}>
                    {t('Age')}
                    </label>
                    <input
                     type="text" 
                     name="age"
                     value={age}
                   onChange={handleAgeChange}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  {ageError && <p style={{ color: 'red' }}>{ageError}</p>}
           
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                     className="block uppercase text-blueGray-600 text-xs font-bold mb-2" style={{ textAlign }}>
                    {t('Cirtificate')}
                    </label>
                    <input 
                    type="text" 
                    name="certificate"
                   value={certificate}
                   onChange={(e)=>
                   {
                    setcertificate(e.target.value);
                   }

                   }
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  {cirtificateError && <p style={{ color: 'red' }}>{cirtificateError}</p>}
                
                  </div>
                </div>
                
              
                
              
                <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
      <h6 className="block uppercase text-blueGray-600 text-xs font-bold mb-2" style={{ textAlign }}>
      {t('Were you a party member before')}
      </h6>
      <div className={`flex ${i18n.language === 'ku' || i18n.language === 'ar' ? 'flex-row-reverse' : 'flex-row'} space-x-4`}>
        <label className="flex items-center">
          <input
            type="radio"
            value="yes"
            id='yes'
            checked={yesno === 'yes'}
            onChange={handleChange}
           
            className="form-radio h-4 w-4 text-blue-600 border-gray-300 focus:ring focus:ring-blue-500"
          />
          <span className="ml-2 text-blueGray-600"> {t('yes')}</span>
        </label>
        <label className="flex items-center">
          <input
         checked={yesno === 'no'}
         onChange={handleChange}
           id='no'
            value="no"
            type="radio"
           
        
           
          
            className="form-radio h-4 w-4 text-blue-600 border-gray-300 focus:ring focus:ring-blue-500"
          />
          <span className={`ml-2 text-blueGray-600 ${i18n.language === 'ku' ? 'mr-2 ml-0' : ''}`}>{t('No I just called')}</span>
        </label>
       
      </div>
    </div>
    </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" style={{ textAlign }}>
                    {t('What party are you a member of')}
                    </label>
                    <input
                     type="text"
                     name="partyName"
                     value={partyName}
                     onChange={
                      (e)=>
                      {
                        setpartyName(e.target.value);
                      }
                     }
                   
                       className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                   {partyNameError && <p style={{ color: 'red' }}>{partyNameError}</p>}
                  </div>
                </div>
                
              </div>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2 " htmlFor="username"style={{ textAlign }}>
                    {t('Date of connection')}
                   
                    </label>
                    <DatePicker
          selected={connectionDate}
          onChange={setconnectionDate}
          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
          placeholderText="Select a date"
          dateFormat="yyyy-MM-dd"
        />
        {dateError && <p style={{ color: 'red' }}>{dateError}</p>}
  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" style={{ textAlign }}>
                    {t("who's supported you?")}
                    </label>
                    <input 
                    type='text'
                   name="supporter"
                   value={supporter}
                   onChange={(e)=>{
                    setsupporter(e.target.value)
                   }
                  }
                 
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
                </div>
                <div className="flex flex-wrap">
        <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
      <h6 className="block uppercase text-blueGray-600 text-xs font-bold mb-2" style={{ textAlign }}>
    
       {t('you have traveled?')}
      </h6>
      <div className={`flex ${i18n.language === 'ku' || i18n.language === 'ar' ? 'flex-row-reverse' : 'flex-row'} space-x-4`}>
        <label className="flex items-center">
          <input
            type="radio"
            value="Yes"
            checked={yesno === 'Yes'}
            onChange={handleChange}
           
            className="form-radio h-4 w-4 text-blue-600 border-gray-300 focus:ring focus:ring-blue-500"
          />
          <span className={`ml-2 text-blueGray-600 ${i18n.language === 'ku'|| i18n.language === 'ar' ? 'mr-2 ml-0' : ''}`}>{t('Yes')}</span>
        </label>
        <label className="flex items-center">
          <input
         checked={yesno === 'No'}
         onChange={handleChange}
      
            type="radio"
            value="No"
        
           
          
            className="form-radio h-4 w-4 text-blue-600 border-gray-300 focus:ring focus:ring-blue-500"
          />
          <span className={`ml-2 text-blueGray-600 ${i18n.language === 'ku' || i18n.language === 'ar' ? 'mr-2 ml-0' : ''}`}>{t('No')}</span>
        </label>
       
      </div>
    </div>
    </div>
    <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
      <h6 className="block uppercase text-blueGray-600 text-xs font-bold mb-2" style={{ textAlign }}>
   
       {t("Do you have another country's citizenship?")}
      </h6>
      <div className={`flex ${i18n.language === 'ku'|| i18n.language === 'ar' ? 'flex-row-reverse' : 'flex-row'} space-x-4`}>
        <label className="flex items-center">
          <input
            type="radio"
            value="Yes"
            checked={yesnosafar === 'Yes'}
            onChange={handleChangesafar}
           
            className="form-radio h-4 w-4 text-blue-600 border-gray-300 focus:ring focus:ring-blue-500"
          />
          <span className="ml-2 text-blueGray-600">{t('Yes')}</span>
        </label>
        <label className="flex items-center">
          <input
         checked={yesnosafar === 'No'}
         onChange={handleChangesafar}
      
            type="radio"
            value="No"
        
           
          
            className="form-radio h-4 w-4 text-blue-600 border-gray-300 focus:ring focus:ring-blue-500"
          />
          <span className="ml-2 text-blueGray-600">{t('No')}</span>
        </label>
       
      </div>
    </div>

    </div>
   </div>
    
              
              
                
              <div className="flex flex-col items-end"> {/* Align items to the right */}
  <label 
    className="block uppercase text-blueGray-600 text-xs font-bold mb-2" 
    
    style={{ textAlign }} // Use the desired text alignment
  >
    {t('Support from the headquarters and committee')}
  </label>
  <input    
    type="file" 
    name="Supportheadquarters"
    value={Supportheadquarters}
    onChange={(e)=>{
      setSupportheadquarters(e.target.value)
     }
    }
  
    style={{ textAlign }} // Use the desired text alignment
    className="border-0 px-3 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full text-right" // Full width and text aligned right
  />
</div>    
       <br/>   
     

       <div className="flex justify-end">
<button 
onClick={handleNext}
className=" text-green-500  font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
    {t('Next')}
    </button>  
    </div>  
    </>
              )}
               {currentStep === 2 && (
                <> 
                  <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2 " htmlFor="username"style={{ textAlign }}>
                    {t('Name Father')}
                   
                    </label>
                    <input 
                    type="text" 
                    name="namefather"
                    value={namefather}
                    onChange={handlenamefatherChange}
                 
                     className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  {namefatherError && <p style={{ color: 'red' }}>{namefatherError}</p>}
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" style={{ textAlign }}>
                    {t('Where does the father live')}
                    </label>
                    <input 
                 name="fatherlive"
              value={fatherlive}
              onChange={(e)=>{
                setfatherlive(e.target.value)
               }
              }
                     className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                {fatherliveError && <p style={{ color: 'red' }}>{fatherliveError}</p>}
                  </div>
                </div>
                </div>
                <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2 " htmlFor="username"style={{ textAlign }}>
                    {t('what is the Father work')}
                   
                    </label>
                    <input 
                    type="text"
                    name="fatherwork"
                    value={fatherwork}
                    onChange={(e)=>{
                    setfatherwork(e.target.value)
                     }
                    }
                 
                     className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                   {fatherworkError && <p style={{ color: 'red' }}>{fatherworkError}</p>}
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" style={{ textAlign }}>
                    {t('What party is the father')}
                    </label>
                    <input  
                    type='text'
                    name="fatherparty"
                    value={fatherparty}
                    onChange={(e)=>{
                      setfatherparty(e.target.value)
                     }
                    }
                  
                     className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                   {partynamefatherError && <p style={{ color: 'red' }}>{partynamefatherError}</p>}
                  </div>
                </div>
                </div>
                <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2 " htmlFor="username"style={{ textAlign }}>
                    {t('Name Mother')}
                   
                    </label>
                    <input 
                    type="text"
                    name="namemother"
                    value={namemother}
                    onChange={handlenamemotherChange}
                   
                     className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  {namemotherError && <p style={{ color: 'red' }}>{namemotherError}</p>}
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" style={{ textAlign }}>
                    {t('Where does the mother live')}
                    </label>
                    <input 
                   type='text'
                   name="motherlive"
                   value={motherlive}
                   onChange={(e)=>{
                  setmotherlive(e.target.value)
                   }
                  }
                   
                     className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                 {motherliveError && <p style={{ color: 'red' }}>{motherliveError}</p>}
                  </div>
                </div>
                </div>
                <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2 ${textAlignment}" htmlFor="username"style={{ textAlign }}>
                    {t('what is the Mother Work')}
                   
                    </label>
                    <input type="text"
                     name="motherwork"
                     value={motherwork}
                     onChange={(e)=>{
                    setmotherwork(e.target.value)
                     }
                    }
                 
                     className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  {motherworkError&& <p style={{ color: 'red' }}>{motherworkError}</p>}
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" style={{ textAlign }}>
                    {t('What party is the mother')}
                    </label>
                    <input  
                    type='text'
                    name="partymother"
                    value={partymother}
                    onChange={(e)=>{
                    setpartymother(e.target.value)
                     }
                    }
                   
                     className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  {partynamemotherError&& <p style={{ color: 'red' }}>{partynamemotherError}</p>}
                  </div>
                </div>
                </div>
                <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2 ${textAlignment}" htmlFor="username"style={{ textAlign }}>
                    {t('Name Brother')}
                   
                    </label>
                    <input type="text" 
                    name="namebrother"
                    value={namebrother}
                   onChange={(e)=>{
                  setnamebrother(e.target.value)
                   }
                  }
                  
                     className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
             
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" style={{ textAlign }}>
                    {t('what is the Brother work')}
                    </label>
                    <input 
                   name="brotherwork"
                   value={brotherwork}
                   onChange={(e)=>{
                  setbrotherwork(e.target.value)
                   }
                  }
                 
                     className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
                </div>
                <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2 " htmlFor="username"style={{ textAlign }}>
                    {t('Where does the brother live')}
                   
                    </label>
                    <input 
                    type="text"
                    name="brotherlive"
                    value={brotherlive}
                    onChange={(e)=>{
                    setbrotherlive(e.target.value)
                     }
                    }
                  
                     className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" style={{ textAlign }}>
                    {t('What party is the brother')}
                    </label>
                    <input   
                     name="partybrother"
                     value={partybrother}
                     onChange={(e)=>{
                    setpartybrother(e.target.value)
                     }
                    }
                    
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
               
    
                </div>
               
                <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2 " htmlFor="username"style={{ textAlign }}>
                    {t('Name sister')}
                   
                    </label>
                    <input
                     type="text"
                     name="namesister"
                     value={namesister}
                     onChange={(e)=>{
                      setnamesister(e.target.value)
                     }
                    }
                    
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" style={{ textAlign }}>
                    {t('what is the sister work')}
                    </label>
                    <input 
                   name="sisterwork"
                   value={sisterwork}
                   onChange={(e)=>{
                    setsisterwork(e.target.value)
                   }
                  }
                  
                     className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
                </div>
                <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2 " htmlFor="username"style={{ textAlign }}>
                    {t('Where does the sister live')}
                   
                    </label>
                    <input 
                    type="text"
                    name="sisterlive"
                    value={sisterlive}
                    onChange={(e)=>{
                    setsisterlive(e.target.value)
                     }
                    }
                 
                     className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" style={{ textAlign }}>
                    {t('What party is the sister')}
                    </label>
                    <input  
                    type='text'
                    name="partysister"
                    value={partysister}
                    onChange={(e)=>{
                    setpartysister(e.target.value)
                     }
                    }
                 
                     className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
                </div>
                <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)} // Go back to step 1
                      className="text-red-500 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    >
                      {t('Back')}
                    </button>
                    <button
                      type="button"
                      onClick={ handleNext}
                      className="text-green-500 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    >
                      {t('Next')}
                    </button>
                  </div>
                </>
              )}
                {currentStep === 3 && (
                <>
                   <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2 " htmlFor="username"style={{ textAlign }}>
                    {t("what is the name father's brother")}
                   
                    </label>
                    <input 
                    type="text" 
                    name="fatherbrother"
                    value={fatherbrother}
                    onChange={(e)=>{
                    setfatherbrother(e.target.value)
                     }
                    }
                    
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" style={{ textAlign }}>
                    {t("what is the father's brother work")}
                    </label>
                    <input 
                    name="fatherbrotherwork"
                    value={fatherbrotherwork}
                    onChange={(e)=>{
                      setfatherbrotherwork(e.target.value)
                     }
                    }
                  
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
                </div>
                <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2 ${textAlignment}" htmlFor="username"style={{ textAlign }}>
                    {t("Where does the father's brother live")}
                   
                    </label>
                    <input 
                    type="text" 
                    name="fatherbrotherlive"
                    value={fatherbrotherlive}
                    onChange={(e)=>{
                      setfatherbrotherlive(e.target.value)
                     }
                    }
                   
                     className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" style={{ textAlign }}>
                    {t("What party is the father's brother")}
                    </label>
                    <input  
                    type='text'
                    name="partyfatherbrother"
                    value={partyfatherbrother}
                    onChange={(e)=>{
                     setpartyfatherbrother(e.target.value)
                     }
                    }
                  
                     className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
              
    
              
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2 ${textAlignment}" htmlFor="username"style={{ textAlign }}>
                    {t("name mother's brother")}
                   
                    </label>
                    <input
                     type="text" 
                     name="motherbrother"
                     value={motherbrother}
                     onChange={(e)=>{
                     setmotherbrother(e.target.value)
                     }
                    }
                     
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" style={{ textAlign }}>
                    {t("mother's brother work")}
                    </label>
                    <input 
                      name="motherbrotherwork"
                      value={motherbrothework}
                      onChange={(e)=>{
                      setmotherbrothework(e.target.value)
                       }
                      }
                     
                     className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" style={{ textAlign }}>
                    {t("Where does the mother's brother live")}
                    </label>
                    <input
                     type="text"
                     name="motherbrotherlive"
                     value={motherbrothelive}
                     onChange={(e)=>{
                    setmotherbrothelive(e.target.value)
                     }
                    }
                     
                     className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" style={{ textAlign }}>
                    {t("What party is the mother's brother")}
                    </label>
                    <input 
                    type="text" 
                    name="partymotherbrother"
                    value={partymotherbrother}
                    onChange={(e)=>{
                     setpartymotherbrother(e.target.value)
                     }
                    }
                   
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
                
                
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2 " htmlFor="username"style={{ textAlign }}>
                    {t("Name mother's sister")}
                   
                    </label>
                    <input 
                    type="text" 
                    id="mothersister" 
                    value={mothersister}
                    onChange={(e)=>{
                    setmothersister(e.target.value)
                      }
                     }
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" style={{ textAlign }}>
                    {t("mother's sister Work")}
                    </label>
                    <input
                      name="mothersisterwork"
                      value={mothersisterwork}
                      onChange={(e)=>{
                       setmothersisterwork(e.target.value)
                       }
                      }
                    
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
                </div>
                <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2 ${textAlignment}" htmlFor="username"style={{ textAlign }}>
                    {t("Where does the mother's sister live")}
                   
                    </label>
                    <input 
                    type="text" 
                    name="mothersisterlive"
                    value={mothersisterlive}
                    onChange={(e)=>{
                    setmothersisterlive(e.target.value)
                     }
                    }
                   
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" style={{ textAlign }}>
                    {t("What party is the mother's sister")}
                    </label>
                    <input  
                      name="partymothersister"
                      value={partymothersister}
                      onChange={(e)=>{
                      setpartymothersister(e.target.value)
                       }
                      }
                     
                     className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                
              </div>
     
                
<div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2 " htmlFor="username"style={{ textAlign }}>
                    {t("Name fathers's sister")}
                   
                    </label>
                    <input type="text"
                    name="fathersister"
                    value={fathersister}
                    onChange={(e)=>{
                      setfathersister(e.target.value)
                     }
                    }
                   
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" style={{ textAlign }}>
                    {t("fathers's sister Work")}
                    </label>
                    <input 
                     name="fathersisterwork"
                     value={fatherbrotherwork}
                     onChange={(e)=>{
                   setfathersisterwork(e.target.value)
                     }
                    }
                   
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
                </div>
                <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2 " htmlFor="username"style={{ textAlign }}>
                    {t("Where does the fathers'sister live")}
                   
                    </label>
                    <input
                     type="text" 
                     name="fathersisterlive"
                     value={fathersisterlive}
                     onChange={(e)=>{
                      setfathersisterlive(e.target.value)
                     }
                    }
                    
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" style={{ textAlign }}>
                    {t("What party is the father's sister")}
                    </label>
                    <input  
                         name="partyfathersister"
                         value={partyfathersister}
                         onChange={(e)=>{
                         setpartyfathersister(e.target.value)
                         }
                        }
                      
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                
              </div>
     
                
              </div>
       
              <div className="flex justify-center items-center"> {/* Center everything */}
  <input 
    id="link-radio" 
    type="radio" 
    value="" 
    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
  />
  <label 
    htmlFor="link-radio" 
    className="ms-2 text-sm font-medium text-black"
  >
  {t('I promise the above information is all true')}
  </label>
</div>    

              <div className="flex justify-end">
              <button type="button" onClick={() => setCurrentStep(currentStep - 1)}  className="text-red-500 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" >
              {t('Back')}
          </button>
    <button 
    
    className=" text-green-500  font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="submit" >
    {t('Submit')}
    </button>
   
   </div>
                </>
              )}
             
            </form>
          </div>
        </div>
        
      </div>
    </div>
    
    <Footer />
    </>
  );
};

