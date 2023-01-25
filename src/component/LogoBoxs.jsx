import React from 'react'
import {useState } from 'react'
import {useDrag} from 'react-use-gesture'


export default function LogoBoxs(prop) {

  const [mouse,setMouse]=useState({x:0,y:0})
  const text=prop.logo?[...prop.logo]: Array.from('tulis sesuatu')
  const handleMouse= useDrag((e)=>{
    setMouse({
      x:e.offset[0],
      y:e.offset[1]
    })
  })

  
  return (
    <div className={prop.className} >
      <div className='center h-md' id='text-container'   >
         {text.map((item)=><span {...handleMouse()} style={{fontSize:prop.size +"px",width:prop.size+'px',color:prop.logoColor,position:'relative',top:mouse.y,left:mouse.x}} className='center text-logo' >{item}</span>)}
      </div>
   </div>
  )
}
