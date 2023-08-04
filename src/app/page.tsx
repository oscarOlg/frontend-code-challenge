"use client";
import styles from './page.module.css'
import { UsersListContainer } from './Components/UsersListContainer';
import { useState, useEffect } from 'react';
import { UserData, UserListComponentProps } from './types';

export const Home = () => {
  const [usersData, setUsersData] = useState<UserData>({results: []});
  const [defaultData, setDefaultData] = useState<UserData>({results: []});
  const [filteredData, setFilteredData] = useState<UserData>({results: []});
  const [isDataLoading, setIsDataLoading] = useState(false); 
  const [error, setError] = useState(false);

  useEffect(() => {
    setFilteredData(usersData)
  }, [usersData])
  

  const resetData = () => {
    setUsersData(defaultData);
    setFilteredData(defaultData);
  }

  const handleOnDeleteClick = (id: string) => {
    const newUsers = filteredData.results.filter(user => user.login.uuid !== id);
    setFilteredData({results: newUsers});
  }

  const handleSearchByCountry = (country: string) => {
    if(country.length) { 
      const normCountry = country.toLocaleLowerCase();
      const filteredData = [...usersData.results].filter(user => user.location.country.toLowerCase().match(normCountry));
      setFilteredData({results: filteredData});
    } else {
      setFilteredData({results: []});
    }
  }

  const UserListProps: UserListComponentProps = {
    usersData: filteredData.results.length ? filteredData : usersData,
    isDataLoading, 
    resetData,
    handleOnDeleteClick,
    handleSearchByCountry,
    hasError: error,
  }

  const fetchUsers = (numOfUsers: number) => {
    fetch(`https://randomuser.me/api/?results=${numOfUsers}`)
      .then(response =>{
        if(response.ok) {
          return response.json();
        }
        throw response;
      })
      .then(data => {
        setUsersData(data);
        setDefaultData(data);
      })
      .catch(error => {
        console.error(error);
        setError(true);
      })
      .finally(() => {
        setIsDataLoading(false);
      })
  }

  useEffect(() => {
    setIsDataLoading(true);
    fetchUsers(100);
  }, []);

  return (
    <main className={styles.main}>
      <h1>Users list</h1>
      {<UsersListContainer {...UserListProps} />} 
    </main>
  )
}
