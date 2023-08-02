import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const TAG_NAME = "co-react-counter"

function Counter ({start = 0}) {
  const [counter, setCounter] = useState(start)
  return (
    <div className='counter__container'>
      <h1>{counter}</h1>
      <div className='counter__actions'>
        <button className='counter__action' onClick={() => setCounter(counter + 1)}>+</button>
        <button className='counter__action' onClick={() => setCounter(counter - 1)}>-</button>
      </div>
    </div>
  )
}

class ReactMfe extends HTMLElement {
  connectedCallback() {
    const start = parseInt(this.getAttribute("start")) || 0;
    ReactDOM.render(<Counter start={start}/>, this);
  }
}

customElements.define(TAG_NAME, ReactMfe);