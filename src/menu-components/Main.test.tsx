// Main.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter for testing routing

import Main from './Main';

// Mock components for testing routing
jest.mock('../components/HomePage', () => () => <div>Mocked HomePage</div>);
jest.mock('../components/Categories', () => () => <div>Mocked Categories</div>);
jest.mock('../components/Search', () => () => <div>Mocked Search</div>);

describe('Main Component', () => {
    test('renders HomePage when the path is /', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <Main />
            </MemoryRouter>
        );

        expect(screen.getByText('Mocked HomePage')).toBeInTheDocument();
    });

    test('renders Categories when the path is /categories', () => {
        render(
            <MemoryRouter initialEntries={['/categories']}>
                <Main />
            </MemoryRouter>
        );

        expect(screen.getByText('Mocked Categories')).toBeInTheDocument();
    });

    test('renders Search when the path is /search', () => {
        render(
            <MemoryRouter initialEntries={['/search']}>
                <Main />
            </MemoryRouter>
        );

        expect(screen.getByText('Mocked Search')).toBeInTheDocument();
    });
});
