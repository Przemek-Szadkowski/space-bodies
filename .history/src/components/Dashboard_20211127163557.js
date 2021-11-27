import React from 'react'

export default function Dashboard(props) {
    return (
        <div className="dashboard">
            <button
                className={
                    props.arePlanets
                    ? "dashboard__btn dashboard__btn__main dashboard__btn__main__planets dashboard__btn__main__planets--active"
                    : "dashboard__btn dashboard__btn__main dashboard__btn__main__planets"
                }
                onClick={props.showPlanets}>
                    Planets
            </button>
            <button
                className={
                    !props.arePlanets
                    ? "dashboard__btn dashboard__btn__main dashboard__btn__main--active"
                    :  "dashboard__btn dashboard__btn__main"
                }
                onClick={props.showAllBodies}>
                    All bodies
            </button>
            <button className="dashboard__btn dashboard__btn__start" onClick={props.toggleSearchInput}>Search</button>
            <button className="dashboard__btn dashboard__btn__options">1</button>
            <button className="dashboard__btn dashboard__btn__options">2</button>
            <button className="dashboard__btn dashboard__btn__options">3</button>
            <button className="dashboard__btn dashboard__btn__options">4</button>
        </div>
    )
}
