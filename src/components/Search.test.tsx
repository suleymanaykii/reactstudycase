import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

import Search from './Search';

test('renders search form with input and button', () => {
    render(<Search />);

    // Check if the input and button are present
    expect(screen.getByPlaceholderText('Enter search word')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();

    mockedAxios.get.mockResolvedValueOnce({
        data: [
            {
                author: 'Abraham Lincoln',
                name: 'A house divided against itself cannot stand'
            },
            {
                author: 'Difficulties increase the nearer we get to the goal.',
                name: 'Johann Wolfgang von Goethe'
            }
        ],
        status: 200,
        statusText: 'Ok',
        headers: {},
        config: {},
    });
});
