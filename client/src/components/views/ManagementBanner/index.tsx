import { useGetMoviesGenres } from '../../../hooks';
import { SearchBar } from './SearchBar';
import { RangeSort } from './RangeSort';
import { Dropdown } from './Dropdown';
import { BooleanSort } from './BooleanSort';
import './ManagementBanner.css';

type ManagementBannerProps = {
  searchValue: string;
  onSearchValueChange: (value: string) => void;
  hideAdult: boolean;
  onHideAdultChange: () => void;
  languageOptions: { name: string }[] | undefined;
  languageSortValue: { name: string } | null;
  setLanguageSortValue: (value: { name: string } | null) => void;
  genresSortValue: { name: string; id?: number } | null;
  setGenresSortValue: (value: { name: string; id: number } | null) => void;
  releaseYearSortEndControl: { value?: number; setFunc: (start?: number) => void };
  releaseYearSortStartControl: { value?: number; setFunc: (start?: number) => void };
  rateSortStartControl: { value?: number; setFunc: (start?: number) => void };
  rateSortEndControl: { value?: number; setFunc: (start?: number) => void };
  voteCountSortStartControl: { value?: number; setFunc: (start?: number) => void };
  voteCountSortEndControl: { value?: number; setFunc: (start?: number) => void };
};

export const ManagementBanner = ({
  onSearchValueChange,
  searchValue,
  hideAdult,
  onHideAdultChange,
  languageOptions,
  languageSortValue,
  setLanguageSortValue,
  genresSortValue,
  setGenresSortValue,
  releaseYearSortEndControl,
  releaseYearSortStartControl,
  rateSortStartControl,
  rateSortEndControl,
  voteCountSortStartControl,
  voteCountSortEndControl,
}: ManagementBannerProps) => {
  const moviesGenres = useGetMoviesGenres();

  return (
    <div className="managementContainer">
      <SearchBar value={searchValue} onChange={onSearchValueChange} />
      <BooleanSort
        activeTitle="Adult hidden"
        inactiveTitle="Hide adult"
        isActive={hideAdult}
        onClick={onHideAdultChange}
      />
      <Dropdown
        title="genres"
        options={moviesGenres.movieGenres?.genres}
        value={genresSortValue ?? null}
        setValue={setGenresSortValue}
      />
      <Dropdown
        title="language"
        options={languageOptions}
        value={languageSortValue}
        setValue={setLanguageSortValue}
      />
      <RangeSort
        endValueTitle="To"
        startValueTitle="From"
        title="Release Year"
        values={{ start: releaseYearSortStartControl.value, end: releaseYearSortEndControl.value }}
        setValues={{
          start: releaseYearSortStartControl.setFunc,
          end: releaseYearSortEndControl.setFunc,
        }}
      />
      <RangeSort
        endValueTitle="To"
        startValueTitle="From"
        title="Rate"
        values={{ start: rateSortStartControl.value, end: rateSortEndControl.value }}
        setValues={{ start: rateSortStartControl.setFunc, end: rateSortEndControl.setFunc }}
      />
      <RangeSort
        endValueTitle="To"
        startValueTitle="From"
        title="Vote Count"
        values={{ start: voteCountSortStartControl.value, end: voteCountSortEndControl.value }}
        setValues={{
          start: voteCountSortStartControl.setFunc,
          end: voteCountSortEndControl.setFunc,
        }}
      />
    </div>
  );
};
