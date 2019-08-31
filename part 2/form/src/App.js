import React, { useState } from 'react';

import './App.css';
import Filter from './components/filter'
import Person from './components/person'
import List from './components/list'

const App = (props) => {
  const init = [
    {name: "Tam To Tran", number: 6364}, 
    {name: "Tam Binh", number: 72098}
  ]
  const [contacts, setContacts] = useState(init)
  const [contact, setContact] = useState({})
  const [errors, setErrors] = useState([])
  const [contactFilter, setContactFilter] = useState(init)
  const onChangeFilter = (e) => {
    let value = e.target.value
    let temp = contacts.filter((contact) => {
      debugger;
      return (contact.name.toLocaleLowerCase().indexOf(value.trim().toLocaleLowerCase()) !== -1 || contact.number.toString().toLocaleLowerCase().indexOf(value.trim().toLocaleLowerCase()) !== -1)
    })
    setContactFilter([...temp])
    debugger;
    console.log(contact, "filter", value, contactFilter)  
  }
  const onNameChange = (value) => {
    setContact({...contact, name: value})
  }
  const onNumberChange = (value) => {
    setContact({...contact, number: value})
  }
  const onSubmit = () => {
    let number = parseInt(contact.number)
    if (!number) {
      let temp = [];
      temp = errors.filter(err => {
        return err.name === "Wrong number!"
      })
      if (temp.length  === 0)
        setErrors([...errors, {name: "Wrong number!"}] )
    }
    else {
      let temp = [];
      if (contacts.length > 0) {
        temp = contacts.filter(contact => {
          return (contact.number === number ) 
        })
      }
      if (temp.length > 0)   {
        let temp = errors.filter(err => {
          return err.name === "Number existed"
        })
        if (temp.length === 0) {
          setErrors([...errors, {name: "Number Existed"}] )
        }
        
      }
      else {
        console.log("submited")
        setContacts([...contacts, {...contact, number: number}])
        setContactFilter([...contacts, {...contact, number: number}])
      }
  }
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter contact={contact} onChangeFilter={onChangeFilter} />
      <h1>Add a new</h1>
      { errors.length > 0 && <div className="alert alert-danger">
        {
          errors.map(error => {
            return error.name
          })
        }
      </div>}

      <Person onNameChange={onNameChange} onNumberChange={onNumberChange} onSubmit={onSubmit}/>
      <List contacts={contactFilter}></List>
    </div>
  )
}
export default App;
