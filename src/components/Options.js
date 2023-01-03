import React from "react"
import Option from './Option'

const Options = (props) => {
  const handleDeleteSingleOption = (option) => {
    props.handleDeleteSingleOption(option)
  }
  const optionsJSX = props.options.map((optionTxt, posIndex) => (
    <Option
      key={posIndex}
      optionTxt={optionTxt}
      handleDeleteSingleOption={handleDeleteSingleOption}
    />)
  )

  return (
    <div>
      <div
        className="widget-header"
      >
        <h3
          className="widget-header__title"
        >Deine Optionen</h3>
        <button
          onClick={props.handleDeleteOptions}
          className='button button--link'
        >
          Alle Löschen
        </button>
      </div>
      {props.options.length > 0 &&
        <ol className="widget__list">
          {optionsJSX}
        </ol>
      }
      {
        props.options.length === 0 &&
        <p
          className="widget__message"
        >
          Bitte Optionen hinzufügen, um loszulegen!
        </p>
      }
    </div>
  )
}

export { Options as default }