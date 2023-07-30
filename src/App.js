import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [counter, setCounter] = useState(0)
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>add</button>
    </>
  )
}

class ReactMfe extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(<App />, this);
  }
}

customElements.define('react-element', ReactMfe);