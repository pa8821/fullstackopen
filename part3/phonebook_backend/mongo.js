const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]

const url =
  `mongodb+srv://fullstack:${password}@cluster0.9ecqbkx.mongodb.net/phonebook?retryWrites=true&w=majority`

mongoose.set('strictQuery',false)
mongoose.connect(url)

const phoneBookSchema = new mongoose.Schema({
  Name: String,
  Number: String,
})

const Entry = mongoose.model('PhoneBook', phoneBookSchema)

if (process.argv.length === 3) {
  Entry.find({}).then(result => {
    result.forEach(note => {
      console.log(note)
    })
    mongoose.connection.close()
  })
}
else {
  const entry = new Entry({
    Name: name, 
    Number: number,
  })
  
  entry.save().then(result => {
    console.log('person saved!')
    mongoose.connection.close()
  })
}

