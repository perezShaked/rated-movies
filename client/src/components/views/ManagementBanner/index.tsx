import { SearchBar } from './SearchBar';
import { RangeSort } from './RangeSort';
import { Dropdown } from './Dropdown';
import { BooleanSort } from './BooleanSort';
import './ManagementBanner.css';
import { useGetMoviesGenres } from '../../../hooks';

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
      <RangeSort endValueTitle="To" startValueTitle="From" title="Release Year" />
      <RangeSort endValueTitle="To" startValueTitle="From" title="Rate" />
      <RangeSort endValueTitle="To" startValueTitle="From" title="Vote Count" />
      <button className="sortButton">Sort</button>
    </div>
  );
};
