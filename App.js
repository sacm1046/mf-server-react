import React from 'react'
import ReactDOM from 'react-dom'

const tagName = "mf-react-app"

const App = () => <div />

class ReactMfe extends HTMLElement {
  connectedCallback() {
ReactDOM.render(<App />, this);
  }
} 

customElements.define(tagName, ReactMfe);