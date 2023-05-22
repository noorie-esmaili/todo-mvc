import React from "react";

interface FooterProps {
  numOfLeftItems: number;
  onFilterActive: () => void;
  onFilterAll: () => void;
  onFilterCompleted: () => void;
}

const Footer: React.FC<FooterProps> = ({
  numOfLeftItems,
  onFilterActive,
  onFilterAll,
  onFilterCompleted,
}) => {
  return (
    <>
      <p>{numOfLeftItems} items left</p>
      <button onClick={onFilterAll}>All</button>
      <button onClick={onFilterActive}>Active</button>
      <button onClick={onFilterCompleted}>Completed</button>
      <button>Clear Completed</button>
    </>
  );
};

export default Footer;
