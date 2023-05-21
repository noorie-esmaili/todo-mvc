import React, { useState } from "react";
import Task from "../model/Task";

interface HeaderProps {
  title: string;
  todos: Task[];
  onCheckAll: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, onCheckAll }) => {
  const handleCheckAll = () => {
    console.log("Hi");
    
    onCheckAll();
  };

  return (
    <>
      <button onClick={handleCheckAll}>All as completed</button>
      {title && <h1>{title}</h1>}
    </>
  );
};

export default Header;
