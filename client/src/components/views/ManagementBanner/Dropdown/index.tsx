import './Dropdown.css';

type DropdownProps = {
  title: string;
  isOpen: boolean;
  options: string[];
};

export const Dropdown = ({ title, isOpen, options }: DropdownProps) => {
  return (
    <div className="dropdownContainer">
      <button className="dropdownTitle">
        {title} <ArrowIcon isOpen={isOpen} />
      </button>
      {isOpen && (
        <div className="dropdownOptions">
          {options.map((option, index) => {
            return (
              <button className="dropdownOption" key={index}>
                {option}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

const ArrowIcon = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <svg
      className={`${isOpen ? 'arrowUp' : 'arrowDown'} arrowIcon`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11.1519 16.0396L12.0003 16.888L18.7887 10.0996L17.0919 8.40283L12.0003 13.4932L6.90871 8.40283L5.21191 10.0996L11.1519 16.0396Z" />
    </svg>
  );
};
