import FunctionalComponent from "./components/FunctionalComponent"
import ClassComponent from "./components/ClassComponent"
import PropsExample from "./components/PropsExample"
import StateExample from "./components/StateExample"
import ConditionalRendering from "./components/ConditionalRendering"
import Composition from "./components/Composition"
import PersonOne from "./components/PersonOne"
import PersonTwo from "./components/PersonTwo"


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
      <hr />      
      <h1>Higher-Order Components Examples</h1>
      <PersonOne />
      <PersonTwo />
    </>
  )
}

export default App
