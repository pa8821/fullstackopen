import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
import countriesService from './services/countriesService'

const Countries = (props) => {
  if(props.countries.length > 10){
    return null
  }

  return (
    <ul>
      {props.countries.map((country)=>{
        return (
          <li key = {country.name.common}>{country.name.common}</li>
        )
      })}
    </ul>
  )
}


const App = () => {
  const [countries, setCountries] = useState(null)
  const [filterInput, setFilterInput] = useState("")

  useEffect(() => {
    countriesService
      .getAll()
      .then(response => setCountries(response))
    }, [])

  if(!countries){
    return null
  }

  const filteredCountries = countries.filter(country => country.name.common.includes(filterInput))

  return (
    <div>
      find countries <input onChange={(event) => setFilterInput(event.target.value)} value = {filterInput} type="text"></input>
      <Countries countries = {filteredCountries}/>
    </div>
  )
}

export default App

