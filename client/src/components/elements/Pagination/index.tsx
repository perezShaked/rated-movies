import { useState } from 'react';
import './Pagination.css';

type PaginationProps = {
  pageNumber: number;
  maxPages: number;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
};

export const Pagination = ({ pageNumber, setPageNumber, maxPages }: PaginationProps) => {
  const [pageInputValue, setPageInputValue] = useState(pageNumber);
  const onNextClick = () => {
    const newPageNumber = pageNumber + 1;

    if (newPageNumber <= maxPages) {
      setPageNumber(newPageNumber);
      setPageInputValue(newPageNumber);
    }
  };

  const onPrevClick = () => {
    const newPageNumber = pageNumber - 1;

    if (newPageNumber >= 1) {
      setPageNumber(newPageNumber);
      setPageInputValue(newPageNumber);
    }
  };

  const onPageNumberInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPageNumber = Number(event.target.value);
    if (newPageNumber <= maxPages && newPageNumber >= 1) setPageNumber(newPageNumber);
    else setPageInputValue(pageNumber);
  };

  return (
    <div className="paginationContainer">
      <button className="paginationButton" onClick={onPrevClick}>
        Prev
      </button>
      <input
        className="pageNumberInput"
        value={pageInputValue}
        type="number"
        onChange={(e) => setPageInputValue(Number(e.target.value))}
        onBlur={onPageNumberInputChange}
      ></input>
      <div>of {Number(maxPages) - 1}</div>
      <button className="paginationButton" onClick={onNextClick}>
        Next
      </button>
    </div>
  );
};
