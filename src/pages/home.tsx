import React, { useState } from "react";
import Header from "../components/Header.tsx";
import TodoInput from "../components/TodoInput.tsx";
import TodoList from "../components/TodoList.tsx";
import Task from "../model/Task.ts";
import Footer from "../components/Footer.tsx";

const Home: React.FC = () => {
  const [todos, setTodos] = useState<Task[]>([]);
  const [filteredTodos, setFilteredTodos] = useState<Task[]>([]);

  const handleSave = (value: Task) => {
    setTodos((prevTodos) => [...prevTodos, value]);
    setFilteredTodos((prevTodos) => [...prevTodos, value]);
  };

  const uncompletedItems = (tasks: Task[]) => {
    return tasks.filter((task) => !task.completed).length;
  };

  const handleCheckAll = (checked: boolean) => {
    const updatedTodos = todos.map((todo) => ({
      ...todo,
      completed: checked,
    }));
    setTodos(updatedTodos);
    setFilteredTodos(updatedTodos);
  };

  const handleCheckboxChange = (id: number, completed: boolean) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: completed,
        };
      }
      return todo;
    });

    setTodos(updatedTodos);
    setFilteredTodos(updatedTodos);
  };

  const handleFilterActive = () => {
    const activeTodos = todos.filter((todo) => !todo.completed);
    setFilteredTodos(activeTodos);
  };

  const handleFilterAll = () => {
    setFilteredTodos(todos);
  };

  const handleFilterCompleted = () => {
    const completedTodos = todos.filter((todo) => todo.completed);
    setFilteredTodos(completedTodos);
  };

  const handleClearCompleted = () => {
    const uncompletedTodos = todos.filter((todo) => !todo.completed);
    setTodos(uncompletedTodos);
    setFilteredTodos(uncompletedTodos);
  };

  const handleRemove = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    setFilteredTodos(updatedTodos);
  };

  return (
    <>
      <Header title="Welcome to my ToDo App" onCheckAll={handleCheckAll} />
      <TodoInput onSave={handleSave} />
      {filteredTodos.length > 0 && (
        <>
          <TodoList
            todos={filteredTodos}
            onCheckboxChange={handleCheckboxChange}
            onRemove={handleRemove}
          />
          <Footer
            numOfLeftItems={uncompletedItems(todos)}
            onFilterActive={handleFilterActive}
            onFilterAll={handleFilterAll}
            onFilterCompleted={handleFilterCompleted}
            onClearCompleted={handleClearCompleted}
          />
        </>
      )}
    </>
  );
};

export default Home;
