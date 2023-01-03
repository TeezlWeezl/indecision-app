import isEmail from 'validator/lib/isEmail'
import React from 'react'
import ReactDOM from 'react-dom/client'

import 'normalize.css/normalize.css'
import './styles/styles.scss'

import IndecisionApp from './components/IndecisionApp'
import Header from './components/Header'

IndecisionApp.defaultProps = { options: [] }
Header.defaultProps = { title: 'Indecision App' }


// ----------------

const Layout = (props) => {
  return (
    <div>
      <p>Header</p>
      {props.children}
      <p>Footer</p>
    </div>
  )
}

const rootElement = document.getElementById('app-root')
let reactRoot = ReactDOM.createRoot(rootElement)
reactRoot.render(<IndecisionApp options={['John', 'Doe', 'Thies', 'Oelke']} />)