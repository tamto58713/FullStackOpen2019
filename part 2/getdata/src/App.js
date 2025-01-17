import React , { useState, useEffect } from 'react';
import axios from 'axios'
import Search from './coponents/seach'
import Country from './coponents/country'
import './app.css'
const App = (props) => {
  const [value, setValue] = useState("")
  const [listCountries, setListCountries] = useState([])
  const [countries, setCountries] = useState([])
  const onClickShow = (e) => {
    setValue(countries[e.target.id].name)
    onChangeSearch(countries[e.target.id].name)
  }
  const onChangeSearch = (value) => {
    setValue(value)
    let temp = listCountries.filter(country => {
      return country.name.toLocaleLowerCase().indexOf(value.toLocaleLowerCase().trim()) !== -1
    })
    setCountries(temp)
  }
  useEffect(() => {
    console.log("Use Effect!")
    axios.get("https://restcountries.eu/rest/v2/all")
         .then(res => {
            setListCountries(res.data)
         })
  }, [])
  return (
    <div>
      <Search onChangeSearch={onChangeSearch} value={value}></Search>
      {
        countries.length >= 10 ? <div>Too many matches, specify another filter</div>: 
        <div> 
          {
            countries.length === 1 && <Country country={countries[0]} />
          }
          { 

            countries.length > 1 &&
            <ul>
              { countries.map((country, index) => {
         
                return <li key={index}>{ country.name } <button id={index} className="btn btn-primary btn-sm country" onClick={onClickShow}>show</button></li>
              })}
            </ul>
          }
        </div>
        }
    </div>
  )
}

export default App;
