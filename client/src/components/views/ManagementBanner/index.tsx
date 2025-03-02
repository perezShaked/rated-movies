import { useGetMoviesGenres } from '../../../hooks';
import { SearchBar } from './SearchBar';
import { RangeSort } from './RangeSort';
import { Dropdown } from './Dropdown';
import { BooleanSort } from './BooleanSort';
import './ManagementBanner.css';

type ManagementBannerProps = {
  languageOptions: { name: string }[] | undefined;
  searchValueControl: { value: string; setFunc: (value: string) => void };
  hideAdultControl: { value: boolean; setFunc: () => void };
  languageSortValueControl: {
    value?: { name: string };
    setFunc: (value?: { name: string }) => void;
  };
  genresSortValueControl: {
    value?: { name: string; id?: number };
    setFunc: (value?: { name: string; id: number }) => void;
  };
  releaseYearSortEndControl: { value?: number; setFunc: (start?: number) => void };
  releaseYearSortStartControl: { value?: number; setFunc: (start?: number) => void };
  rateSortStartControl: { value?: number; setFunc: (start?: number) => void };
  rateSortEndControl: { value?: number; setFunc: (start?: number) => void };
  voteCountSortStartControl: { value?: number; setFunc: (start?: number) => void };
  voteCountSortEndControl: { value?: number; setFunc: (start?: number) => void };
};

export const ManagementBanner = ({
  languageOptions,
  searchValueControl,
  hideAdultControl,
  languageSortValueControl,
  genresSortValueControl,
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
      <SearchBar value={searchValueControl.value} onChange={searchValueControl.setFunc} />
      <BooleanSort
        activeTitle="Adult hidden"
        inactiveTitle="Hide adult"
        isActive={hideAdultControl.value}
        onClick={hideAdultControl.setFunc}
      />
      <Dropdown
        title="genres"
        options={moviesGenres.movieGenres?.genres}
        value={genresSortValueControl.value ?? undefined}
        setValue={genresSortValueControl.setFunc}
      />
      <Dropdown
        title="language"
        options={languageOptions}
        value={languageSortValueControl.value}
        setValue={languageSortValueControl.setFunc}
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
