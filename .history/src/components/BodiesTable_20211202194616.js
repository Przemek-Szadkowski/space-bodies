import React from 'react';
import BodieRecord from './BodieRecord';
import Loader from './Loader';

export default function BodiesTable(props) {

    const findSearchingBodies = (wordToFind, bodies) => {
        return bodies.filter(bodie => {
            const regex = new RegExp(wordToFind, 'gi');
            return bodie.name.match(regex);
        });
    };

    const handelRecordClick = () => {
        console.log("click!");
    };

    return (
        <div className="text">
            {props.loading ? <Loader/> : <div className="mainList">
               {props.searchingBodies
               ? findSearchingBodies(props.searchingBodies, props.bodies).map( bodie => {
                    return <BodieRecord key={bodie.id} data={bodie} onClick={handelRecordClick}/>})
                : props.bodies && props.bodies.map( bodie => {
                   return <BodieRecord key={bodie.id} data={bodie} onClick={handelRecordClick}/>
               })}
            </div>}
        </div>
    )
}



