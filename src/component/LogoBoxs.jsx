import React from 'react'
import { useEffect,useState } from 'react'


export default function LogoBoxs(prop) {

  const [mouse,setMouse]=useState({})
  const text=prop.logo?[...prop.logo]: Array.from('tulis sesuatu')

  const handleMouse=(e)=>{
    let x = e.clientX
    let y = e.clientY
    setMouse({x,y})
  }
  const style={
    fontSize:prop.size +"px",
    width:prop.size+'px',
    color:prop.logoColor
  }
  const handleClick =(e)=>{
    e.target.style=`
    position: absolute;
    transform: translate3d(${e.clientX}px,${e.clientY}px,)
    `
    handleMouse(e)
    console.log(mouse)
      
      
    }
  

  

  
  return (
    <div className={prop.className} >
      <div className='center h-md' id='text-container' /*style={{backgroundColor:"green"}}*/>
         {text.map((item)=><span style={{fontSize:prop.size +"px",width:prop.size+'px',color:prop.logoColor}} className='center text-logo'onClick={handleClick} >{item}</span>)}
      </div>
   </div>
  )
}
