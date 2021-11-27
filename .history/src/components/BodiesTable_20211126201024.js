import React from 'react';
import BodieRecord from './BodieRecord';

export default function BodiesTable(props) {
    return (
        <div className="text">
            <div className="mainList">
               {props.bodies && props.bodies.map( bodie => {
                   return <BodieRecord key={bodie.id} name={bodie.name}/>
               })}
            </div>
        </div>
    )
}
