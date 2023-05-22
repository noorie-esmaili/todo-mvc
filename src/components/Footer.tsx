import React from "react";

interface FooterProps {
  numOfLeftItems: number;
}

const Footer: React.FC<FooterProps> = ({ numOfLeftItems }) => {
  return (
    <div>
      <p>{numOfLeftItems} items left</p>
      <button>Active</button>
      <button>Completed</button>
      <button>Clear Completed</button>
    </div>
  );
};

export default Footer;
