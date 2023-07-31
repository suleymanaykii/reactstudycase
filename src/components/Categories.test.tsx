import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Categories from './Categories';
import axios from 'axios';
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Categories component', () => {

    it('displays a quote and author when a category button is clicked', async () => {

        render(<Categories />);

        const loveButton = screen.getByText('LOVE');
        fireEvent.click(loveButton);

        const lifeButton = screen.getByText('LIFE');
        fireEvent.click(lifeButton);

        const fateButton = screen.getByText('FATE');
        fireEvent.click(fateButton);

        const inspirationButton = screen.getByText('INSPIRATION');
        fireEvent.click(inspirationButton);

        const believeButton = screen.getByText('BELIEVE');
        fireEvent.click(believeButton);

        const peaceButton = screen.getByText('PEACE');
        fireEvent.click(peaceButton);

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
