import React from "react";
import Header from "../components/Header.tsx";
import TodoInput from "../components/TodoInput.tsx";

export const Home: React.FC = () => {

    const handleSave = (value: string) => {
        console.log("Saving todo:", value);
    };

    return (
        <>
            <Header title="Welcome to my ToDo App" />
            <TodoInput onSave={handleSave} />
        </>
    );
};
