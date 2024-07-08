import React from 'react';
 import s from './SearchBox.module.css'

const SearchBox = () => {
  return (
      <div className={s.SearchBox}>
          <label className='label' htmlFor="search">Find contacts by name </label>
      <input className={s.input} 
        id="search" 
        type="text" 
      />
    </div>
  )
}

export default SearchBox