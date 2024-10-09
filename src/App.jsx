import FunctionalComponent from "./components/FunctionalComponent"
import ClassComponent from "./components/ClassComponent"
import PropsExample from "./components/PropsExample"
import StateExample from "./components/StateExample"
import ConditionalRendering from "./components/ConditionalRendering"
import Composition from "./components/Composition"
import PersonOne from "./components/PersonOne"
import PersonTwo from "./components/PersonTwo"

// Hook Examples
import UseRefExample from "./hooks/useRefExample"
import UseRefExampleTwo from "./hooks/useRefExampleTwo"
import UseRefExampleThree from "./hooks/useRefExampleThree"
import UseReducerExample from "./hooks/UseReducerExample"


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
      <hr />
      <h1>useRef Example 1</h1>
      <UseRefExample />
      <hr />
      <h1>useRef Example 2 Accessing DOM Elements</h1>
      <UseRefExampleTwo />
      <hr />
      <h1>useRef Example 3 Tracking State Changes</h1>
      <UseRefExampleThree />
      <hr />
      <h1>useReducer Example</h1>
      <UseReducerExample />
    </>
  )
}

export default App
