
// TodoInput.tsx
import React from "react";
import Task from "../model/Task.ts";

interface TodoItemProps {
    title: string
}

const TodoItem: React.FC<TodoItemProps> = ({ title }) => {
    return (
        <h5>{title}</h5>
    );
};

export default TodoItem;






