import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import HomePage from './HomePage';
import axios from 'axios';
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('HomePage component', () => {

    it('displays a quote and author', async () => {

        render(<HomePage />);

        const getQuotesButton = screen.getByText('Get Quotes');

        fireEvent.click(getQuotesButton);

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
        mockedAxios.get.mockRejectedValueOnce({
            response: {
                status: 500,
                data: {
                    message: 'Internal Server Error',
                },
            },
            config: {},
        });
    });
});
