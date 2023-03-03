import Note from "./components/Note"
import noteService from "./services/Notes"
import { useState, useEffect } from 'react'


const App = (props) => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState("A new note")
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    noteService
      .getAll()
      .then(response => setNotes(response.data))
  }, [])
  console.log('render', notes.length, 'notes')

  const notesToShow = showAll ? notes : notes.filter(note => note.important)

  const addNote = (event) => {
    event.preventDefault()
    const noteToAdd = {
      content: newNote, 
      important: true
    }
    noteService
      .create(noteToAdd)
      .then(responseData => {
        setNotes(notes.concat(responseData))
      })
  }

  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }

  const toggleImportanceOf = (id) => {
    console.log(`importance of ${id} needs to be toggled`)
    const note = notes.find(note => note.id ===id)
    const changedNote = {...note, important: !note.important}
    noteService
      .update(id ,changedNote)
      .then(responseData => {
        //Set notes to new array where we update the note that has come back as response data after being updated. 
        setNotes(notes.map((note) => note.id !== id ? note : responseData))
      })

  }

  const Footer = () => {
    const footerStyle = {
      color:"green",
      fontStyle:'italic', 
      fontSize: 16
    }
    return (
      <div style = {footerStyle}>
        <br />
        <em>Note app</em>
      </div>
    )
  }
  
  //Note that each note receives its own event handler to toggle importance. 
  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick = {() => setShowAll(!showAll)}>
          Show {showAll ? "important" : "All"}
        </button>
      </div>
      <ul>
        {notesToShow.map(note => 
          <Note key = {note.id} note = {note} toggleImportance = {() => toggleImportanceOf(note.id)} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input value = {newNote} onChange = {handleNoteChange} />
        <button type="submit">save</button>
      </form>
      <Footer />
    </div>
  )
}


export default App