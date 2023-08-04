import React from 'react';

import './styles/FilterBarComponent.css';
import { FilterBarComponentProps } from '../types';

export const FilterBarComponent = (props: FilterBarComponentProps) => {
  return (
    <div data-testid='filter-bar' className='filterbar-container'>
      <button data-testid='change-color-button' onClick={() => props.onChangeColor()}>Color table</button>
      <button data-testid='sort-button' onClick={() => props.onToggleCountrySort()}>Sort by country</button>
      <button data-testid='reset-button' onClick={() => props.resetData()}>reset</button>
      <input data-testid='search-input' placeholder='Search by Country' onChange={e => props.handleSearchByCountry(e.target.value)}></input>
    </div>
  )
}
