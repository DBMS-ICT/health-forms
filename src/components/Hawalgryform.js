
import React, { useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';

  const Hawalgryform  = () => {
    const [brotherFieldsVisible, setBrotherFieldsVisible] = useState(false);
    const [brotherInputFields, setBrotherInputFields] = useState([]);
    const [sisterFieldsVisible, setSisterFieldsVisible] = useState(false);
    const [sisterInputFields, setSisterInputFields] = useState([]);
    const [fathersbrotherFieldsVisible, setfathersbrotherFieldsVisible] = useState(false);
    const [fathersbrotherInputFields, setfathersbrotherInputFields] = useState([]);
    const [motherbrotherFieldsVisible, setmotherbrotherFieldsVisible] = useState(false);
    const [motherbrotherInputFields, setmotherbrotherInputFields] = useState([]);
    const [motherssisterFieldsVisible, setmotherssisterFieldsVisible] = useState(false);
    const [motherssisterInputFields, setmotherssisterInputFields] = useState([]);
    const [fatherssisterFieldsVisible, setfatherssisterFieldsVisible] = useState(false);
    const [fatherssisterInputFields, setfatherssisterInputFields] = useState([]);
    const handleAddBrotherFields = () => {
      if (!brotherFieldsVisible) {
        setBrotherFieldsVisible(true);
      }
      setBrotherInputFields((prevFields) => [
        ...prevFields,
        ...Array.from({ length: 4 }, () => ''), // Add four empty brother input fields
      ]);
    };
    const handleAddSisterFields = () => {
      if (!sisterFieldsVisible) {
        setSisterFieldsVisible(true);
      }
      setSisterInputFields((prevFields) => [
        ...prevFields,
        ...Array.from({ length: 4 }, () => ''), // Add four empty sister input fields
      ]);
    };
    const handleAddmotherbrotherFields = () => {
      if (!motherbrotherFieldsVisible) {
        setmotherbrotherFieldsVisible(true);     // Add four empty motherbrother input fields
      }
      setmotherbrotherInputFields((prevFields) => [
        ...prevFields,
        ...Array.from({ length: 4 }, () => ''), // Add four empty sister input fields
      ]);
    };
    const handleAddfathersbrotherrFields = () => {
      if (!fathersbrotherFieldsVisible) {
        setfathersbrotherFieldsVisible(true);      // Add four empty father'sbrother input fields
      }
      setfathersbrotherInputFields((prevFields) => [
        ...prevFields,
        ...Array.from({ length: 4 }, () => ''), 
      ]);
    };
    const handleAddmotherssisterFields = () => {
      if (!motherssisterFieldsVisible) {
        setmotherssisterFieldsVisible(true);
      }
      setmotherssisterInputFields((prevFields) => [
        ...prevFields,
        ...Array.from({ length: 4 }, () => ''), // Add four empty sister input fields
      ]);
    };
    const handleAddfatherssisterFields = () => {
      if (!fatherssisterFieldsVisible) {
        setfatherssisterFieldsVisible(true);
      }
      setfatherssisterInputFields((prevFields) => [
        ...prevFields,
        ...Array.from({ length: 4 }, () => ''), // Add four empty father sisterinput fields
      ]);
    };
   
  const handleBrotherInputChange = (index, event) => {
    const newInputFields = [...brotherInputFields];
    newInputFields[index] = event.target.value;
    setBrotherInputFields(newInputFields);
  };
  const handlemotherbrotherInputChange = (index, event) => {
    const newInputFields = [...motherbrotherInputFields];
    newInputFields[index] = event.target.value;
    setmotherbrotherInputFields(newInputFields);
  };

  const handleSisterInputChange = (index, event) => {
    const newInputFields = [...sisterInputFields];
    newInputFields[index] = event.target.value;
    setSisterInputFields(newInputFields);
  };
    // Labels for the input fields
    const handlefathersbrotherInputChange = (index, event) => {
      const newInputFields = [...fathersbrotherInputFields];
      newInputFields[index] = event.target.value;
      setfathersbrotherInputFields(newInputFields);
    };
    const handlemotherssisterInputChange = (index, event) => {
      const newInputFields = [...motherssisterInputFields];
      newInputFields[index] = event.target.value;
      setmotherssisterInputFields(newInputFields);
    };
    const handlfatherssisterInputChange = (index, event) => {
      const newInputFields = [...fatherssisterInputFields];
      newInputFields[index] = event.target.value;
      setfatherssisterInputFields(newInputFields);
    };
   


  const [yesno,setyesno]=useState('');

  const handleChange = (e) => {
   setyesno(e.target.value);
    
  };
   

  const [yesnosafar,setyesnosafar]=useState('');

  const handleChangesafar = (e) => {
   setyesnosafar(e.target.value);
    
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
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase"style={{ textAlign }}>
              {t('')}
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2 ${textAlignment}" htmlFor="username"style={{ textAlign }}>
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
                    <input id="Location"  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" style={{ textAlign }}>
                    {t('Age')}
                    </label>
                    <input type="text" id="age" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" style={{ textAlign }}>
                    {t('Cirtificate')}
                    </label>
                    <input type="text" id="cirtificate" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
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
                    <input type="text" id="bloodgroup" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
                
              </div>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2 " htmlFor="username"style={{ textAlign }}>
                    {t('Date of connection')}
                   
                    </label>
                    <input type="text" id="Date of connection" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" style={{ textAlign }}>
                    {t("who's supported you?")}
                    </label>
                    <input id="supported"  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
                </div>
                <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2 " htmlFor="username"style={{ textAlign }}>
                    {t('Name Father')}
                   
                    </label>
                    <input type="text" id="NameFather" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" style={{ textAlign }}>
                    {t('Where does the father live')}
                    </label>
                    <input id="fatherlive"  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
                </div>
                <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2 " htmlFor="username"style={{ textAlign }}>
                    {t('what is the Father work')}
                   
                    </label>
                    <input type="text" id="Fatherwork" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" style={{ textAlign }}>
                    {t('What party is the father')}
                    </label>
                    <input   className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
                </div>
                <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2 " htmlFor="username"style={{ textAlign }}>
                    {t('Name Mother')}
                   
                    </label>
                    <input type="text" id="NameMother" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" style={{ textAlign }}>
                    {t('Where does the mother live')}
                    </label>
                    <input id="motherlive"  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
                </div>
                <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2 ${textAlignment}" htmlFor="username"style={{ textAlign }}>
                    {t('what is the Mother Work')}
                   
                    </label>
                    <input type="text" id="MotherWork" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" style={{ textAlign }}>
                    {t('What party is the mother')}
                    </label>
                    <input   className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
                </div>
                <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2 ${textAlignment}" htmlFor="username"style={{ textAlign }}>
                    {t('Name Brother')}
                   
                    </label>
                    <input type="text" id="NameBrother" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" style={{ textAlign }}>
                    {t('what is the Brother work')}
                    </label>
                    <input id="Brotherwork"  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
                </div>
                <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2 " htmlFor="username"style={{ textAlign }}>
                    {t('Where does the brother live')}
                   
                    </label>
                    <input type="text" id='brotherlive' className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" style={{ textAlign }}>
                    {t('What party is the brother')}
                    </label>
                    <input   className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
               
      {/* Button to Add Fields */}
      <div className="w-full px-2" style={{ textAlign }}>
        <button 
          onClick={handleAddBrotherFields} 
          type="button" // Prevent form submission
          className="mt-4 text-green-500 py-2 px-4 rounded"
          style={{ textAlign }}
        >
          {t('if You have more than one brother +')}
        </button>
      </div>

      {/* Input Fields */}
      {brotherFieldsVisible && (
        <>
          {/* Render Input Fields */}
          {brotherInputFields.map((field, index) => (
            <div key={index} className="w-full lg:w-6/12 px-2 flex flex-col mb-3">
              <label className="block uppercase text-blueGray-600 text-xs font-bold" style={{ textAlign }}>
                {index % 4 === 0 ? t('Name Brother') : 
                 index % 4 === 1 ? t('what is the Brother work') : 
                 index % 4 === 2 ? t('Where does the brother live') : 
                 t('What party is the brother')}
              </label>
              <input
                type="text"
                id={`input-${index}`} // Unique ID
                value={field}
                onChange={(event) => handleBrotherInputChange(index, event)}
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
              />
            </div>
          ))}
        </>
      )}
    
                </div>
               
                <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2 " htmlFor="username"style={{ textAlign }}>
                    {t('Name sister')}
                   
                    </label>
                    <input type="text" id="Namesister" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" style={{ textAlign }}>
                    {t('what is the sister work')}
                    </label>
                    <input id="sisterwork"  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
                </div>
                <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2 " htmlFor="username"style={{ textAlign }}>
                    {t('Where does the sister live')}
                   
                    </label>
                    <input type="text" id="sisterlive" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" style={{ textAlign }}>
                    {t('What party is the sister')}
                    </label>
                    <input   className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
                </div>
                <div className="flex flex-wrap">
      {/* Button to Add Fields */}
      <div className="w-full px-2" style={{ textAlign }}>
        <button 
          onClick={handleAddSisterFields} 
          type="button" // Prevent form submission
          className="mt-4 text-green-500 py-2 px-4 rounded"
          style={{ textAlign }}
        >
          {t('if You have more than one sister +')}
        </button>
      </div>

      {/* Input Fields */}
      {sisterFieldsVisible && (
        <>
          {/* Render Input Fields */}
          {sisterInputFields.map((field, index) => (
            <div key={index} className="w-full lg:w-6/12 px-2 flex flex-col mb-3">
              <label className="block uppercase text-blueGray-600 text-xs font-bold" style={{ textAlign }}>
                {index % 4 === 0 ? t('Name sister') : 
                 index % 4 === 1 ? t('what is the sister work') : 
                 index % 4 === 2 ? t('Where does the sister live') : 
                 t('What party is the sister')}
              </label>
              <input
                type="text"
                id={`input-${index}`} // Unique ID
                value={field}
                onChange={(event) => handleSisterInputChange(index, event)}
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
              />
            </div>
          ))}
        </>
      )}
    </div>
                <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2 " htmlFor="username"style={{ textAlign }}>
                    {t("what is the name father's brother")}
                   
                    </label>
                    <input type="text" id="father'sbrother" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" style={{ textAlign }}>
                    {t("what is the father's brother work")}
                    </label>
                    <input id="father'sbrotherwork"  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
                </div>
                <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2 ${textAlignment}" htmlFor="username"style={{ textAlign }}>
                    {t("Where does the father's brother live")}
                   
                    </label>
                    <input type="text" id="father'sbrotherlive" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" style={{ textAlign }}>
                    {t("What party is the father's brother")}
                    </label>
                    <input   className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
              
      {/* Button to Add Fields */}
      <div className="w-full px-2" style={{ textAlign }}>
        <button 
          onClick={handleAddfathersbrotherrFields} 
          type="button" // Prevent form submission
          className="mt-4 text-green-500 py-2 px-4 rounded"
          style={{ textAlign }}
        >
          {t("if You have more than one father's brother +")}
        </button>
      </div>

      {/* Input Fields */}
      {fathersbrotherFieldsVisible && (
        <>
          {/* Render Input Fields */}
          {fathersbrotherInputFields.map((field, index) => (
            <div key={index} className="w-full lg:w-6/12 px-2 flex flex-col mb-3">
              <label className="block uppercase text-blueGray-600 text-xs font-bold" style={{ textAlign }}>
                {index % 4 === 0 ? t("what is the name father's brother") : 
                 index % 4 === 1 ? t("what is the father's brother work") : 
                 index % 4 === 2 ? t("Where does the father's brother live") : 
                 t("What party is the father's brother")}
              </label>
              <input
                type="text"
                id={`input-${index}`} // Unique ID
                value={field}
                onChange={(event) => handlefathersbrotherInputChange(index, event)}
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
              />
            </div>
          ))}
        </>
      )}

          
              
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2 ${textAlignment}" htmlFor="username"style={{ textAlign }}>
                    {t("name mother's brother")}
                   
                    </label>
                    <input type="text" id="mother'sbrother" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" style={{ textAlign }}>
                    {t("mother's brother work")}
                    </label>
                    <input id="mother'sbrotherwork"  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" style={{ textAlign }}>
                    {t("Where does the mother's brother live")}
                    </label>
                    <input type="text" id="mother'sbrotherlive" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" style={{ textAlign }}>
                    {t("What party is the mother's brother")}
                    </label>
                    <input type="text"  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
                
                 {/* Button to Add Fields */}
      <div className="w-full px-2" style={{ textAlign }}>
        <button 
          onClick={handleAddmotherbrotherFields} 
          type="button" // Prevent form submission
          className="mt-4 text-green-500 py-2 px-4 rounded"
          style={{ textAlign }}
        >
          {t("if you have more than one mother's brother +")}
        </button>
      </div>

      {/* Input Fields */}
      {motherbrotherFieldsVisible && (
        <>
          {/* Render Input Fields */}
          {motherbrotherInputFields.map((field, index) => (
            <div key={index} className="w-full lg:w-6/12 px-2 flex flex-col mb-3">
              <label className="block uppercase text-blueGray-600 text-xs font-bold" style={{ textAlign }}>
                {index % 4 === 0 ? t("name mother's brother") : 
                 index % 4 === 1 ? t("mother's brother work") : 
                 index % 4 === 2 ? t("Where does the mother's brother live") : 
                 t("What party is the mother's brother")}
              </label>
              <input
                type="text"
                id={`input-${index}`} // Unique ID
                value={field}
                onChange={(event) => handlemotherbrotherInputChange(index, event)}
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
              />
            </div>
          ))}
        </>
      )}


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
                    <input id="mother'ssisterWork"  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
                </div>
                <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2 ${textAlignment}" htmlFor="username"style={{ textAlign }}>
                    {t("Where does the mother's sister live")}
                   
                    </label>
                    <input type="text" id="mother'ssisterlive" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" style={{ textAlign }}>
                    {t("What party is the mother's sister")}
                    </label>
                    <input   className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                
              </div>
      {/* Button to Add Fields */}
      <div className="w-full px-2" style={{ textAlign }}>
        <button 
          onClick={handleAddmotherssisterFields} 
          type="button" // Prevent form submission
          className="mt-4 text-green-500 py-2 px-4 rounded"
          style={{ textAlign }}
        >
          {t("if You have more than one mother's sister +")}
        </button>
      </div>

      {/* Input Fields */}
      {motherssisterFieldsVisible && (
        <>
          {/* Render Input Fields */}
          {motherssisterInputFields.map((field, index) => (
            <div key={index} className="w-full lg:w-6/12 px-2 flex flex-col mb-3">
              <label className="block uppercase text-blueGray-600 text-xs font-bold" style={{ textAlign }}>
                {index % 4 === 0 ? t("Name mother's sister") : 
                 index % 4 === 1 ? t("mother's sister Work") : 
                 index % 4 === 2 ? t("Where does the mother's sister live") : 
                 t("What party is the mother's sister")}
              </label>
              <input
                type="text"
                id={`input-${index}`} // Unique ID
                value={field}
                onChange={(event) => handlemotherssisterInputChange(index, event)}
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
              />
            </div>
          ))}
        </>
      )}

                
                
<div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2 " htmlFor="username"style={{ textAlign }}>
                    {t("Name fathers's sister")}
                   
                    </label>
                    <input type="text" id="fathers'ssister" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" style={{ textAlign }}>
                    {t("fathers's sister Work")}
                    </label>
                    <input id="fathers'ssisterWork"  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
                </div>
                <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2 ${textAlignment}" htmlFor="username"style={{ textAlign }}>
                    {t("Where does the fathers'sister live")}
                   
                    </label>
                    <input type="text" id="fathers'sisterlive" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" style={{ textAlign }}>
                    {t("What party is the father's sister")}
                    </label>
                    <input  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
                  </div>
                
              </div>
      {/* Button to Add Fields */}
      <div className="w-full px-2" style={{ textAlign }}>
        <button 
          onClick={handleAddfatherssisterFields} 
          type="button" // Prevent form submission
          className="mt-4 text-green-500 py-2 px-4 rounded"
          style={{ textAlign }}
        >
          {t("if You have more than one father's sister +")}
        </button>
      </div>

      {/* Input Fields */}
      {fatherssisterFieldsVisible && (
        <>
          {/* Render Input Fields */}
          {fatherssisterInputFields.map((field, index) => (
            <div key={index} className="w-full lg:w-6/12 px-2 flex flex-col mb-3">
              <label className="block uppercase text-blueGray-600 text-xs font-bold" style={{ textAlign }}>
                {index % 4 === 0 ? t("Name fathers's sister") : 
                 index % 4 === 1 ? t("fathers's sister Work") : 
                 index % 4 === 2 ? t("Where does the fathers'sister live") : 
                 t("What party is the father's sister")}
              </label>
              <input
                type="text"
                id={`input-${index}`} // Unique ID
                value={field}
                onChange={(event) => handlfatherssisterInputChange(index, event)}
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
              />
            </div>
          ))}
        </>
      )}

                
                
              
                
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
    id="Support" 
    style={{ textAlign }} // Use the desired text alignment
    className="border-0 px-3 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full text-right" // Full width and text aligned right
  />
</div>    
       <br/>   
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

              <div className="flex justify-start">
    <button className="bg-green-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
    {t('Submit')}
    </button>
</div>
             
            </form>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Hawalgryform;

