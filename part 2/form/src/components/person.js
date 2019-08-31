import React from 'react'
const Person = (props) => {
    const onNameChange = (e) => {
        props.onNameChange(e.target.value)
    }
    const onNumberChange = (e) => {
        props.onNumberChange(e.target.value)
    }   
    const onSubmit = () => {
        props.onSubmit()
    }
    return (
        <div className="form-group">
            <form className="form-inline mb-1">
                <label className="mr-4">Name</label>
                <input className="form-control" type="text" onChange={onNameChange}/>
            </form>
            <form className="form-inline">
                <label  className="mr-2">Number</label>
                <input className="form-control" type="text" onChange={onNumberChange}/>
            </form>
            <button className="btn btn-primary" onClick={onSubmit}>OK</button>
      </div>
    )
} 

export default Person