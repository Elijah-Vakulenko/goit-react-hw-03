import React from 'react';
import s from './SearchBox.module.css';

const SearchBox = ({ filter, onFilterChange }) => {
  return (
    <div className={s.searchBox}>
      <label className='label' htmlFor="search">Find contacts by name:</label>
      <input
        className={s.input}
        id="search"
        type="text"
        value={filter}
        onChange={onFilterChange}
        placeholder="Enter name..."
      />
    </div>
  );
};

export default SearchBox;
