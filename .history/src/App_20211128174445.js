import React, { useState, useEffect, useReducer } from 'react';
import BodiesTable from "./components/BodiesTable";
import Dashboard from "./components/Dashboard";
import SearchInput from './components/SearchInput';

const ENDPOINT = 'https://api.le-systeme-solaire.net/rest/bodies/';

const reducer = (state, action) => {
  switch(action.type) {
    case 'SHOW_PLANETS':
      return {...state, arePlanetsVisible: true};
      break;
    default:
      break;
  }
}

const defaultState = {
  bodies: [],
  searchingWord: '',
  arePlanetsVisible: false,
  isSearchInputVisible: false,
};

function App() {

  const [state, dispatch] = useReducer(reducer, defaultState);

  const [bodies, setBodies] = useState([]);
  const [arePlanets, setArePlanets] = useState(false);
  const [isSearchInput, setIsSearchInput] = useState(false);
  const [searchingBodies, setSearchingBodies] = useState('');

  const getData = async () => {
    const response = await fetch(ENDPOINT);
    const bodiesData = await response.json();
    setBodies(bodiesData);
  }

  const showPlanets = () => {
    setArePlanets(true);
  }

  const showAllBodies = () => {
    setArePlanets(false);
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
      {isSearchInput ? <SearchInput setSearchingBodies={setSearchingBodies}/> : null}
      <Dashboard arePlanets={arePlanets} showPlanets={showPlanets} showAllBodies={showAllBodies} toggleSearchInput={toggleSearchInput}/>
      <BodiesTable searchingBodies={searchingBodies} bodies={arePlanets ? bodies.bodies.filter(body => body.isPlanet) : bodies.bodies}/>
    </main>
  );
}

export default App;