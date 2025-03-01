import { useState } from 'react';
import { CardsContainer, ManagementBanner } from './components';
import './App.css';

export const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [hideAdult, setHideAdult] = useState(false);
  const [languageOptions, setLanguageOptions] = useState<{ name: string }[]>();
  const [languageSortValue, setLanguageSortValue] = useState<{ name: string } | null>(null);
  const [genresSortValue, setGenresSortValue] = useState<{ name: string; id: number } | null>(null);

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
          languageOptions={languageOptions}
          languageSortValue={languageSortValue}
          setLanguageSortValue={setLanguageSortValue}
          genresSortValue={genresSortValue}
          setGenresSortValue={setGenresSortValue}
        />
        <CardsContainer
          searchValue={searchValue}
          hideAdult={hideAdult}
          setLanguageOptions={setLanguageOptions}
          languageSortValue={languageSortValue}
          genresSortValue={genresSortValue}
        />
      </div>
    </>
  );
};
