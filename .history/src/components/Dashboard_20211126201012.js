import React from 'react'

export default function Dashboard(props) {
    const showPlanets = () => {
        console.log(props.bodies);
    }
    return (
        <div className="dashboard">
            <button
            className="dashboard__btn dashboard__btn__main dashboard__btn__main__planets" onClick={showPlanets}>Planets</button>
            <button className="dashboard__btn dashboard__btn__main">All bodies</button>
            <button className="dashboard__btn dashboard__btn__start">Search</button>
            <button className="dashboard__btn dashboard__btn__options">1</button>
            <button className="dashboard__btn dashboard__btn__options">2</button>
            <button className="dashboard__btn dashboard__btn__options">3</button>
            <button className="dashboard__btn dashboard__btn__options">4</button>
        </div>
    )
}
