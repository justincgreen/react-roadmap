import FunctionalComponent from "./components/FunctionalComponent"
import ClassComponent from "./components/ClassComponent"
import PropsExample from "./components/PropsExample"
import StateExample from "./components/StateExample"
import ConditionalRendering from "./components/ConditionalRendering"

function App() {

  return (
    <>
      <FunctionalComponent />
      <ClassComponent />
      <PropsExample greeting="Hello World" />
      <StateExample />
      <ConditionalRendering isVisible={ true } />
    </>
  )
}

export default App
