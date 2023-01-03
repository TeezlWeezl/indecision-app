class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddOne = this.handleAddOne.bind(this)
    this.handleMinusOne = this.handleMinusOne.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.state = {
      counter: 0
    }
  }

  handleAddOne() {
    this.setState((prevState) => {
      return {counter: ++prevState.counter}
    })
  }
  
  handleMinusOne() {
    this.setState((prevState) => {
      return {counter: --prevState.counter}
    })
    console.log(this.state);
  }
  handleReset() {
    this.setState(() => {
      return {counter: 0}
    })
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.counter}</h1>
        <div>
          <button onClick={this.handleAddOne}>+1</button>
          <button onClick={this.handleMinusOne}>-1</button>
          <button onClick={this.handleReset}>Reset</button>
        </div>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(<Counter />)



// const rootElement = document.getElementById('root')
 
// let count = 0
// let clickAddOne = function() {
//   count++
//   console.log(count)
//   renderCounterApp()
// }
// let clickRemoveOne = () => {
//   count--
//   console.log(count)
//   renderCounterApp()
// }
// let clickReset = () => {
//   count = 0
//   console.log(count)
//   renderCounterApp()
// }


// const renderCounterApp = () => {
//   var element2 = (
//     <div>
//       <h1>Counter: {count}</h1>
//       <div>
//         <button id="button-add" className="button" onClick={clickAddOne}>+1</button>
//         <button onClick={clickRemoveOne}>-1</button>
//       </div>
//       <div>
//         <button onClick={clickReset}>Reset</button>
//       </div>
//     </div>
//   )
//   ReactDOM.createRoot(rootElement).render(element2)
// }

// renderCounterApp()