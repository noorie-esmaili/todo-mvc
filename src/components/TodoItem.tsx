
// TodoInput.tsx
import React from "react";

interface TodoItemProps {
    title: string
}

const TodoItem: React.FC<TodoItemProps> = ({ title }) => {
    return (
        <h5>{title}</h5>
    );
};

export default TodoItem;






