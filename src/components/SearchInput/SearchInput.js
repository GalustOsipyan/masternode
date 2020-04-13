import React, { useState } from 'react';
import './SearchInput.scss';

export const SearchInput = () => {

  const [value, setValue] = useState('');
  
  const [placeholder, setPlaceholder] = useState('Search on the page...');

  const searchInputHandler = (e) => {
    setValue(e.target.value);
  };


  return (
    <div className='SearchInput'>
      <label htmlFor='searchInput' className='mb-0'>
        <input
          type="text"
          id='searchInput'
          value={ value }
          onChange={ searchInputHandler }
          onFocus={ () => setPlaceholder('') }
          onBlur={ () => setPlaceholder('Search on the page...') }
          placeholder={ placeholder }
        />
      </label>
    </div>
  );
};

