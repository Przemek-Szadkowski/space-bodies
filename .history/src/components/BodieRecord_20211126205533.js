import React from 'react'

export default function BodieRecord(props) {
    console.log(props.data);
    return (
        <div className="record">
            <p>{props.data.name}</p>
            <p>Gravity: {props.data.gravity}</p>
        </div>
    )
}
