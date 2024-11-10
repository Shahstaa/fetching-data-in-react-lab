import './App.css'
import * as starshipService from './services/starshipService';
import StarshipSearch from './components/StarshipSearch';
import StarshipList from './components/StarshipList';

import { useState , useEffect } from 'react';

const App = () => {

  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const fetchDefaultData = async () => {
      const data = await starshipService.search('');
      const starshipsData = data.results.map(result => ({
        name: result.name,
        class: result.starship_class,
        manufacturer: result.manufacturer,
        model: result.model,
      }));
      setStarships(starshipsData);
      console.log('Data:' , data);
    };

    fetchDefaultData();
  }, []);

  const fetchData = async (id) => {
    const data = await starshipService.search(id);
    const starshipsData = {
      name: data.name,
      class: data.starship_class,
      manufacturer: data.manufacturer,
      model: data.model,
    };
    setStarships(starshipsData);
  };
  console.log('Data:', starships);

  return (
    <main>
      <h1>Star Wars API</h1>
      <StarshipSearch fetchData={fetchData} />
      <StarshipList starships={starships} />
    </main>
  );
}

export default App;




