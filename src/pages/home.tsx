import React, { useState } from "react";
import Header from "../components/Header.tsx";
import TodoInput from "../components/TodoInput.tsx";
import TodoList from "../components/TodoList.tsx";
import Task from "../model/Task.ts";
import Footer from "../components/Footer.tsx";

export const Home: React.FC = () => {
    const [todos, setTodos] = useState<Task[]>([]);

    const handleSave = (value: Task) => {
        setTodos((prevTodos) => [...prevTodos, value]);
    };

    const uncompletedItems = (tasks: Task[]) => {
        tasks.filter(task => task.completed === false)
        return tasks.length
    };

    const handleCheckAll = () => {
        const updatedTodos = todos.map((todo) => ({
            ...todo,
            completed: true,
        }));        
        setTodos(updatedTodos);
    };

    return (
        <>
            <Header title="Welcome to my ToDo App" todos={todos} onCheckAll={handleCheckAll} />
            <TodoInput onSave={handleSave} />
            {todos && <TodoList todos={todos} />}
            {todos && <Footer numOfleftItems={uncompletedItems(todos)} />}
        </>
    );
};
