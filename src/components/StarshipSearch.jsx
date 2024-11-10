import { useState } from 'react';

const StarshipSearch = (props) => {
  const [spaceshipName, setSpaceshipName] = useState('');  

  const handleSubmit = (e) => {
      e.preventDefault();
      props.fetchData(spaceshipName);  
      setSpaceshipName(''); 
  };

  return (
    <section>
    <h2>Search</h2>
    <form onSubmit={handleSubmit}>
        <label htmlFor="starship">Search Term by ID:</label>
        <input
        id="starship"
        type="number"
        value={id}
        onChange={(e) => setId(e.target.value)}
        />
        <button type="submit">Search</button>
    </form>
    </section>
);
};

export default StarshipSearch;