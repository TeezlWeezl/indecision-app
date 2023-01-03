import React from 'react'


class AddOption extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      error: undefined
    }
  }
  handleAddOption(e) {
    e.preventDefault()
    const option = e.target.elements.option.value.trim()
    const error = this.props.handleAddOption(option)

    if (!error) {
      e.target.elements.option.value = ''
    }

    this.setState(() => {
      return {
        error: error
      }
    })
  }
  render() {
    return (
      <div>
        {this.state.error && <p className='widget__error'>{this.state.error}</p>}
        <form 
        onSubmit={this.handleAddOption}
        className="widget__form"
        >
          <input type="text" id="user-input" name="option" className='widget__form__input'></input>
          <button
            className='button widget__form__submit'
          >
            Hinzufügen
          </button>
        </form>
      </div>
    )
  }
}

export { AddOption as default }