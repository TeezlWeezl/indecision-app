import React from "react"

const Action = (props) => {
  return (
    <button
      className="action-button"
      onClick={props.handleAction}
      disabled={!props.hasOptions}
    >
      Sag mir was ich tun soll?
    </button>
  )
}

export { Action as default }