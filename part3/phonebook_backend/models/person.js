const mongoose = require('mongoose')

const url =
  `mongodb+srv://fullstack:fullstack@cluster0.9ecqbkx.mongodb.net/phonebook?retryWrites=true&w=majority`

mongoose.set('strictQuery',false)
mongoose.connect(url)

const personSchema = new mongoose.Schema({
    name: {
      type: String, 
      minLength: 3,
      required: true
    },
    number: {
      type: String, 
      validate: v => {
        return /\d{2}\-/.test(v);
      }
    }
})

personSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

module.exports = mongoose.model("Person", personSchema)