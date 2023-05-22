import React, { useState, useEffect } from "react";
import '../styles.scss'

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
      <label className={ completed ? "completed" : "active" }>
        {title}
      </label>
    </>
  );
};

export default TodoItem;
