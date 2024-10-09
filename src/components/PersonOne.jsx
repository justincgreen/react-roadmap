import HOC from './HOC'

const PersonOne = ({ money, handleIncrease }) => { 
  return (
    <>
      <h2>Bob is offering ${ money }</h2>
      <button onClick={handleIncrease}>Increase Money</button>
    </>
  )
}

export default HOC(PersonOne)