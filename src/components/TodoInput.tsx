
// TodoInput.tsx
import React, { useState } from "react";
import { addTodoItem } from "../features/todoController.tsx";
import Task from "../model/Task.ts";

interface TodoInputProps {
    onSave: (value: Task) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ onSave }) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            const newTodo = addTodoItem(inputValue);
            onSave(newTodo);
            setInputValue("");
        }
    };

    return (
        <input
            type="text"
            placeholder="What needs to be done?"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
        />
    );
};

export default TodoInput;






