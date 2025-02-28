import './RangeSort.css';

type RangeSortProps = {
  title: string;
  startValueTitle: string;
  endValueTitle: string;
};

export const RangeSort = ({ endValueTitle, startValueTitle, title }: RangeSortProps) => {
  return (
    <div className="sortRangeContainer">
      <div className="sortRangeTitle"> {title}:</div>
      <div className="sortRangeInputs">
        <div className="start">
          {startValueTitle}: <input className="sortRangeInput"></input>
        </div>
        <div className="end">
          {endValueTitle}: <input className="sortRangeInput"></input>
        </div>
      </div>
    </div>
  );
};
