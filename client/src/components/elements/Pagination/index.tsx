import './Pagination.css';

type PaginationProps = {
  pageNumber: number;
};

export const Pagination = ({ pageNumber }: PaginationProps) => {
  return (
    <div className="paginationContainer">
      <button className="paginationButton">Prev</button>
      <input className="pageNumberInput" value={pageNumber}></input>
      <div>of 500</div>
      <button className="paginationButton">Next</button>
    </div>
  );
};
