const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

app.use(express.static('build'))
app.use(cors())
app.use(express.json()) 

morgan.token('body', (req, res) => JSON.stringify(req.body))
app.use(morgan((tokens, req, res)=>{
  return [
    tokens.method(req, res),
    tokens.url(req, res), 
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms', 
    tokens.body(req, res)
  ].join(' ')
}))

let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/info', (request, response) => {
  const date = new Date()
  response.send(
    `<p>Phonebook has info for ${persons.length} people</p>
    <p>${date}<p>`
  )
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  response.json(persons.filter(n => n.id == id))
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(n => n.id !== id)
  response.status(204).end()
})

app.post('/api/persons', (request, response) => {
  const body = request.body

  if(!('name' in body && 'number' in body)){
    return response.status(400).json({
      error: 'name and/or number are missing'
    })
  }

  if(persons.map(p => p.name).includes(body.name)){
    return response.status(400).json({
      error: 'name already exists'
    })
  }

  const id = Math.round(Math.random()*100)
  const person = {...body, 'id':id}
  persons.push(person)
  return response.json(person)
})

app.put('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const newPerson = {...request.body, id:id}
  persons = persons.map(p => p.id === id ? newPerson : p)
  return response.json({...newPerson, id:id})
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
})