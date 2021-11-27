import React from 'react'

export default function SearchInput(props) {

    const handleChange = e => {
        const value = e.target.value;
        props.setSearchingBodies(value);
    }

    return (
        <div className="search">
            <input type="search" onChange={handleChange}/>
        </div>
    )
}
