import React, {useRef} from 'react'

export default function BodieRecord(props) {

    const refInput = useRef(null);

    const handleRecordClick = () => {
        refInput.current.classList.toggle('active');
    };

    return (
        <div className="record" onClick={handleRecordClick} ref={refInput}>
            <p >{props.data.name}</p>
            <p className="bodie-data">Density: {props.data.density} <span class="unit">( g.cm3 )</span></p>
            <p className="bodie-data">Gravity: {props.data.gravity} <span class="unit">m.s-2</span></p>
            <p className="bodie-data">Mass: {props.data.mass ? props.data.mass.massValue : 'NA'} <span class="unit"> in 10<sup>n</sup> kg</span></p>
            <p className="bodie-data">Mean radius : {props.data.meanRadius} <span class="unit">km</span></p>
            <p className="bodie-data">Moons : {props.data.moons ? props.data.moons.length : 0}</p>
            <p className="bodie-data">Sideral orbit: {props.data.sideralOrbit} <span class="unit">in earth day</span></p>
            <p className="bodie-data">Sideral rotation: {props.data.sideralRotation}</p>
        </div>
    )
}
