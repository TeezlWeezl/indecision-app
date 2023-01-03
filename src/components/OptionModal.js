import React from 'react'
import Modal from 'react-modal'
import IndecisionApp from './IndecisionApp'



const OptionModal = (props) => {
  return (
    <Modal
      isOpen={!!props.selectedOption}
      contentLabel='Selected Option'
      onRequestClose={props.handleClearSelectedOption}
      closeTimeoutMS={200}
      className='selectedOptionModal'
    >
      <h1
        className='selectedOptionModal__title'
      >
        Deine Wahl ist ...
      </h1>
      <p
        className='selectedOptionModal__body'
      >
        {props.selectedOption}
      </p>
      <button
        onClick={props.handleClearSelectedOption}
        className='button'
      >
        Schließen
      </button>
    </Modal>
  )
}

Modal.setAppElement(document.getElementById('app-root')) // required to avoid warning react_devtools_backend.js:4026 Warning: react-modal: App element is not defined.

export { OptionModal as default }
