import React, { useState } from 'react';
import { User, UserListComponentProps, FilterBarComponentProps } from '../types';
import { FilterBarComponent } from './FilterBarComponent';
import Image from 'next/image';

import './styles/UserListContainer.css';

export const UsersListContainer = (props: UserListComponentProps) => {
  const { usersData, isDataLoading } = props;
  const [toggleColor, setToggleColor] = useState(false);
  const [toggleCountrySort, setCountryToggleSort] = useState(false);
  
  const defaultColor = { 
    color: 'black',
    borderColor: 'black',
    backgroundColor: 'white'
  };

  const customColorColor = { 
    color: 'white',
    borderColor: 'white',
    backgroundColor: 'rgb(78, 78, 78)'
  };

  const onChangeTableColor = () => {
    setToggleColor(prevValue => !prevValue);
  }

  const onToggleCountrySort = () => {
    setCountryToggleSort(prevValue => !prevValue);
  } 

  const sortByString = (a: string, b: string) => {
    let fa = a.toLowerCase(),
        fb = b.toLowerCase();

    if (fa < fb) {
        return -1;
    }
    if (fa > fb) {
        return 1;
    }
    return 0;
  }

  const sortDataByCountry = () => {
    return (
      [...usersData!.results].sort((userA, userB)=> sortByString(userA.location.country, userB.location.country))
    );
  }


  const FilterBarProps: FilterBarComponentProps = {
    onChangeColor: onChangeTableColor,
    onToggleCountrySort,
    handleSearchByCountry: props.handleSearchByCountry,
    resetData: props.resetData,
  }

  return (
    <div className='users-page-container'>
      <FilterBarComponent {...FilterBarProps} />
      { isDataLoading ? (
          <div data-testid='loading-title' className='loading-title'>Loading...</div> 
        ) : (
          !props.hasError ?
          <div data-testid='users-data-table' className='users-table'>
            <div className='users-table-headers'>
              <div className='user-table-cell'>Avatar</div>
              <div className='user-table-cell'>Name</div>
              <div className='user-table-cell'>Last Name</div>
              <div className='user-table-cell'>Country</div>
              <div className='user-table-cell'>Actions</div>
            </div>
            <div className='user-table-rows' style={!toggleColor ? defaultColor : customColorColor}>
              { usersData && 
                (toggleCountrySort ? sortDataByCountry() : usersData.results).map((user: User) => {
                  return (
                    <div key={user.login.uuid} className='user-table-row'>
                      <div className='user-table-cell'>
                        <Image 
                          src={`${user.picture.thumbnail}`} 
                          alt={`${user.name.first} ${user.name.last} avatar`} 
                          width={25}
                          height={25}
                        />
                      </div>
                      <div className='user-table-cell'>{user.name.first}</div>
                      <div className='user-table-cell'>{user.name.last}</div>
                      <div className='user-table-cell'>{user.location.country}</div>
                      <div className='user-table-cell'>
                        <button data-testid={`delete-button-${user.login.uuid}`} onClick={() => props.handleOnDeleteClick(user.login.uuid)}>Delete</button>
                      </div>
                    </div>
                  );
                })
              }  
            </div>
          </div>
          : (
            <div data-testid='error-title' className='error-title'>
              <h1>Error retriving users data</h1>
            </div>
          )
        )        
      }

    </div>
  )
}
