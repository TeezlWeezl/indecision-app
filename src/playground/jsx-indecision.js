const rootElement = document.getElementById('root')
let reactRoot = ReactDOM.createRoot(rootElement)

let app = {
  title: 'Indecision App',
  subtitle: 'Let an App decide your life',
  options: [],
}

let numbers = [21, 764, 2348]

let onFormSubmit = (e) => {
  e.preventDefault()
  const option = e.target.elements.option.value
  app.options.push(option)
  e.target.elements.option.value = ''
  console.log(app.options)
  renderApp()
}

const onClickDelete = (e) => {
  app.options = []
  console.log(app.options)
  renderApp()
}

const onMakeDecision = (e) => {
  const randomItemIndex = Math.floor(Math.random() * app.options.length)
  app.chosenOption =  app.options[randomItemIndex]
  window.alert(`Your choice is ${app.chosenOption}`)
  renderApp()
}

let renderApp = () => {
    let template = (
    <div>
      <h2>Decision Application</h2>

      <form onSubmit={onFormSubmit}>
        <input type="text" id="user-input" name="option"></input>
        <button id="button-submit">Add Option</button>
      </form>
      
      <ul>
       {app.options.map((option, index) => <li key={index + 1}>Option {index + 1}: {option}</li>)}
      </ul>

      <button onClick={onMakeDecision} disabled={app.options.length == 0}>What should I do?</button>
      <button onClick={onClickDelete}>Delete options</button>

    </div>
  )
  reactRoot.render(template)
}

renderApp()
