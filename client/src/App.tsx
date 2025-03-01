import { useState } from 'react';
import { CardsContainer, ManagementBanner } from './components';
import './App.css';

export const App = () => {
  const [searchValue, setSearchValue] = useState('');

  const onSearchValueChange = (value: string) => {
    setSearchValue(value);
  };
  return (
    <>
      <div className="appTitle">
        <img className="appLogo" src={'appIcon.png'} />
        Rated Movies
      </div>
      <div className="appContainer">
        <ManagementBanner searchValue={searchValue} onSearchValueChange={onSearchValueChange} />
        <CardsContainer searchValue={searchValue} />
      </div>
    </>
  );
};
