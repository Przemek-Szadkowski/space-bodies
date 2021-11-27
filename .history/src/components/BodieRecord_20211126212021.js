import React from 'react'

export default function BodieRecord(props) {
    console.log(props.data);
    return (
        <div className="record">
            <p>{props.data.name}</p>
            <p className="bodie-data">Gravity: {props.data.gravity}</p>
            <p className="bodie-data">Density: {props.data.density}</p>
            <p className="bodie-data">Mass: {props.data.mass ? props.data.mass.massValue : 'NA'}</p>
            <p className="bodie-data">Average temp. : {props.data.avgTemp}</p>
            <p className="bodie-data">Moons : {props.data.moons ? props.data.moons.length : 0}</p>
        </div>
    )
}
