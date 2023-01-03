class IndecisionApp extends React.Component {
  constructor(props) {
    super(props)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handleAction = this.handleAction.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.handleDeleteSingleOption = this.handleDeleteSingleOption.bind(this)
    this.state = {
      title: 'Indecision App',
      subTitle: 'Let an app decide your world.',
      options: props.options,
    }
  }

  // Lifecycle Methods
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


  handleDeleteOptions() {
    this.setState(() => ({ options: [] }))
  }
  handleAction() {
    const randomItemIndex = Math.floor(Math.random() * this.state.options.length)
    window.alert(`Your choice is ${this.state.options[randomItemIndex]}`)
  }
  handleAddOption(option) {
    if (!option) {
      return 'Please add a valid option!'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'Option already exists!'
    }

    this.setState((prevState) => {
      const newOptionsArray = prevState.options
      newOptionsArray.push(option)
      return { options: newOptionsArray }
    })
  }
  handleDeleteSingleOption(optionToRemove) {
    this.setState((prevState) => {
      let newOptionsArray = prevState.options.filter((option) => {
        return optionToRemove !== option
      })
      // newOptionsArray.splice(newOptionsArray.indexOf(option), 1)
      return { options: newOptionsArray }
    })
  }
  render() {
    return (
      <div>
        <Header title={this.state.title} />
        <Action
          hasOptions={this.state.options.length > 0}
          handleAction={this.handleAction}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteSingleOption={this.handleDeleteSingleOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    )
  }
}

IndecisionApp.defaultProps = {
  options: []
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subTitle}</h2>
    </div>
  )
}

Header.defaultProps =
{
  title: 'Indecision App'
}


const Action = (props) => {
  return (
    <button
      onClick={props.handleAction}
      disabled={!props.hasOptions}
    >
      What should I do?
    </button>
  )
}

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
      {props.options.length === 0 && <p>No options in the queue</p>}
      <ol>
        {optionsJSX}
      </ol>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
    </div>
  )
}

const Option = (props) => {
  return (
    <div>
      <li>
        {props.optionTxt}
        <button onClick={(e) => props.handleDeleteSingleOption(props.optionTxt)}>🚫</button>
      </li>

    </div>
  )
}

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
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" id="user-input" name="option"></input>
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}


const rootElement = document.getElementById('root')
let reactRoot = ReactDOM.createRoot(rootElement)
reactRoot.render(<IndecisionApp options={['John', 'Doe', 'Hello', 'World']} />)