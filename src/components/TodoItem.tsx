import React, { useState, useEffect } from "react";

interface TodoItemProps {
  id: number;
  title: string;
  completed: boolean;
  onCheckboxChange: (id: number, completed: boolean) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  id,
  title,
  completed,
  onCheckboxChange,
}) => {
  const [checked, setChecked] = useState(completed);

  useEffect(() => {
    setChecked(completed);
  }, [completed]);

  const handleCheckboxChange = () => {
    const updatedChecked = !checked;
    setChecked(updatedChecked);
    onCheckboxChange(id, updatedChecked);
  };

  return (
    <>
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
