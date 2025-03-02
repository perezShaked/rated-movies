import { useState } from 'react';
import { CardsContainer, ManagementBanner } from './components';
import './App.css';

export const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [hideAdult, setHideAdult] = useState(false);
  const [languageOptions, setLanguageOptions] = useState<{ name: string }[]>();
  const [languageSortValue, setLanguageSortValue] = useState<{ name: string }>();
  const [genresSortValue, setGenresSortValue] = useState<{ name: string; id: number }>();
  const [releaseYearSortStart, setReleaseYearSortStart] = useState<number>();
  const [releaseYearSortEnd, setReleaseYearSortEnd] = useState<number>();
  const [rateSortStart, setRateSortStart] = useState<number>();
  const [rateSortEnd, setRateSortEnd] = useState<number>();
  const [voteCountSortStart, setVoteCountSortStart] = useState<number>();
  const [voteCountSortEnd, setVoteCountSortEnd] = useState<number>();

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
          languageOptions={languageOptions}
          searchValueControl={{ value: searchValue, setFunc: setSearchValue }}
          hideAdultControl={{ value: hideAdult, setFunc: onHideAdultChange }}
          languageSortValueControl={{ value: languageSortValue, setFunc: setLanguageSortValue }}
          genresSortValueControl={{ value: genresSortValue, setFunc: setGenresSortValue }}
          releaseYearSortEndControl={{ value: releaseYearSortEnd, setFunc: setReleaseYearSortEnd }}
          releaseYearSortStartControl={{
            value: releaseYearSortStart,
            setFunc: setReleaseYearSortStart,
          }}
          rateSortStartControl={{ value: rateSortStart, setFunc: setRateSortStart }}
          rateSortEndControl={{ value: rateSortEnd, setFunc: setRateSortEnd }}
          voteCountSortStartControl={{ value: voteCountSortStart, setFunc: setVoteCountSortStart }}
          voteCountSortEndControl={{ value: voteCountSortEnd, setFunc: setVoteCountSortEnd }}
        />
        <CardsContainer
          searchValue={searchValue}
          hideAdult={hideAdult}
          setLanguageOptions={setLanguageOptions}
          languageSortValue={languageSortValue}
          genresSortValue={genresSortValue}
          releaseYearSortStart={releaseYearSortStart}
          releaseYearSortEnd={releaseYearSortEnd}
          rateSortStart={rateSortStart}
          rateSortEnd={rateSortEnd}
          voteCountSortStart={voteCountSortStart}
          voteCountSortEnd={voteCountSortEnd}
        />
      </div>
    </>
  );
};
