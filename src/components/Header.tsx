import React from "react";

interface HeaderProps {
  title: string;
  onCheckAll: (checked: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ title, onCheckAll }) => {
  const handleCheckAllChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    onCheckAll(checked);
  };

  return (
    <header>
      <h1>{title}</h1>
      <label htmlFor="checkAll">
        <input
          id="checkAll"
          type="checkbox"
          onChange={handleCheckAllChange}
        />
        All as completed
      </label>
    </header>
  );
};

export default Header;
