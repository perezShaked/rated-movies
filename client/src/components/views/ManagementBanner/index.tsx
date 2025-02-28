import { SearchBar } from './SearchBar';
import { RangeSort } from './RangeSort';
import { Dropdown } from './Dropdown';
import { BooleanSort } from './BooleanSort';
import './ManagementBanner.css';

export const ManagementBanner = () => {
  const exampleOptions = ['Drama', 'Action', 'Roman'];

  return (
    <div className="managementContainer">
      <SearchBar value="" />
      <BooleanSort activeTitle="Hide adult" inactiveTitle="adult hidden" isActive={true} />
      <Dropdown title="genres" options={exampleOptions} isOpen={false} />
      <Dropdown title="language" options={exampleOptions} isOpen={false} />
      <RangeSort endValueTitle="To" startValueTitle="From" title="Release Year" />
      <RangeSort endValueTitle="To" startValueTitle="From" title="Rate" />
      <RangeSort endValueTitle="To" startValueTitle="From" title="Vote Count" />
      <button className="sortButton">Sort</button>
    </div>
  );
};
