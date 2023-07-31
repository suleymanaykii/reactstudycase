import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';

import Navigation from './Navigation';

describe('Navigation', () => {
    test('renders home, categories, and search links', () => {
        render(
            <Router>
                <Navigation />
            </Router>
        );

        expect(screen.getByRole('link', { name: /home/i })).toBeVisible();
        expect(screen.getByRole('link', { name: /categories/i })).toBeVisible();
        expect(screen.getByRole('link', { name: /search/i })).toBeVisible();
    });

    test('toggles the menu when clicked', () => {
        render(
            <Router>
                <Navigation />
            </Router>
        );


        // Click the toggle button
        const toggleButton = screen.getByRole('button', { name: /toggle navigation/i });
        fireEvent.click(toggleButton);

        // After clicking the toggle button, the menu should be visible
        expect(screen.getByText('Home')).toBeVisible();
        expect(screen.getByText('Categories')).toBeVisible();
        expect(screen.getByText('Search')).toBeVisible();
    });
});
