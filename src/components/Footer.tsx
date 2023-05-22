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
  const itemWord = numOfLeftItems === 1 ? "item" : "items";
  const itemText = `${numOfLeftItems} ${itemWord} left`;

  return (
    <footer>
      <span>{itemText}</span>
      <ul>
        <li>
          <button onClick={onFilterAll}>All</button>
        </li>
        <li>
          <button onClick={onFilterActive}>Active</button>
        </li>
        <li>
          <button onClick={onFilterCompleted}>Completed</button>
        </li>
      </ul>
      <button onClick={onClearCompleted}>Clear Completed</button>
    </footer>
  );
};

export default Footer;
