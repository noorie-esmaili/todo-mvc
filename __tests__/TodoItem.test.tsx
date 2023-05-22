import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoItem from '../src/components/TodoItem';

test('renders the todo item correctly', () => {
    const id = 1;
    const title = 'Todo 1';
    const completed = false;
    const onCheckboxChange = jest.fn();
    const onRemove = jest.fn();

    render(
        <TodoItem
            id={id}
            title={title}
            completed={completed}
            onCheckboxChange={onCheckboxChange}
            onRemove={onRemove}
        />
    );

    const todoItem = screen.getByText(title);

    expect(todoItem).toBeInTheDocument();
    expect(todoItem).toHaveClass('active');
});

test('renders the completed todo item correctly', () => {
    const id = 1;
    const title = 'Todo 1';
    const completed = true;
    const onCheckboxChange = jest.fn();
    const onRemove = jest.fn();

    render(
        <TodoItem
            id={id}
            title={title}
            completed={completed}
            onCheckboxChange={onCheckboxChange}
            onRemove={onRemove}
        />
    );

    const todoItem = screen.getByText(title);

    expect(todoItem).toBeInTheDocument();
    expect(todoItem).toHaveClass('completed');
});

test('clicking on the checkbox calls the onCheckboxChange handler', () => {
    const id = 1;
    const title = 'Todo 1';
    const completed = false;
    const onCheckboxChange = jest.fn();
    const onRemove = jest.fn();

    render(
        <TodoItem
            id={id}
            title={title}
            completed={completed}
            onCheckboxChange={onCheckboxChange}
            onRemove={onRemove}
        />
    );

    const checkbox = screen.getByRole('checkbox');

    fireEvent.click(checkbox);

    expect(onCheckboxChange).toHaveBeenCalledTimes(1);
    expect(onCheckboxChange).toHaveBeenCalledWith(id, true);
});

test('double-clicking on the todo item enables editing mode', () => {
    const id = 1;
    const title = 'Todo 1';
    const completed = false;
    const onCheckboxChange = jest.fn();
    const onRemove = jest.fn();

    render(
        <TodoItem
            id={id}
            title={title}
            completed={completed}
            onCheckboxChange={onCheckboxChange}
            onRemove={onRemove}
        />
    );

    const todoItem = screen.getByText(title);

    fireEvent.doubleClick(todoItem);

    const input = screen.getByDisplayValue(title);

    expect(input).toBeInTheDocument();
    expect(document.activeElement).toBe(input);
});

test('changing the edited title updates the input value', () => {
    const id = 1;
    const title = 'Todo 1';
    const completed = false;
    const onCheckboxChange = jest.fn();
    const onRemove = jest.fn();

    render(
        <TodoItem
            id={id}
            title={title}
            completed={completed}
            onCheckboxChange={onCheckboxChange}
            onRemove={onRemove}
        />
    );

    const todoItem = screen.getByText(title);

    fireEvent.doubleClick(todoItem);

    const input = screen.getByDisplayValue(title) as HTMLInputElement;
    const newTitle = 'Updated Todo 1';

    fireEvent.change(input, { target: { value: newTitle } });

    expect(input.value).toBe(newTitle);
});


test('blurring the input saves the edited title', () => {
    const id = 1;
    const title = 'Todo 1';
    const completed = false;
    const onCheckboxChange = jest.fn();
    const onRemove = jest.fn();

    render(
        <TodoItem
            id={id}
            title={title}
            completed={completed}
            onCheckboxChange={onCheckboxChange}
            onRemove={onRemove}
        />
    );

    const todoItem = screen.getByText(title);

    fireEvent.doubleClick(todoItem);

    const input = screen.getByDisplayValue(title);

    fireEvent.blur(input);

    expect(input).not.toBeInTheDocument();
    expect(onRemove).not.toHaveBeenCalled();
});

test('pressing Enter key saves the edited title', () => {
    const id = 1;
    const title = 'Todo 1';
    const completed = false;
    const onCheckboxChange = jest.fn();
    const onRemove = jest.fn();

    render(
        <TodoItem
            id={id}
            title={title}
            completed={completed}
            onCheckboxChange={onCheckboxChange}
            onRemove={onRemove}
        />
    );

    const todoItem = screen.getByText(title);

    fireEvent.doubleClick(todoItem);

    const input = screen.getByDisplayValue(title);
    const newTitle = 'Updated Todo 1';

    fireEvent.change(input, { target: { value: newTitle } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    expect(input).not.toBeInTheDocument();
    expect(onRemove).not.toHaveBeenCalled();
});

test('pressing Escape key cancels editing mode', () => {
    const id = 1;
    const title = 'Todo 1';
    const completed = false;
    const onCheckboxChange = jest.fn();
    const onRemove = jest.fn();

    render(
        <TodoItem
            id={id}
            title={title}
            completed={completed}
            onCheckboxChange={onCheckboxChange}
            onRemove={onRemove}
        />
    );

    const todoItem = screen.getByText(title);

    fireEvent.doubleClick(todoItem);

    const input = screen.getByDisplayValue(title);
    const newTitle = 'Updated Todo 1';

    fireEvent.change(input, { target: { value: newTitle } });
    fireEvent.keyDown(input, { key: 'Escape', code: 'Escape' });

    expect(input).not.toBeInTheDocument();
    expect(onRemove).not.toHaveBeenCalled();
});

test('mouse enter shows the remove button', () => {
    const id = 1;
    const title = 'Todo 1';
    const completed = false;
    const onCheckboxChange = jest.fn();
    const onRemove = jest.fn();

    render(
        <TodoItem
            id={id}
            title={title}
            completed={completed}
            onCheckboxChange={onCheckboxChange}
            onRemove={onRemove}
        />
    );

    const todoItem = screen.getByText(title);

    fireEvent.mouseEnter(todoItem);

    const removeButton = screen.getByText('X');

    expect(removeButton).toBeInTheDocument();
});

test('mouse leave hides the remove button', () => {
    const id = 1;
    const title = 'Todo 1';
    const completed = false;
    const onCheckboxChange = jest.fn();
    const onRemove = jest.fn();

    render(
        <TodoItem
            id={id}
            title={title}
            completed={completed}
            onCheckboxChange={onCheckboxChange}
            onRemove={onRemove}
        />
    );

    const todoItem = screen.getByText(title);

    fireEvent.mouseEnter(todoItem);

    const removeButton = screen.getByText('X');

    fireEvent.mouseLeave(todoItem);

    expect(removeButton).not.toBeInTheDocument();
});

test('clicking on the remove button calls the onRemove handler', () => {
    const id = 1;
    const title = 'Todo 1';
    const completed = false;
    const onCheckboxChange = jest.fn();
    const onRemove = jest.fn();

    render(
        <TodoItem
            id={id}
            title={title}
            completed={completed}
            onCheckboxChange={onCheckboxChange}
            onRemove={onRemove}
        />
    );

    const todoItem = screen.getByText(title);

    fireEvent.mouseEnter(todoItem);

    const removeButton = screen.getByText('X');

    fireEvent.click(removeButton);

    expect(onRemove).toHaveBeenCalledTimes(1);
    expect(onRemove).toHaveBeenCalledWith(id);
});
