import React from "react";

interface FooterProps {
  numOfLeftItems: number;
  onFilterActive: () => void;
}

const Footer: React.FC<FooterProps> = ({ numOfLeftItems, onFilterActive }) => {
  return (
    <>
      <p>{numOfLeftItems} items left</p>
      <button>All</button>
      <button onClick={onFilterActive}>Active</button>
      <button>Completed</button>
      <button>Clear Completed</button>
    </>
  );
};

export default Footer;
