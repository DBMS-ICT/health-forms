
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie'; // Import Cookies

import { useTranslation } from 'react-i18next';
import logo from '../assets/img/wazaratypeshmarga.png'; // Adjust the path


  const Hawalgryform  = () => {
   
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
      fullname: '',
      location: '',
      age: '',
      certificate: '',
      partyMember: '',
      partyName: '',
      connectionDate: '',
      supporter: '',
      traveled: '',
      citizenship: '',
      Supportheadquarters:'',
      namefather:'',
      fatherlive:'',
      fatherwork:'',
      fatherparty:'',
      namemother:'',
      motherwork:'',
      partymother:'',
      motherlive:'',
      namebrother:'',
      brotherlive:'',
      brotherwork:'',
      partybrother:'',
      namesister:'',
      sisterwork:'',
      sisterlive:'',
      partysister:'',
      fatherbrother:'',
      fatherbrotherwork:'',
      fatherbrotherlive:'',
      partyfatherbrother:'',
      motherbrother:'',
      motherbrothework:'',
      motherbrothelive:'',
      partymotherbrother:'',
      mothersister:'',
      motherwork:'',
      mothersisterlive:'',
      partymothersister:'',
      fathersister:'',
      fathersisterlive:'',
      fathersisterwork:'',
      partyfathersister:'',

    });
  const [yesno,setyesno]=useState('');

  const handleChange = (e) => {
   setyesno(e.target.value);
    
  };
   

  const [yesnosafar,setyesnosafar]=useState('');

  const handleChangesafar = (e) => {
   setyesnosafar(e.target.value);
    
  };
  useEffect(() => {
    const savedData = Cookies.get('formData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const handleChangecookie = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const newData = { ...prevData, [name]: value };
      Cookies.set('formData', JSON.stringify(newData)); // Save to cookies
      return newData;
    });
  };

  const handleNext = () => {
    // Save the current form data to cookies
    Cookies.set('formData', JSON.stringify(formData));
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleSubmit = () => {
    // Final submission logic, e.g., sending data to an API
    console.log('Final Data:', formData);
    // Clear cookies after submission if needed
    Cookies.remove('formData');
    // Reset or redirect
  };
  
 

  
  
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    document.title = t('title'); 
  }, [i18n.language, t]);
 
   // Determine text alignment based on the current language
   const textAlign = i18n.language === 'ar' || i18n.language === 'ku' ? 'right' : 'left';
  

  return (
    
    <div className="bg-gradient-to-r from-emerald-400 to-cyan-400 min-h-screen flex items-center justify-center">
   
      <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
      <div className="flex flex-col items-center ">
      {/* Logo */}
      <img 
         src={logo} 
         alt="Ministry of Peshmerga" 
         className="mb-4 w-20 h-auto" // Adjust width as needed
      /></div>
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
            <form>
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
                      value={formData.fullname}
                      onChange={handleChangecookie}
                     className="block uppercase text-blueGray-600 text-xs font-bold mb-2 " htmlFor="username"style={{ textAlign }}>
                    {t('FullName')}
                   
                    </label>
                    <input type="text" id="fullname" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" style={{ textAlign }}>
                    {t('Location')}
                    </label>
                    <input
                      name="location"
                      value={formData.location}
                      onChange={handleChangecookie}
                     className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
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
                     value={formData.age}
                     onChange={handleChangecookie} 
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
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
                    value={formData.certificate}
                    onChange={handleChangecookie}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
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
            type="radio"
            value="no"
        
           
          
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
                     value={formData.partyName}
                     onChange={handleChangecookie}
                       className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
                
              </div>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2 " htmlFor="username"style={{ textAlign }}>
                    {t('Date of connection')}
                   
                    </label>
                    <input type="text"
                   name="connectionDate"
                   value={formData.connectionDate}
                   onChange={handleChangecookie}
                     className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
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
                   value={formData.supporter}
                   onChange={handleChangecookie}
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
    htmlFor="fullname" 
    style={{ textAlign }} // Use the desired text alignment
  >
    {t('Support from the headquarters and committee')}
  </label>
  <input    
    type="file" 
    name="Supportheadquarters"
    value={formData.Supportheadquarters}
    onChange={handleChangecookie}
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
                    value={formData.namefather}
                    onChange={handleChangecookie}
                     className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" style={{ textAlign }}>
                    {t('Where does the father live')}
                    </label>
                    <input 
                 name="fatherlive"
                 value={formData.fatherlive}
                 onChange={handleChangecookie}
                     className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
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
                    value={formData.fatherwork}
                    onChange={handleChangecookie}
                     className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
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
                    value={formData.fatherparty}
                    onChange={handleChangecookie}
                     className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
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
                    value={formData.namemother}
                    onChange={handleChangecookie}
                     className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
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
                    value={formData.motherlive}
                    onChange={handleChangecookie}
                     className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
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
                     value={formData.motherwork}
                     onChange={handleChangecookie}
                     className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
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
                    value={formData.partymother}
                    onChange={handleChangecookie}
                     className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
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
                    value={formData.namebrother}
                    onChange={handleChangecookie}
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
                   value={formData.brotherwork}
                   onChange={handleChangecookie}
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
                   value={formData.brotherlive}
                   onChange={handleChangecookie}
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
                     value={formData.partybrother}
                     onChange={handleChangecookie}
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
                     value={formData.namesister}
                     onChange={handleChangecookie}
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
                   value={formData.sisterwork}
                   onChange={handleChangecookie} 
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
                    value={formData.sisterlive}
                    onChange={handleChangecookie}  
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
                    value={formData.partysister}
                    onChange={handleChangecookie} 
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
                    value={formData.fatherbrother}
                    onChange={handleChangecookie}  
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
                    value={formData.fatherbrotherwork}
                    onChange={handleChangecookie}    
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
                    value={formData.fatherbrotherlive}
                    onChange={handleChangecookie}  
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
                    value={formData.partyfatherbrother}
                    onChange={handleChangecookie}  
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
                     value={formData.motherbrother}
                     onChange={handleChangecookie} 
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
                      value={formData.motherbrothework}
                      onChange={handleChangecookie} 
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
                     value={formData.motherbrothelive}
                     onChange={handleChangecookie} 
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
                    value={formData.partymotherbrother}
                    onChange={handleChangecookie}  
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
                
                
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2 " htmlFor="username"style={{ textAlign }}>
                    {t("Name mother's sister")}
                   
                    </label>
                    <input type="text" id="mother'ssister" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" style={{ textAlign }}>
                    {t("mother's sister Work")}
                    </label>
                    <input
                      name="mothersister"
                      value={formData.mothersister}
                      onChange={handleChangecookie}   
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
                    value={formData.mothersisterlive}
                    onChange={handleChangecookie} 
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
                      value={formData.partymothersister}
                      onChange={handleChangecookie} 
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
                    value={formData.fathersister}
                    onChange={handleChangecookie} 
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
                     value={formData.fathersisterwork}
                     onChange={handleChangecookie} 
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
                </div>
                <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2 ${textAlignment}" htmlFor="username"style={{ textAlign }}>
                    {t("Where does the fathers'sister live")}
                   
                    </label>
                    <input
                     type="text" 
                     name="fathersisterlive"
                     value={formData.fathersisterlive}
                     onChange={handleChangecookie} 
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
                         value={formData.partyfathersister}
                         onChange={handleChangecookie} 
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
     onClick={handleSubmit}
    className=" text-green-500  font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button" >
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
  );
};

export default Hawalgryform;