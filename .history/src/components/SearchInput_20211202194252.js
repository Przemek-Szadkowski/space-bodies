import React from 'react'

export default function SearchInput(props) {

    const handleChange = e => {
        const value = e.target.value;
        props.setSearchingBodies(value);
    }

    return (
        <div className="search">
            <label htmlFor="search">Search by name:</label>
            <input type="search" id="search" name="search" autoFocus autocomplete="off" onChange={handleChange}/>
        </div>
    )
}
