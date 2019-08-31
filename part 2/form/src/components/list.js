import React from 'react'
const List = (props) => {
    return (
        <div>
        { props.contacts.map((contact, index) => {
          return (
            <div key={index}>
              <h6>Name: { contact.name }</h6>
              <h6>Number: { contact.number }</h6>
            </div>
          )
        })}  
      </div>  
    )
}

export default List