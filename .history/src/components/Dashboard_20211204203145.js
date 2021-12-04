import React from 'react'

export default function Dashboard(props) {

    const handleCLick = () => {
        props.setIsSorted(true);
        const sortedBodies = props.bodies.sort((a,b) => a.name.localeCompare(b.name));
        props.setSortedBodies(sortedBodies);
    }

    return (
        <div className="dashboard">
            <button
                className={
                    !props.arePlanets
                    ? "dashboard__btn dashboard__btn__main dashboard__btn__main--active"
                    :  "dashboard__btn dashboard__btn__main"
                }
                onClick={props.showBodies}>
                    All bodies
            </button>
            <button
                className={
                    props.arePlanets
                    ? "dashboard__btn dashboard__btn__main dashboard__btn__main__planets dashboard__btn__main__planets--active"
                    : "dashboard__btn dashboard__btn__main dashboard__btn__main__planets"
                }
                onClick={props.showPlanets}>
                    Planets
            </button>
            <button className="dashboard__btn dashboard__btn__start" onClick={props.toggleSearchInput}>Search</button>
            <button className="dashboard__btn dashboard__btn__options" onClick={handleCLick}>1</button>
            <button className="dashboard__btn dashboard__btn__options">2</button>
            <button className="dashboard__btn dashboard__btn__options">3</button>
            <button className="dashboard__btn dashboard__btn__options">4</button>
        </div>
    )
}
