import React from 'react'

export default function Dashboard(props) {

    const handleABC = () => {
        console.log(props.bodies.sort((a,b) => a.name > b.name));
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
            <button className="dashboard__btn dashboard__btn__options" onClick={handleABC}>1</button>
            <button className="dashboard__btn dashboard__btn__options">2</button>
            <button className="dashboard__btn dashboard__btn__options">3</button>
            <button className="dashboard__btn dashboard__btn__options">4</button>
        </div>
    )
}
