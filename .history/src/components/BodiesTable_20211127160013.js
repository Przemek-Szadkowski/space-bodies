import React from 'react';
import BodieRecord from './BodieRecord';

export default function BodiesTable(props) {

    const findSearchingBodies = (wordToFind, bodies) => {
        return bodies.filter(bodie => {
            const regex = new RegExp(wordToFind, 'gi');
            return bodie.name.match(regex);
        });
    };

    return (
        <div className="text">
            <div className="mainList">
               {props.bodies && props.bodies.map( bodie => {
                   return <BodieRecord key={bodie.id} data={bodie}/>
               })}
            </div>
        </div>
    )
}
