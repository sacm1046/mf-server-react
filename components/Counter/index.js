import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const componentTagName = "co-react-counter"

const Counter = () => {
  const [counter, setCounter] = useState(0)
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>add</button>
      <button onClick={() => setCounter(counter - 1)}>subs</button>
    </>
  )
}

class ReactMfe extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(<Counter />, this);
  }
}

customElements.define(componentTagName, ReactMfe);