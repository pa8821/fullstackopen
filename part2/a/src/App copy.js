//Here we takes "notes" which is passed from Index.js and pass it into 3 <li> items. 
//We could improve on this by using a map...
// const App = (props) => {
//   const { notes } = props

//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         <li>{notes[0].content}</li>
//         <li>{notes[1].content}</li>
//         <li>{notes[2].content}</li>
//       </ul>
//     </div>
//   )
// }

//..
// const App = (props) => {
//   const { notes } = props
//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         {notes.map(note => 
//         <li key={note.id}>
//           {note.content}
//         </li>
//         )}
//       </ul>
//     </div>
//   )
// }



//Understanding the array method map is crucial .
//The map method returns a new array where the function supplied as an argument is applied to each element. 

//Array Indexes as Keys...
//We can pass a second parameter to the callback function... notes.map((note, i) => ). BUT DONT DO IT. 
//A key is the only thing react uses to identify DOM elements. If you push to the list, the keys no longer represent the same components as before. 
// const App = (props) => {
//   const { notes } = props
//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         {notes.map((note, i) => 
//         <li key={i}>
//           {note.content}
//         </li>
//         )}
//       </ul>
//     </div>
//   )
// }

//Restructuring...
//Note that now the key attribute must be defined on the "Note" element. 
// const Note = ({note}) => {
//   return(
//     <li>{note.content}</li>
//   )
// }

// const App = ({ notes }) => {
//   return (
//     <div>
//       <h1>Notes</h1>
//       <ul>
//         {notes.map(note => 
//           <Note key = {note.id} note = {note} />
//         )}
//       </ul>
//     </div>
//   )
// }

//We can have Note.js as a separate file which defines the note component. This is then imported to App.js so that it can use the functionality.
import Note from "./components/Note"
import { useState } from React

const App = ({ notes }) => {
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 
          <Note key = {note.id} note = {note} />
        )}
      </ul>
    </div>
  )
}


export default App