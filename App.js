import React from 'react'
import ReactDOM from 'react-dom'

const tagName = "mf-react-app"

const App = () => (
  <>
    <h3>Micro Front React</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates temporibus natus, beatae inventore quos sequi necessitatibus possimus, consequuntur enim cum, animi earum sit cumque. Soluta illum itaque nihil aut quaerat?
    </p>
  </>
)

class ReactMfe extends HTMLElement {
  connectedCallback() {
ReactDOM.render(<App />, this);
  }
} 

customElements.define(tagName, ReactMfe);