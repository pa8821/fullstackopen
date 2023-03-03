import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
import countriesService from './services/countriesService'

const Countries = (props) => {
  if(props.countries.length > 10){
    return (
      <div>
        Too many matches. Specify a new filter. 
      </div>
    )
  }else if(props.countries.length < 10 && props.countries.length > 1)
  {
    return (
      <ul>
        {props.countries.map((country)=>{
          return (
            <li key = {country.name.common}>{country.name.common}</li>
          )
        })}
      </ul>
    )
  }else if(props.countries.length === 1){
    return (
      <div>
        <h1>{props.countries[0].name.common}</h1>
        <p>Capital: {props.countries[0].capital}</p>
        <p>Area: {props.countries[0].area}</p>
        <h2>Languages</h2>
        <ul>
        {Object.entries(props.countries[0].languages).map(([item, name])=><li key={name}>{name}</li>)}
        </ul>
        <div>
          <img src={props.countries[0].flags.png}></img>
        </div>
      </div>
    )
  }
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

