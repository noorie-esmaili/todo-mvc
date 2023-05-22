import React from "react";
import Task from "../model/Task.ts";
import TodoItem from "./TodoItem.tsx";

interface TodoListProps {
    todos: Task[];
    onCheckboxChange: (id: number, completed: boolean) => void;
    onRemove: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({
    todos,
    onCheckboxChange,
    onRemove,
}) => {
    const handleCheckboxChange = (id: number, completed: boolean) => {
        onCheckboxChange(id, completed);
    };

    const handleRemove = (id: number) => {
        onRemove(id);
    };

    return (
        <>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    id={todo.id}
                    title={todo.title}
                    completed={todo.completed}
                    onCheckboxChange={handleCheckboxChange}
                    onRemove={handleRemove} 
                />
            ))}
        </>
    );
};

export default TodoList;
