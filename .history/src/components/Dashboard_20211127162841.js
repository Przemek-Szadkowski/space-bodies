import React from 'react'

export default function Dashboard(props) {
    return (
        <div className="dashboard">
            <button
            className="dashboard__btn dashboard__btn__main dashboard__btn__main__planets"
            onClick={props.showPlanets && this.classList.add('red')}>
                Planets
            </button>
            <button className="dashboard__btn dashboard__btn__main" onClick={props.showAllBodies}>All bodies</button>
            <button className="dashboard__btn dashboard__btn__start" onClick={props.toggleSearchInput}>Search</button>
            <button className="dashboard__btn dashboard__btn__options">1</button>
            <button className="dashboard__btn dashboard__btn__options">2</button>
            <button className="dashboard__btn dashboard__btn__options">3</button>
            <button className="dashboard__btn dashboard__btn__options">4</button>
        </div>
    )
}