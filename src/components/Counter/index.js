import React from 'react'
import ReactDOM from 'react-dom'

const Counter = () => {
  return <h1>Counter</h1>
}

class ReactMfe extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(<Counter/>, this);
  }
}

customElements.define('react-element', ReactMfe);