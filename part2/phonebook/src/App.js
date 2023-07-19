import { useState, useEffect } from 'react'
import personService from './services/persons'

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
          <div key = {person.id}>{person.Name} {person.Number} <button onClick={() => props.deletePerson(person.id)}>Delete</button></div>
        )}
    </div>
  )
}

const Notify = ({message}) => {
  const styleOK = {
    color: 'green',
    background: 'lightgrey',
    fontSize: '20px',
    borderStyle: 'solid',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px',
    visibility:'visible',
  }

  const styleBAD = {...styleOK, color:'red'}
  let style = styleOK

  if(message===null){
    return null
  }

  if(message.includes("ERROR")){
    style = styleBAD
  }

  return (
    <div style={style}>
      {message}
    </div>
  )
}
  



const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumb, setNewNumb] = useState('')
  const [filterVal, setFilterVal] = useState("")
  const [notifyMessage, setNotifyMessage] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(response => setPersons(response))
  }, [])

  const peopleToShow = persons ? persons : persons.filter(person => person.name.includes(filterVal))

  const submitPerson = (event) => {
    event.preventDefault()
    if((peopleToShow.map((person) => person.name)).includes(newName))
    {
      if(window.confirm("Change")){
        const newPerson = {...persons.find(p => p.name === newName), number: newNumb}
        personService
          .changePerson(newPerson.id, {name: newPerson.name, number: newPerson.number})
          .then(response => {
            setPersons(persons.map(p => p.id !== newPerson.id ? p : response))
            setNotifyMessage(`Changed ${newName}`)
          })
          .catch(error => {
            setNotifyMessage(`ERROR: Information for ${newName} has been deleted from the server`)
          })
        setTimeout(() => setNotifyMessage(null), 2000)
      }

      else {
        return
      }
    }
  
    else{
      personService
        .add({name: newName, number: newNumb})
        .then(response => setPersons(persons.concat(response)))

      setNotifyMessage(`Added ${newName}`)
      setTimeout(() => setNotifyMessage(null), 2000)
    }
  }

  const deletePerson = (id) => {
    if(window.confirm("Delete")){
      personService 
        .deletePerson(id)
        .then(response => setPersons(persons.filter(p => p.id !== id)))
        .catch(error => {
          setNotifyMessage(`ERROR: Information for ${newName} has been deleted from the server`)
        })
    }
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter text = {filterVal} eventHandler = {setFilterVal} />
      <h2>Add New</h2>
      <Notify message = {notifyMessage}/>
      <Form submitPerson = {submitPerson} newName = {newName} newNumb = {newNumb} setNewNumb = {setNewNumb} setNewName = {setNewName}/>
      <h2>Numbers</h2>
      <People deletePerson = {deletePerson} people = {peopleToShow}/>
    </div>
  )
}

export default App
