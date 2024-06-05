import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../src/App';

// A helper function to wrap components with necessary context/providers
const renderWithRouter = (ui, { route = '/' } = {}) => {
    window.history.pushState({}, 'Test page', route)
    return render(ui, { wrapper: Router });
};

describe('App Component Tests', () => {
    test('renders App component and checks for navigation links', () => {
        renderWithRouter(<App />);

        // Check for navigation links
        expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
        expect(screen.getByText(/settings/i)).toBeInTheDocument();
        expect(screen.getByText(/myscans/i)).toBeInTheDocument();
    });

    test('navigates to the dashboard page', () => {
        renderWithRouter(<App />, { route: '/' });

        // Check if the Dashboard content is displayed
        expect(screen.getByText(/welcome to your bug hunting dashboard!/i)).toBeInTheDocument();
    });

    test('navigates to the settings page', () => {
        renderWithRouter(<App />, { route: '/settings' });

        // Check if the Settings content is displayed
        expect(screen.getByText(/configure your application settings here/i)).toBeInTheDocument();
    });

    test('navigates to the myscans page', () => {
        renderWithRouter(<App />, { route: '/myscans' });

        // Check if the MyScans content is displayed
        expect(screen.getByText(/view all your scans and results here/i)).toBeInTheDocument();
    });
});
