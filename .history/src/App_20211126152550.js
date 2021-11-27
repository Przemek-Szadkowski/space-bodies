import React, { useState, useEffect } from 'react';
import BodiesTable from "./components/BodiesTable";
import Dashboard from "./components/Dashboard";

const ENDPOINT = 'https://api.le-systeme-solaire.net/rest/bodies/';

function App() {

  const [bodies, setBodies] = useState([]);

  const getData = async () => {
    const response = await fetch(ENDPOINT);
    const bodiesData = await response.json();
  }

  useEffect(() => {
      getData();
  });

  return (
    <main>
      <Dashboard/>
      <BodiesTable/>
    </main>
  );
}

export default App;


// const ENDPOINT = 'https://api.le-systeme-solaire.net/rest/bodies/';
// const planetsButton = document.querySelector('.dashboard__btn__main__planets');
// const mainList = document.querySelector('.mainList');

// async function getData(url) {
//     const response = await fetch(url);
  
//     return response.json();
// };
  
// const data = await getData(ENDPOINT);