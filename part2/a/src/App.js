import Note from "./components/Note"
import { useState } from 'react'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState("A new note")
  const [showAll, setShowAll] = useState(true)

  const notesToShow = showAll ? notes : notes.filter(note => note.important)

  const addNote = (event) => {
    event.preventDefault()
    const noteToAdd = {
      id: notes.length + 1, 
      content: newNote, 
      date: new Date().toISOString(),
      important: true
    }
    setNotes(notes.concat(noteToAdd))
  }

  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }

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
          <Note key = {note.id} note = {note} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input value = {newNote} onChange = {handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </div>
  )
}


export default App