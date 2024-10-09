import FunctionalComponent from "./components/FunctionalComponent"
import ClassComponent from "./components/ClassComponent"
import PropsExample from "./components/PropsExample"
import StateExample from "./components/StateExample"

function App() {

  return (
    <>
      <FunctionalComponent />
      <ClassComponent />
      <PropsExample greeting="Hello World" />
      <StateExample />
    </>
  )
}

export default App
