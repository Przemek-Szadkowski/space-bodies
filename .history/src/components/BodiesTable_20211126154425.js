import React from 'react'
import BodieRecord from './BodieRecord'

export default function BodiesTable(props) {
    return (
        <div class="text">
            <ul class="mainList">
               {props.bodies.map( bodie => {
                   <BodieRecord/>
               })}
            </ul>
        </div>
    )
}
