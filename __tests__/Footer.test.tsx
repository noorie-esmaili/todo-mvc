import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../src/components/Footer';
jest.mock('../css/footer.scss', () => ({}));

test('renders the footer correctly', () => {
    const numOfLeftItems = 3;
    const onFilterActive = jest.fn();
    const onFilterAll = jest.fn();
    const onFilterCompleted = jest.fn();
    const onClearCompleted = jest.fn();
    const hasCompletedTodos = true;

    render(
        <BrowserRouter>
            <Footer
                numOfLeftItems={numOfLeftItems}
                onFilterActive={onFilterActive}
                onFilterAll={onFilterAll}
                onFilterCompleted={onFilterCompleted}
                onClearCompleted={onClearCompleted}
                hasCompletedTodos={hasCompletedTodos}
            />
        </BrowserRouter>
    );

    const itemText = screen.getByText(`${numOfLeftItems} items left`);
    const allNavLink = screen.getByRole('link', { name: 'All' });
    const activeNavLink = screen.getByRole('link', { name: 'Active' });
    const completedNavLink = screen.getByRole('link', { name: 'Completed' });
    const clearCompletedButton = screen.getByRole('button', { name: 'Clear Completed' });

    expect(itemText).toBeInTheDocument();
    expect(allNavLink).toBeInTheDocument();
    expect(activeNavLink).toBeInTheDocument();
    expect(completedNavLink).toBeInTheDocument();
    expect(clearCompletedButton).toBeInTheDocument();
});

test('clicking on the clear completed button calls the onClick handler', () => {
    const onClearCompleted = jest.fn();
    const hasCompletedTodos = true;

    render(
        <BrowserRouter>
            <Footer
                numOfLeftItems={0}
                onFilterActive={() => { }}
                onFilterAll={() => { }}
                onFilterCompleted={() => { }}
                onClearCompleted={onClearCompleted}
                hasCompletedTodos={hasCompletedTodos}
            />
        </BrowserRouter>
    );

    const clearCompletedButton = screen.getByRole('button', { name: 'Clear Completed' });
    fireEvent.click(clearCompletedButton);

    expect(onClearCompleted).toHaveBeenCalledTimes(1);
});