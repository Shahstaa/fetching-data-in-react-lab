import './app.css'
import { useState, useEffect } from "react";
import { index, search } from "./service/starshipService";
import StarshipSearch from "./components/StarshipSearch";
import StarshipList from "./components/StarshipList";

const App = () => {
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStarships = async () => {
      const starshipsData = await index();
      setStarships(starshipsData.results); 
      setLoading(false);
    };

    fetchStarships();
  }, []);

  const handleSearch = async (query) => {
    setLoading(true); 
    const searchData = await search(query);
    setStarships(searchData.results || []);
    setLoading(false); 
  };

  return (
    <main>
      <h1>Star Wars API</h1>
      <StarshipSearch onSearch={handleSearch} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <StarshipList starships={starships} />
      )}
    </main>
  );
};

export default App;




