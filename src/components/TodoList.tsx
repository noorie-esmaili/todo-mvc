import React from "react";
import Task from "../model/Task.ts";
import TodoItem from "./TodoItem.tsx";

interface TodoListProps {
    todos: Task[]
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {

    return (
        <>
            {todos && (todos.map((todo, i) => <TodoItem key={i} title={todo.title} />))}
        </>
    );
};

export default TodoList;






