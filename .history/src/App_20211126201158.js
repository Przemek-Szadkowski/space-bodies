import React, { useState, useEffect } from 'react';
import BodiesTable from "./components/BodiesTable";
import Dashboard from "./components/Dashboard";

const ENDPOINT = 'https://api.le-systeme-solaire.net/rest/bodies/';

function App() {

  const [bodies, setBodies] = useState([]);

  const getData = async () => {
    const response = await fetch(ENDPOINT);
    const bodiesData = await response.json();
    setBodies(bodiesData);
  }

  useEffect(() => {
      getData();
  }, []);

  return (
    <main>
      <Dashboard bodies={bodies.bodies} setBodies={setBodies}/>
      <BodiesTable bodies={bodies.bodies}/>
    </main>
  );
}

export default App;