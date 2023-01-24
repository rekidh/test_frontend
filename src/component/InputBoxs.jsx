import React from 'react';

const InputBoxs = (prop) => {

   const colors=['86A3B8','E8D2A6','F48484','F55050']

   const heandleChange=(e)=>{
      
      switch(e.target.id){
         case 'range':
            prop.setSize(e.target.value)
            break
         case 'text-logo':
            prop.setLogo(e.target.value)
            break
         default:
      }
   }

   const heandleClick=(e)=>{
      prop.setLogoColor(e.target.id)
   }
   
   return (
      <div className={prop.className}>
         <label htmlFor="text-logo">input text</label>
         <input type="text" id='text-logo' onChange={heandleChange}/>

         <div className='size-range mt-sm'>
            <label htmlFor="range"> Size:</label>
            <input type="range" id='range' min="0" max="100" onChange={heandleChange}/> <span>{prop.size} px</span>
         </div>
         <div className='colors mt-sm'>
            {colors.map((item)=> <button  id={`#${item}`} className='color-select' style={{backgroundColor:`#${item}`}} onClick={heandleClick}></button>)}
         </div>
         <button className='mt-sm' onClick={(e)=>console.log(e)} >Save</button>
      </div>
   );
}

export default InputBoxs;
