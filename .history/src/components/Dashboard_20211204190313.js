import React from 'react'

export default function Dashboard(props) {

    const handleSort = type => {
        // switch(type) {
        //     case 'abc':
        //         const sorted = props.bodies.sort((a,b) => a.name.localeCompare(b.name));
        //         props.setSortedBodies(sorted);
        //         break;
        //     default:
        //         break;
        // }
    }

    return (
        <div className="dashboard">
            <button
                className={
                    !props.arePlanets
                    ? "dashboard__btn dashboard__btn__main dashboard__btn__main--active"
                    :  "dashboard__btn dashboard__btn__main"
                }
                onClick={props.arePlanets ? props.showPlanets : null}>
                    All bodies
            </button>
            <button
                className={
                    props.arePlanets
                    ? "dashboard__btn dashboard__btn__main dashboard__btn__main__planets dashboard__btn__main__planets--active"
                    : "dashboard__btn dashboard__btn__main dashboard__btn__main__planets"
                }
                onClick={props.arePlanets ? null : props.showPlanets}>
                    Planets
            </button>
            <button className="dashboard__btn dashboard__btn__start" onClick={props.toggleSearchInput}>Search</button>
            <button className="dashboard__btn dashboard__btn__options" onClick={() => handleSort('abc')}>1</button>
            <button className="dashboard__btn dashboard__btn__options" onClick={() => handleSort('cba')}>2</button>
            <button className="dashboard__btn dashboard__btn__options">3</button>
            <button className="dashboard__btn dashboard__btn__options">4</button>
        </div>
    )
}
