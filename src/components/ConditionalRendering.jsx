function ConditionalRendering({ isVisible }) {
  return (
    <>
      { isVisible ? <h1>Conditionally Rendered</h1> : null }
    </>
  )
}

export default ConditionalRendering