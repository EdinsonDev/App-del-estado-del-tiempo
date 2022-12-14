import React, { useState } from "react";

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState('');
  const handleInputChange = (e) => {
    setCity(e.target.value);
  }
  

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      
    }}>
      <input
        type="text"
        placeholder="Ciudad..."
        onChange={(e) => {handleInputChange(e)}}
      />
      <input type="submit" value="Agregar" />
    </form>
  );
}
