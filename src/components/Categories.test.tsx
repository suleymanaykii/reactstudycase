import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Categories from './Categories';

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
    });
});
