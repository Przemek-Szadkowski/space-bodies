import React from 'react'

export default function BodieRecord(props) {

    const handelRecordClick = e => {
        console.log(this);
    };

    return (
        <div className="record" onClick={this.handelRecordClick.bind(this)}>
            <p >{props.data.name}</p>
            <p className="bodie-data">Density: {props.data.density}</p>
            <p className="bodie-data">Gravity: {props.data.gravity}</p>
            <p className="bodie-data">Mass: {props.data.mass ? props.data.mass.massValue : 'NA'}</p>
            <p className="bodie-data">Mean radius : {props.data.meanRadius}</p>
            <p className="bodie-data">Moons : {props.data.moons ? props.data.moons.length : 0}</p>
            <p className="bodie-data">Sideral orbit: {props.data.sideralOrbit}</p>
            <p className="bodie-data">Sideral rotation: {props.data.sideralRotation}</p>
        </div>
    )
}
