import React from 'react'

import Action from './Action'
import Options from './Options'
import AddOption from './AddOption'
import Header from './Header'
import OptionModal from './OptionModal'

class IndecisionApp extends React.Component {
  state = {
    title: 'Entscheidungs App',
    subTitle: 'Eine App, die Dich dabei unterstützt Entscheidungen zu treffen',
    options: this.props.options,
    selectedOption: undefined,
  }

  // Event handelers
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }))
  }
  handleAction = () => {
    const randomItemIndex = Math.floor(Math.random() * this.state.options.length)
    this.setState(() => ({ selectedOption: this.state.options[randomItemIndex] }))
  }
  handleClearSelectOption = () => { this.setState(() => ({ selectedOption: undefined })) }
  handleAddOption = (option) => {
    if (!option) {
      return 'Please add a valid option!'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'Option already exists!'
    }

    this.setState((prevState) => (
      { options: prevState.options.concat(option) }
    ))
  }
  handleDeleteSingleOption = (optionToRemove) => {
    this.setState((prevState) => {
      let newOptionsArray = prevState.options.filter((option) => {
        return optionToRemove !== option
      })
      // newOptionsArray.splice(newOptionsArray.indexOf(option), 1)
      return { options: newOptionsArray }
    })
  }


  // Lifecycle Methods 
  render() {
    return (
      <div>
        <Header title={this.state.title} subTitle={this.state.subTitle} />
        <div className='container'>
          <Action
            hasOptions={this.state.options.length > 0}
            handleAction={this.handleAction}
          />
          <div className='widget'>
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteSingleOption={this.handleDeleteSingleOption}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectOption}
        />
      </div>
    )
  }
  componentDidMount() { // Fires when the component first gets mounted to the DOM
    console.log('Component is mounted');

    // Fetching Data from localstorage

    try {
      const options = JSON.parse(localStorage.getItem('options'))
      if (options) {
        this.setState(() => {
          return { options: options }
        })
      }
    } catch (e) {
      console.log(e)
    }
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('Component is updated'); // fires after the component gets updated, e.g. when state value or prop value changes

    // Saving Data to localstorage
    if (prevState.options.length !== this.state.options.length) {
      localStorage.setItem('options', JSON.stringify(this.state.options))
    }
  }
  componentWillUnmount() { // Fires just before the component gets unmounted
    console.log('Component will be unmounted');
  }
}

export default IndecisionApp