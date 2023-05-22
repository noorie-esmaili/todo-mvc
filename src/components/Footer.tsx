import React from "react";

interface FooterProps {
  numOfLeftItems: number;
  onFilterActive: () => void;
  onFilterAll: () => void;
  onFilterCompleted: () => void;
  onClearCompleted: () => void;
}

const Footer: React.FC<FooterProps> = ({
  numOfLeftItems,
  onFilterActive,
  onFilterAll,
  onFilterCompleted,
  onClearCompleted,
}) => {
  return (
    <>
      <p>{numOfLeftItems} items left</p>
      <button onClick={onFilterAll}>All</button>
      <button onClick={onFilterActive}>Active</button>
      <button onClick={onFilterCompleted}>Completed</button>
      <button onClick={onClearCompleted}>Clear Completed</button>
    </>
  );
};

export default Footer;
