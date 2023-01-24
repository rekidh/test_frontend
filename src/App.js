import React from 'react';
import Heder from './component/Heder';
import LogoBoxs from './component/LogoBoxs';
import InputBoxs from './component/InputBoxs';
import { useState } from 'react';

// CSS 
import './App.css'

const App = () => {
  const [logo,setLogo]= useState('')
  const [logoColor,setLogoColor]= useState('')
  const [size,setSize]= useState('')
  return (
    <div >
      <Heder item={"REKI DESMA HALDI " } className="center navbar h-md "/>
      <LogoBoxs className='mt-sm center logo-box' size={size} logo={logo} logoColor={logoColor}/>
      <InputBoxs className='mt-sm center colum' size={size} setSize={setSize} setLogo={setLogo} setLogoColor={setLogoColor}/>
    </div>

  );
}

export default App;
