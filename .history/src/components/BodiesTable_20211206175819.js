import React, {useRef} from 'react';
import BodieRecord from './BodieRecord';
import Loader from './Loader';

export default function BodiesTable(props) {

    const refText = useRef(null);
    const refProgressBar = useRef(null);

    const findSearchingBodies = (wordToFind, bodies) => {
        return bodies.filter(bodie => {
            const regex = new RegExp(wordToFind, 'gi');
            return bodie.name.match(regex);
        });
    };

    const handleScroll = () => {
        console.log(refText);
        const height = 106 - (Math.round((refText.current.scrollTop * 100) / (refText.current.scrollHeight)));
        refProgressBar.current.style.bottom = `${height}%`;
    
    };

    return (
        <>
            <div className="text" onScroll={handleScroll} ref={refText}>
                <div className="progress_bar" ref={refProgressBar}></div>
                {props.loading ? <Loader/> : <div className="mainList">
                {props.searchingBodies
                ? findSearchingBodies(props.searchingBodies, props.bodies).map( bodie => {
                        return <BodieRecord key={bodie.id} data={bodie}/>})
                    : props.bodies && props.bodies.map( bodie => {
                    return <BodieRecord key={bodie.id} data={bodie}/>
                })}
                </div>}
            </div>
        </>
    )
}



