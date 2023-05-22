import React from "react";
import { NavLink } from "react-router-dom";
import "../css/footer.scss"

interface FooterProps {
  numOfLeftItems: number;
  onFilterActive: () => void;
  onFilterAll: () => void;
  onFilterCompleted: () => void;
  onClearCompleted: () => void;
  hasCompletedTodos: boolean;
}

const Footer: React.FC<FooterProps> = ({
  numOfLeftItems,
  onFilterActive,
  onFilterAll,
  onFilterCompleted,
  onClearCompleted,
  hasCompletedTodos,
}) => {
  const itemWord = numOfLeftItems === 1 ? "item" : "items";
  const itemText = `${numOfLeftItems} ${itemWord} left`;

  const handleClearCompletedClick = () => {
    onClearCompleted();
  };

  return (
    <footer className="footer">
      <span>{itemText}</span>
      <ul>
        <li>
          <NavLink to="/" onClick={onFilterAll}>
            All
          </NavLink>
        </li>
        <li>
          <NavLink to="/active" onClick={onFilterActive}>
            Active
          </NavLink>
        </li>
        <li>
          <NavLink to="/completed" onClick={onFilterCompleted}>
            Completed
          </NavLink>
        </li>
      </ul>
      {hasCompletedTodos && (
        <button onClick={handleClearCompletedClick}>Clear Completed</button>
      )}
    </footer>
  );

};

export default Footer;
