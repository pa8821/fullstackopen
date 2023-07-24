require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')
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

app.get('/api/persons', (request, response, next) => {
    Person.find({}).then(persons => {
      response.json(persons)
    })
    .catch(error => next(error))
})

app.get('/info', (request, response) => {
  const date = new Date()
  response.send(
    `<p>Phonebook has info for ${persons.length} people</p>
    <p>${date}<p>`
  )
})

app.get('/api/persons/:id', (request, response, next) => {
  Person.findById(request.params.id).then(note => {
    response.json(note)
  })
  .catch(error => next(error))
})

app.delete('/api/persons/:id', (request, response, next) => {
  Person.findByIdAndRemove(request.params.id).then(result => {
    response.status(204).end()
  })
  .catch(error => next(error))
})

app.post('/api/persons', (request, response, next) => {
  const body = request.body

  if(!('name' in body && 'number' in body)){
    return response.status(400).json({
      error: 'name and/or number are missing'
    })
  }

  const person = new Person({
    name: body.name,
    number: body.number,
  })

  person.save().then(savedPerson => {
    response.json(savedPerson)
  }).catch(error => next(error))

})

app.put('/api/persons/:id', (request, response) => {
  Person.findByIdAndUpdate(request.params.id).then(person => {
    response.json(person)
  })
  .catch(error => next(error))
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
})

errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if(error.name === "CastError") {
    return response.status(400).send({error: 'malformatted id'})
  }
  else if (error.name === "ValidationError") {
    return response.status(400).json({error: error.message})
  }

  next(error)
}

app.use(errorHandler)