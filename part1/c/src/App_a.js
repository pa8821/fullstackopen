import { useState } from 'react'

// //Stateful Component
// const App = () => {
//   const [ counter, setCounter ] = useState(0)
//   //Adds "state" to the component and renders it initialised with a value of zero. 
//   //The counter variable is assigned to the initial value of "state" which is zero
//   //setCounter is assigned to a function that can be used to modify the state. 

//   //setTimeout is a global method that executes a function when the timer elapses. Here the state is updated to it's value + 1
//   //React re-renders the entire app function body when the state-modifying function is called. 
//   setTimeout(
//     () => setCounter(counter + 1),
//     1000
//   )

//   console.log('rendering...', counter)

//   return (
//     <div>{counter}</div>
//   )
// }



// //Event Handling
// //The button element's "onClick" attribute can be set to the setCounter function, which when called updates the state of the component, 
// //meaning the component is rerendered and the counter updates on the screen. 
// const App = () => {
//   const [ counter, setCounter ] = useState(0)

//   return (
//     <div>
//       <div>{counter}</div>
//       <button onClick={() => setCounter(counter + 1)}>
//         plus
//       </button>
//       <button onClick = {() => setCounter(0)}>
//         reset
//       </button>
//     </div>
//   )
// }

//Usually, defining event handlers within JSX templates isn't a good idea. Here it's ok because our event handlers are so simple. 
//We can separate the event handlers into separate functions anyway. 
// const App = () => {
//   const [ counter, setCounter ] = useState(0)
//   const increment = () => setCounter(counter + 1)
//   const reset = () => setCounter(0)

//   return (
//     <div>
//       <div>{counter}</div>
//       <button onClick={increment}>
//         plus
//       </button>
//       <button onClick = {reset}>
//         reset
//       </button>
//     </div>
//   )
// }



// export default App


//Passing State to Child Components
//It's reccomended to write components that are small and reusable. 
//We could refactor the increment and reset application to contain three components. 
//When multiple components need to be aware of the same state, it's advisable to "lift" the state up the component hierarchy. 
//Now, the button can accept any function to implement different functionality. The function also changes the state of the app
//Function

//When the state of a component is changed, it causes the component to be rerendered. This means that the sub-components
//are also rerendered. 

const App = () => {
  const [counter, setCounter] = useState(0)
  const increment = () => setCounter(counter+1)
  const decrement = () => setCounter(counter-1)
  const reset = () => setCounter(0)

  return (
    <div>
      <Counter counter = {counter}/>
      <Button onClick={increment} text = {"increment"}/>
      <Button onClick={decrement} text = {"decrement"}/>
      <Button onClick={reset} text = {"reset"}/>
    </div>
  )
}

const Counter = ({counter}) => <div>{counter}</div>

const Button = ({onClick, text}) => <button onClick = {onClick}>{text}</button>

export default App