import './BooleanSort.css';

type BooleanSortProps = {
  activeTitle: string;
  inactiveTitle: string;
  isActive: boolean;
};

export const BooleanSort = ({ activeTitle, isActive, inactiveTitle }: BooleanSortProps) => {
  return (
    <button
      className={`booleanSortButton ${isActive ? 'activeBooleanSort' : 'inactiveBooleanSort'}`}
    >
      {isActive ? activeTitle : inactiveTitle}
    </button>
  );
};
