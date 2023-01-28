import React from 'react'
import {useState } from 'react'
import {useDrag} from 'react-use-gesture'


export default function LogoBoxs(prop) {

  const [position,setPosition]=useState({x:0,y:0})
  const [parms,setParms]=useState(null)
  const [on,setOn]=useState('')
  const text=prop.logo?[...prop.logo]: Array.from('tulis sesuatu')

  const handleMouse=(e)=>{
    setPosition({x:e.clientX,y:e.clientY})
    handleItem({parms:parms,on:on})
  }

  const handleItem=({parms,on})=>{
    if(parms==null){
      return
    }else{
      switch(on){
        case "down":
            parms.style=`"
            cursor:grabbing;
            color:red;
            z-index:99;
            position:absolute;
            top:${position.y}px;
            left:${position.x}px;
            "`
          break
        case "up":
          parms.style=`"
            cursor:grab;
            "`
      }
    }
  }
  const mouseDown=(e)=>{
    setOn('down')
    setParms(e.target)
  }
  const handleUp=(e)=>{
    setOn('up')
    setParms(null)

  }

  return (
    <div className={prop.className} onMouseMove={handleMouse} >
      <div className='center h-md' id='text-container' >
        {text.map((item)=>
          <div  onMouseDown={mouseDown}  onMouseUp={handleUp}> 
            <span className='center text-logo' style={{fontSize:prop.size +"px",width:prop.size+'px',color:prop.logoColor,position:"relative"}} >{item}</span>
          </div>)
        }
      </div>
   </div>
  )
}
