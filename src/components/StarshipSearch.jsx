import React, { useState } from "react";

const StarshipSearch = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query); 
  };

  return (
    <>
    <h2>Search</h2>
    <form onSubmit={handleSubmit}>
        <label htmlFor="spaceshipName">Search Term: </label>
        <input
         type="text"
         value={query}
         onChange={(e) => setQuery(e.target.value)}
         placeholder="Search for a starship..."
       />
      <button type="submit">Search</button>
    </form>
</>
);
};

export default StarshipSearch







    
