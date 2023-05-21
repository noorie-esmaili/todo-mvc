import React, { useState, useEffect } from "react";

interface TodoItemProps {
  title: string;
  completed: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ title, completed }) => {
  const [checked, setChecked] = useState(completed);

  useEffect(() => {
    setChecked(completed);
  }, [completed]);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <>
      {console.log(checked)}
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
      />
      <label style={{ textDecoration: checked ? "line-through" : "none" }}>
        {title}
      </label>
    </>
  );
};

export default TodoItem;
