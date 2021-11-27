import React from 'react';
import BodieRecord from './BodieRecord';

export default function BodiesTable(props) {
    return (
        <div class="text">
            <ul class="mainList">
                console.log(props.bodies);
               {props.bodies.map( bodie => {
                   return <BodieRecord key={id} name={bodie.name}/>
               })}
            </ul>
        </div>
    )
}
