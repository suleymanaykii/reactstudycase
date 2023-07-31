import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Search from './Search';

test('renders search form with input and button', () => {
    render(<Search />);

    // Check if the input and button are present
    expect(screen.getByPlaceholderText('Enter search word')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
});
