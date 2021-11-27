import React, { useState, useEffect } from 'react';
import BodiesTable from "./components/BodiesTable";
import Dashboard from "./components/Dashboard";

const ENDPOINT = 'https://api.le-systeme-solaire.net/rest/bodies/';

function App() {

  const [bodies, setBodies] = useState([]);
  const [arePlanets, setArePlanets] = useState(false);

  const getData = async () => {
    const response = await fetch(ENDPOINT);
    const bodiesData = await response.json();
    setBodies(bodiesData);
  }

  const showPlanets = () => {
    setArePlanets(true);
  }

  useEffect(() => {
      getData();
  }, []);

  return (
    <main>
      <Dashboard toggleShowingPlanets={toggleShowingPlanets}/>
      <BodiesTable bodies={bodies.bodies}/>
    </main>
  );
}

export default App;