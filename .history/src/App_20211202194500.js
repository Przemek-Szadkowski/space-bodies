import React, { useState, useEffect, useReducer } from 'react';
import BodiesTable from "./components/BodiesTable";
import Dashboard from "./components/Dashboard";
import SearchInput from './components/SearchInput';

const ENDPOINT = 'https://api.le-systeme-solaire.net/rest/bodies/';

// const reducer = (state, action) => {
//   switch(action.type) {
//     case 'TOGGLE_PLANETS':
//       return {...state, arePlanetsVisible: !state.arePlanetsVisible};
//     case 'SHOW_SEARCH_INPUT':
//       return {...state, isSearchInputVisible: true};
//     case 'SEARCH_WORD':
//       const newSearchingWord = action.payload;
//       return {...state, searchingWord: newSearchingWord};
//     default:
//       break;
//   }
// };

// const defaultState = {
//   searchingWord: '',
//   arePlanetsVisible: false,
//   isSearchInputVisible: false,
// };

function App() {

  // const [state, dispatch] = useReducer(reducer, defaultState);

  const [bodies, setBodies] = useState([]);
  const [arePlanets, setArePlanets] = useState(false);
  const [isSearchInput, setIsSearchInput] = useState(false);
  const [searchingBodies, setSearchingBodies] = useState('');
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  return (
    <main>
      {isSearchInput && <SearchInput setSearchingBodies={setSearchingBodies}/>}
      <Dashboard arePlanets={arePlanets} showPlanets={showPlanets} toggleSearchInput={toggleSearchInput}/>
      <BodiesTable loading={loading} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} searchingBodies={searchingBodies} bodies={arePlanets ? bodies.bodies.filter(body => body.isPlanet) : bodies.bodies}/>
    </main>
  );
}

export default App;