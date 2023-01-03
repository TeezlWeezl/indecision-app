

import React from 'react'

const Option = (props) => {
  return (
    <div className='widget__list__option'>
      <li>
        {props.optionTxt}
      </li>
      <button
        onClick={(e) => props.handleDeleteSingleOption(props.optionTxt)}
        className='button button--link'
      >
        Löschen
      </button>

    </div>
  )
}

export { Option as default }