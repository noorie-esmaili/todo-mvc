import React from "react";

interface HeaderProps {
  title: string;
  onCheckAll: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, onCheckAll }) => {
  const handleCheckAll = () => {
    onCheckAll();
  };

  return (
    <div>
      <button onClick={handleCheckAll}>All as completed</button>
      {title && <h1>{title}</h1>}
    </div>
  );
};

export default Header;
