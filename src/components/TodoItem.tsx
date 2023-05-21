import React, { useState } from "react";

interface TodoItemProps {
    title: string;
}

const TodoItem: React.FC<TodoItemProps> = ({ title }) => {
    const [checked, setChecked] = useState(false);

    const handleCheckboxChange = () => {
        setChecked(!checked);
    };

    return (
        <div>
            <input
                type="checkbox"
                checked={checked}
                onChange={handleCheckboxChange}
            />
            <label style={{ textDecoration: checked ? "line-through" : "none" }}>
                {title}
            </label>
        </div>
    );
};

export default TodoItem;
