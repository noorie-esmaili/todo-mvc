import React, { useState, useEffect, useRef } from "react";
import "../css/todoitem.scss";

interface TodoItemProps {
  id: number;
  title: string;
  completed: boolean;
  onCheckboxChange: (id: number, completed: boolean) => void;
  onRemove: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  id,
  title,
  completed,
  onCheckboxChange,
  onRemove,
}) => {
  const [checked, setChecked] = useState(completed);
  const [editing, setEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [showRemoveButton, setShowRemoveButton] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setChecked(completed);
    setEditedTitle(title);
  }, [completed, title]);

  const handleCheckboxChange = () => {
    const updatedChecked = !checked;
    setChecked(updatedChecked);
    onCheckboxChange(id, updatedChecked);
  };

  const handleDoubleClick = () => {
    setEditing(true);
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTitle(event.target.value);
  };

  const handleTitleBlur = () => {
    setEditing(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setEditing(false);
    } else if (event.key === "Escape") {
      setEditing(false);
      setEditedTitle(title);
    }
  };

  const handleMouseEnter = () => {
    setShowRemoveButton(true);
  };

  const handleMouseLeave = () => {
    setShowRemoveButton(false);
  };

  const handleRemoveClick = () => {
    onRemove(id);
  };

  return (
    <>
      {editedTitle && <input
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
      />
      }
      {editing ? (
        <input
          type="text"
          value={editedTitle}
          onChange={handleTitleChange}
          onBlur={handleTitleBlur}
          onKeyDown={handleKeyDown}
          autoFocus
          ref={inputRef}
        />
      ) : (
        <div
          className={completed ? "completed" : "active"}
          onDoubleClick={handleDoubleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <label>{editedTitle}</label>
          {showRemoveButton && (
            <button className="destroy" onClick={handleRemoveClick}>
              Remove
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default TodoItem;
