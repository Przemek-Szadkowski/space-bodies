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
  const [sortType, setSortType] = useState('');
  const [sortedBodies, setSortedBodies] = useState([]);

  const getData = async () => {
    const response = await fetch(ENDPOINT);
    const bodiesData = await response.json();
    setBodies(bodiesData);
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

  useEffect(() => {
    if(sortType === 'abc') {
      const sorted = bodies.bodies.sort((a,b) => a.name.localeCompare(b.name));
      setSortedBodies(sorted);
    } else if (sortType === 'cba') {
      const sorted = bodies.bodies.sort((a,b) => b.name.localeCompare(a.name));
      setSortedBodies(sorted);
    }
  }, [sortType]);

  return (
    <main>
      {isSearchInput && <SearchInput setSearchingBodies={setSearchingBodies}/>}
      <Dashboard arePlanets={arePlanets} setSortType={setSortType} showPlanets={showPlanets} toggleSearchInput={toggleSearchInput}/>
      <BodiesTable loading={loading} searchingBodies={sortedBodies ? sortedBodies : searchingBodies} bodies={arePlanets ? bodies.bodies.filter(body => body.isPlanet) : bodies.bodies}/>
    </main>
  );
}

export default App;