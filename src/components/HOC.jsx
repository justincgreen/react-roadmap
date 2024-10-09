import { useState } from 'react'

function HOC(OriginalComponent) {
  function NewComponent() {
    const [money, setMoney] = useState(10);
    const handleIncrease = () => setMoney(money * 2);
    
    return <OriginalComponent {...{money, handleIncrease}} /> 
  }    
  
  return NewComponent
}

export default HOC