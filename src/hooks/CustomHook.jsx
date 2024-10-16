import { useState } from 'react'
import { useBoolean } from './UseBoolean'
export default function CustomHook() {
  const [isToggle, { setToggle, setTrue, setFalse }] = useBoolean(false);
  
  return (
    <div>
      <button type="button" onClick={setToggle}>
        Toggle
      </button>
      <button type="button" onClick={setTrue}>
        To True
      </button>
      <button type="button" onClick={setFalse}>
        To False
      </button>
      
      {isToggle.toString()}
    </div>
  )
}