import React, { useEffect, useState } from "react";
import Header from "../components/Header.tsx";
import TodoInput from "../components/TodoInput.tsx";
import TodoList from "../components/TodoList.tsx";
import Task from "../model/Task.ts";
import Footer from "../components/Footer.tsx";

const STORAGE_KEY = "todos-react";

const Home: React.FC = () => {
  const [todos, setTodos] = useState<Task[]>([]);
  const [filteredTodos, setFilteredTodos] = useState<Task[]>([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem(STORAGE_KEY);
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

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

  const hasCompletedTodos = todos.some((todo) => todo.completed);
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
            hasCompletedTodos={hasCompletedTodos}
          />
        </>
      )}
    </>
  );
};

export default Home;
