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
const App = () => {
  const [ counter, setCounter ] = useState(0)
  const increment = () => setCounter(counter + 1)
  const reset = () => setCounter(0)

  return (
    <div>
      <div>{counter}</div>
      <button onClick={increment}>
        plus
      </button>
      <button onClick = {reset}>
        reset
      </button>
    </div>
  )
}



export default App