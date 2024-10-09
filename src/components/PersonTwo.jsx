import HOC from './HOC'

const PersonTwo = ({ money, handleIncrease }) => {
  return (
    <>
      <h2>Gene is offering ${ money }</h2>
      <button onClick={handleIncrease}>Increase Money</button>
    </>
  )
}

export default HOC(PersonTwo)