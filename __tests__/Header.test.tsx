import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../src/components/Header';

test('renders the header correctly', () => {
    render(<Header onCheckAll={() => { }} />);

    const checkboxIcon = screen.getByRole('checkbox');
    expect(checkboxIcon).toBeInTheDocument();
});

test('clicking on the checkbox icon calls the onClick handler', () => {
    const mockOnCheckAll = jest.fn();
    render(<Header onCheckAll={mockOnCheckAll} />);

    const checkboxIcon = screen.getByRole('checkbox');
    fireEvent.click(checkboxIcon);

    expect(mockOnCheckAll).toHaveBeenCalledTimes(1);
});
