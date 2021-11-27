import React from 'react'

export default function BodieRecord(props) {
    console.log(props);
    return (
        <div className="record">
            <p>{props.name}</p>
        </div>
    )
}
