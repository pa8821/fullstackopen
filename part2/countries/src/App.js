import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
import countriesService from './services/countriesService'

const Country = ({country}) => {
  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>Capital: {country.capital}</p>
      <p>Area: {country.area}</p>
      <h2>Languages</h2>
      <ul>
      {Object.entries(country.languages).map(([item, name])=><li key={name}>{name}</li>)}
      </ul>
      <div>
        <img src={country.flags.png}></img>
      </div>
    </div>
  )
}


const Countries = ({countries, setFilteredCountries}) => {
  if(countries.length > 10){
    return (
      <div>
        Too many matches. Specify a new filter. 
      </div>
    )
  }
  else if(countries.length < 10 && countries.length > 1)
  {
    return (
      <ul>
        {countries.map((country)=>{
          return (
            <div key = {country.ccn3}>
              <li key={country.ccn3}>{country.name.common}</li>
              <button onClick = {(event) => setFilteredCountries([country])} key={`b${country.ccn3}`}>view</button>
            </div>
          )
        })}
      </ul>
    )
  }
  else if(countries.length === 1){
    return (
      <Country country = {countries[0]} />
    )
  }
}


const App = () => {
  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])
  const [filterInput, setFilterInput] = useState("")

  useEffect(() => {
    countriesService
      .getAll()
      .then(response => setCountries(response))
    }, [])

  const filter = (event) => {
    setFilterInput(event.target.value)
    //Note that setFilteredCountries must use event.target.value, as react does not immediately update the filterInput state, rather this is updated upon component
    //re-render
    setFilteredCountries(countries.filter((country) => country.name.common.includes(event.target.value)))
  }

  return (
    <div>
      find countries <input onChange = {filter} value = {filterInput}></input>
      <Countries countries = {filteredCountries} setFilteredCountries = {setFilteredCountries}/>
    </div>
  )
}

export default App

