import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';


function Nav({onSearch}) {
  return (
    <div className='contenedor'>
      <img src={Logo} />
      <h2 className='titulo'>Henry - Weather App</h2>
      <SearchBar
        onSearch={onSearch}
      />
      
    </div>

  );
};

export default Nav;
