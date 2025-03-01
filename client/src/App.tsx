import { useState } from 'react';
import { CardsContainer, ManagementBanner } from './components';
import './App.css';

export const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [hideAdult, setHideAdult] = useState(false);

  const onSearchValueChange = (value: string) => {
    setSearchValue(value);
  };

  const onHideAdultChange = () => {
    setHideAdult((hideAdult) => !hideAdult);
  };

  return (
    <>
      <div className="appTitle">
        <img className="appLogo" src={'appIcon.png'} />
        Rated Movies
      </div>
      <div className="appContainer">
        <ManagementBanner
          searchValue={searchValue}
          onSearchValueChange={onSearchValueChange}
          hideAdult={hideAdult}
          onHideAdultChange={onHideAdultChange}
        />
        <CardsContainer searchValue={searchValue} hideAdult={hideAdult} />
      </div>
    </>
  );
};
