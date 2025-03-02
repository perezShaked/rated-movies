import { useState } from 'react';
import './Dropdown.css';

type DropdownProps = {
  title: string;
  options: { name: string; id?: number }[] | undefined;
  value?: { name: string; id?: number };
  setValue: (value?: { name: string; id: number }) => void;
};

export const Dropdown = ({ title, options, value, setValue }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdownContainer">
      <button className="dropdownTitle" onClick={() => setIsOpen((isOpen) => !isOpen)}>
        {value ? value.name : title} <ArrowIcon isOpen={isOpen} />
      </button>
      {isOpen && (
        <div className="dropdownOptions">
          {options?.map((option, index) => {
            return (
              <button
                className="dropdownOption"
                key={index}
                onClick={() => {
                  value?.name === option.name
                    ? setValue(undefined)
                    : setValue({ name: option.name, id: option.id || 0 });
                  setIsOpen(false);
                }}
              >
                {option.name}
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
