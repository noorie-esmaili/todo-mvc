import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

interface HeaderProps {
  onCheckAll: (checked: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ onCheckAll }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    const checked = !isClicked;
    setIsClicked(checked);
    onCheckAll(checked);
  };


  return (
    <header className="header">
      <span className={`checkbox-icon ${isClicked ? "clicked" : ""}`} onClick={handleClick}>
        <BiChevronDown size={50} />
      </span>
    </header>
  );
};

export default Header;
