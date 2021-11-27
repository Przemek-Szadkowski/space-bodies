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
    // console.log(bodiesData);
  }

  useEffect(() => {
      getData();
  }, []);

  return (
    <main>
      <Dashboard/>
      bodies ? <BodiesTable bodies={bodies.bodies}/> : null
    </main>
  );
}

export default App;