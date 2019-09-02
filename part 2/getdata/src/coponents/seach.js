import React from 'react'

const Search = (props) => {
    const onChangeSearch = (e) => {
        props.onChangeSearch(e.target.value);
    }
    return (
        <div>
            <form className="form-inline mt-3 mb-3">
                <label>Find Country</label>
                <input value={props.value}type="text" className="form-control ml-2" onChange={onChangeSearch}/>
            </form>
        </div>
    )
}

export default Search