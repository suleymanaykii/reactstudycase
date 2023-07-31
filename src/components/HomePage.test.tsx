import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import HomePage from './HomePage';

describe('HomePage component', () => {

    it('displays a quote and author', async () => {

        render(<HomePage />);

        const getQuotesButton = screen.getByText('Get Quotes');

        fireEvent.click(getQuotesButton);

    });
});
