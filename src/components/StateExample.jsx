import { useState } from 'react'

function StateExample() {
  const [state, setState] = useState('Oklahoma')
  return <h1>I live in { state }</h1>
}

export default StateExample