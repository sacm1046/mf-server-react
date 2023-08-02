import React from 'react'
import ReactDOM from 'react-dom'
import reactLogo from '../../assets/images/react.png'
import './index.css'

const TAG_NAME = "mf-react-clients"

function Clients () {
  return (
    <>
      <h3>Micro Front React Clients</h3>
      <img className='clients__image' src={reactLogo} alt="Logo" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates temporibus natus, beatae inventore quos sequi necessitatibus possimus, consequuntur enim cum, animi earum sit cumque. Soluta illum itaque nihil aut quaerat?
      </p>
    </>
  )
}

class ReactMfe extends HTMLElement {
  connectedCallback() {
ReactDOM.render(<Clients />, this);
  }
}

customElements.define(TAG_NAME, ReactMfe);