import FunctionalComponent from "./components/FunctionalComponent"
import ClassComponent from "./components/ClassComponent"
import PropsExample from "./components/PropsExample"
import StateExample from "./components/StateExample"
import ConditionalRendering from "./components/ConditionalRendering"
import Composition from "./components/Composition"

function App() {

  return (
    <>
      <FunctionalComponent />
      <ClassComponent />
      <PropsExample greeting="Hello World" />
      <StateExample />
      <ConditionalRendering isVisible={ true } />
      <Composition>
        <h1>Example of composition using the "children" prop</h1>
      </Composition>
    </>
  )
}

export default App
