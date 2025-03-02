import './BooleanSort.css';

type BooleanSortProps = {
  activeTitle: string;
  inactiveTitle: string;
  isActive: boolean;
  onClick: () => void;
};

export const BooleanSort = ({
  activeTitle,
  isActive,
  inactiveTitle,
  onClick,
}: BooleanSortProps) => {
  return (
    <button
      className={`booleanSortButton ${isActive ? 'activeBooleanSort' : 'inactiveBooleanSort'}`}
      onClick={onClick}
    >
      {isActive ? activeTitle : inactiveTitle}
    </button>
  );
};
