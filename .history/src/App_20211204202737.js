import React, { useState, useEffect } from 'react';
import BodiesTable from "./components/BodiesTable";
import Dashboard from "./components/Dashboard";
import SearchInput from './components/SearchInput';

const ENDPOINT = 'https://api.le-systeme-solaire.net/rest/bodies/';

function App() {

  const [bodies, setBodies] = useState([]);
  const [arePlanets, setArePlanets] = useState(false);
  const [isSearchInput, setIsSearchInput] = useState(false);
  const [searchingBodies, setSearchingBodies] = useState('');
  const [loading, setLoading] = useState(true);
  const [isSorted, setIsSorted] = useState(false);
  const [sortedBodies, setSortedBodies] = useState([]);

  const getData = async () => {
    const response = await fetch(ENDPOINT);
    const bodiesData = await response.json();
    setBodies(bodiesData);
    setSortedBodies(bodiesData);
    setLoading(false);
  }

  const showPlanets = () => {
    setArePlanets(!arePlanets);
  }

  const toggleSearchInput = () => {
    setIsSearchInput(!isSearchInput);
    if(isSearchInput) setSearchingBodies('');
  }


  useEffect(() => {
      getData();
  }, []);

  return (
    <main>
      {isSearchInput && <SearchInput setSearchingBodies={setSearchingBodies}/>}
      <Dashboard arePlanets={arePlanets} setIsSorted={setIsSorted} setSortedBodies={setSortedBodies} bodies={arePlanets ? bodies.bodies.filter(body => body.isPlanet) : bodies.bodies} showPlanets={showPlanets} toggleSearchInput={toggleSearchInput}/>
      {isSorted ? <BodiesTable loading={loading} searchingBodies={searchingBodies} bodies={sortedBodies}/> : <BodiesTable loading={loading} searchingBodies={searchingBodies} bodies={arePlanets ? bodies.bodies.filter(body => body.isPlanet) : bodies.bodies}/>}
    </main>
  );
}

export default App;