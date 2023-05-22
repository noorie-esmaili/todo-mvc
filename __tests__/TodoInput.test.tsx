import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoInput from '../src/components/TodoInput';

test('renders the todo input correctly', () => {
    const onSave = jest.fn();

    render(<TodoInput onSave={onSave} />);

    const todoInput = screen.getByPlaceholderText('What needs to be done?') as HTMLInputElement;

    expect(todoInput).toBeInTheDocument();
    expect(todoInput.value).toBe('');
});

test('typing in the input updates the input value', () => {
    const onSave = jest.fn();

    render(<TodoInput onSave={onSave} />);

    const todoInput = screen.getByPlaceholderText('What needs to be done?') as HTMLInputElement;
    const inputValue = 'New task';

    fireEvent.change(todoInput, { target: { value: inputValue } });

    expect(todoInput.value).toBe(inputValue);
});

test('pressing Enter key with a non-empty input calls the onSave handler', () => {
    const onSave = jest.fn();

    render(<TodoInput onSave={onSave} />);

    const todoInput = screen.getByPlaceholderText('What needs to be done?') as HTMLInputElement;
    const inputValue = 'New task';

    fireEvent.change(todoInput, { target: { value: inputValue } });
    fireEvent.keyDown(todoInput, { key: 'Enter', code: 'Enter' });

    expect(onSave).toHaveBeenCalledTimes(1);
    expect(onSave).toHaveBeenCalledWith(expect.objectContaining({ title: inputValue }));
    expect(todoInput.value).toBe('');
});


test('pressing Enter key with an empty input does not call the onSave handler', () => {
    const onSave = jest.fn();

    render(<TodoInput onSave={onSave} />);

    const todoInput = screen.getByPlaceholderText('What needs to be done?');

    fireEvent.keyDown(todoInput, { key: 'Enter', code: 'Enter' });

    expect(onSave).not.toHaveBeenCalled();
});
