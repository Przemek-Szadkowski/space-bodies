import React from 'react';
import BodieRecord from './BodieRecord';

export default function BodiesTable(props) {
    return (
        <div class="text">
            <ul class="mainList">
               {props.bodies.map( bodie => {
                   return <BodieRecord key={bodie.id} name={bodie.name}/>
               })}
            </ul>
        </div>
    )
}
