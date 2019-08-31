import React from 'react'

const Filter = (props) => {
    return (
        <div>
            <input type="text" placeholder="Search" onChange={props.onChangeFilter}/>
        </div>
    )
}

export default Filter