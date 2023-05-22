import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import TodoList from "../src/components/TodoList";
import Task from "../src/model/Task";

test("renders TodoList component with todo items", () => {
    const todos = [
        new Task(1, "Todo 1", false),
        new Task(2, "Todo 2", true),
    ];
    const onCheckboxChange = jest.fn();
    const onRemove = jest.fn();

    render(
        <TodoList
            todos={todos}
            onCheckboxChange={onCheckboxChange}
            onRemove={onRemove}
        />
    );

    const todoItems = screen.getAllByTestId("todo-item");
    expect(todoItems.length).toBe(todos.length);
});

test("calls onCheckboxChange when checkbox is toggled", () => {
    const todos = [
        new Task(1, "Todo 1", false),
        new Task(2, "Todo 2", true)
    ];
    const onCheckboxChange = jest.fn();
    const onRemove = jest.fn();

    render(
        <TodoList
            todos={todos}
            onCheckboxChange={onCheckboxChange}
            onRemove={onRemove}
        />
    );

    const checkbox = screen.getByTestId("todo-checkbox") as HTMLInputElement;
    expect(checkbox.checked).toBe(false);

    fireEvent.click(checkbox);

    expect(onCheckboxChange).toHaveBeenCalledTimes(1);
    expect(onCheckboxChange).toHaveBeenCalledWith(1, true);
});


test("calls onRemove when remove button is clicked", () => {
    const todos = [new Task(1, "Todo 1", false),
    new Task(2, "Todo 2", true)];
    const onCheckboxChange = jest.fn();
    const onRemove = jest.fn();

    render(
        <TodoList
            todos={todos}
            onCheckboxChange={onCheckboxChange}
            onRemove={onRemove}
        />
    );

    const removeButton = screen.getByTestId("todo-remove");
    removeButton.click();
    expect(onRemove).toHaveBeenCalledTimes(1);
    expect(onRemove).toHaveBeenCalledWith(1);
});