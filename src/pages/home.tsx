import React, { useState } from "react";
import Header from "../components/Header.tsx";
import TodoInput from "../components/TodoInput.tsx";
import TodoList from "../components/TodoList.tsx";
import Task from "../model/Task.ts";

export const Home: React.FC = () => {
    const [todos, setTodos] = useState<Task[]>([]);

    const handleSave = (value: Task) => {
        console.log(value);

        setTodos((prevTodos) => [...prevTodos, value]);
    };

    return (
        <>
            <Header title="Welcome to my ToDo App" />
            <TodoInput onSave={handleSave} />
            <TodoList todos={todos} />
        </>
    );
};
