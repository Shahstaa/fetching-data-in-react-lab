const BASE_URL = "https://swapi.dev/api/starships/";

const searchStarships = async (query) => {
  try {
    
    const response = await fetch(`${BASE_URL}?search=${query}`);
    const data = await response.json();
    console.log('Data:', data);
    return data.results; 
  } catch (error) {
    console.error("Error searching for starships:", error);
    return []; 
  }
};

export { searchStarships };

  