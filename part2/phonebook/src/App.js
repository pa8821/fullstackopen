import { useState } from 'react'

const Filter = (props) => {
  return (
    <div>
      Filter
      <input value = {props.text} onChange = {(event) => props.eventHandler(event.target.value)} />
    </div>
  )
}

const Form = (props) => {
  return (
    <form onSubmit={props.submitPerson}>
      <div>name:   <input value = {props.newName} onChange = {(event) => props.setNewName(event.target.value)}/></div>
      <div>number: <input value = {props.newNumb} onChange = {(event) => props.setNewNumb(event.target.value)}/></div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

const People = (props) => {
  return ( 
    <div>
        {props.people.map((person) => 
          <div key = {person.name}>{person.name} {person.number}</div>
        )}
    </div>
  )
}


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' , number: '07777333722'}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumb, setNewNumb] = useState('')
  const [filterVal, setFilterVal] = useState("")

  const peopleToShow = persons.filter((person) => person.name.includes(filterVal))

  const submitPerson = (event) => {
    event.preventDefault()
    if((peopleToShow.map((person) => person.name)).includes(newName))
    {
      alert(`${newName} is already added to phonebook`)
      return
    }
    setPersons(persons.concat({name: newName, number: newNumb}))
    setNewName("")
    setNewNumb("")
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter text = {filterVal} eventHandler = {setFilterVal} />
      <h2>Add New</h2>
      <Form submitPerson = {submitPerson} newName = {newName} newNumb = {newNumb} setNewNumb = {setNewNumb} setNewName = {setNewName}/>
      <h2>Numbers</h2>
      <People people = {peopleToShow} />
    </div>
  )
}

export default App
