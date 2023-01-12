import { useState } from 'react'
//The application state in the previous example was simple. But what if we wanted more than a single integer?
//We can use the useState function multiple times to produce multiple "pieces" of state. 

// const App = () => {
//     const [left, setLeft] = useState(0)
//     const [right, setRight] = useState(0)
  
//     return (
//       <div>
//         {left}
//         <button onClick={() => setLeft(left + 1)}>
//           left
//         </button>
//         <button onClick={() => setRight(right + 1)}>
//           right
//         </button>
//         {right}
//       </div>   
//     )
// }

//We can use any type for the component state. We could implement the same functionality by saving the click count of both the left
//and right buttons into a single object. The argument is the initial state, so we can specify this as {left:0, right:0}
//We can also use the spread operator, as we have to update the full state when we use the set method. 
//Note that we might've done clicks.left++, however changing the state directly is not forbidden. Must use the setter method. 

// const App = () => {
//   const [clicks, setClicks] = useState({left:0, right:0})
//   const leftClick = () => {
//     setClicks({...clicks, left:clicks.left+1})
//   }
//   const rightClick = () => {
//     setClicks({...clicks, right:clicks.right+1})
//   }
//   return (
//     <div>
//       {clicks.left}
//       <button onClick = {leftClick}>left</button>
//       <button onClick = {rightClick}>right</button>
//       {clicks.right}
//     </div>
//   )
  
// }


//Handling Arrays
//Note that for some applications, it makes more sense to store state separately as it's simpler. 
//Again, we can't directly mutate the state. concat creates a new copy of the array with 'L' appended. 
// const App = () => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   const [allClicks, setAll] = useState([])

//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L')) 
//     setLeft(left + 1)
//   }

//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     setRight(right + 1)
//   }

//   return (
//     <div>
//       {left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {right}
//       <p>{allClicks.join(' ')}</p>
//     </div>
//   )
// }


//Conditional Rendering
//Notice that the history component renders one thing if the allClicks array is empty, and renders another if not. 
//React offers other ways on top of this to do conditional rendering. 
// const App = () => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   const [allClicks, setAll] = useState([])

//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L')) 
//     setLeft(left + 1)
//   }

//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     setRight(right + 1)
//   }

//   return (
//     <div>
//       {left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {right}
//       <History allClicks = {allClicks} />
//     </div>
//   )
// }

// const History = (props) => {
//   if(props.allClicks.length === 0)
//   {
//     return(
//       <div>
//         The app is used by pressing the buttons
//       </div>
//     )
//   }
//   return (
//     <div>
//       button press history: {props.allClicks.join(',')}
//     </div>
//   )
// }


//Old React
//In old versions of react, there was no way to add state to a functional component. Components that required state had to be implemented
//as classes. 
//

//Rules of Hooks
//useState (and useEffect) must not be called from inside of a loop, a conditional expression, or any place that is not a function defining component. 
//This must be done so that hooks are always called in the same order. Hooks can only be called from inside the function body that defines a 
//react component. 



//Event Handling



export default App