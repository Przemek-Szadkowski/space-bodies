import React from 'react'

export default function BodiesTable(props) {
    return (
        <div class="text">
            <ul class="mainList">
               {props.bodies.map( bodie => {
                   console.log(bodie);
               })}
            </ul>
        </div>
    )
}
