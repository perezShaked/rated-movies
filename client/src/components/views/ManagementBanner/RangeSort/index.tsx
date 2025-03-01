import { useState } from 'react';
import './RangeSort.css';

type RangeSortProps = {
  title: string;
  startValueTitle: string;
  endValueTitle: string;
  values: { start?: number; end?: number } | undefined;
  setValues: {
    start: (start?: number) => void;
    end: (end?: number) => void;
  };
};

export const RangeSort = ({
  endValueTitle,
  startValueTitle,
  title,
  values,
  setValues,
}: RangeSortProps) => {
  const [startValue, setStartValue] = useState(values?.start);
  const [endValue, setEndValue] = useState(values?.end);

  const OnValueUpdate = (
    event: React.ChangeEvent<HTMLInputElement> | React.FocusEvent<HTMLInputElement, Element>,
    updateFunction: (value: number | undefined) => void
  ) => {
    const newValue = event.target.value;
    updateFunction(newValue === '' ? undefined : Number(newValue));
  };

  return (
    <div className="sortRangeContainer">
      <div className="sortRangeTitle"> {title}:</div>
      <div className="sortRangeInputs">
        <div className="start">
          {startValueTitle}:
          <input
            type="number"
            className="sortRangeInput"
            value={startValue}
            onChange={(event) => {
              OnValueUpdate(event, setStartValue);
            }}
            onBlur={(event) => {
              OnValueUpdate(event, setValues.start);
            }}
          ></input>
        </div>
        <div className="end">
          {endValueTitle}:
          <input
            type="number"
            className="sortRangeInput"
            value={endValue}
            onChange={(event) => {
              OnValueUpdate(event, setEndValue);
            }}
            onBlur={(event) => {
              OnValueUpdate(event, setValues.end);
            }}
          ></input>
        </div>
      </div>
    </div>
  );
};
