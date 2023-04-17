import { render, screen } from "@testing-library/react";
import React from 'react';
import App from "./App";
import { MemoryRouter } from 'react-router-dom';

test('renders a "Book a Table" button', () => {
    render(
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      );
    const bookButton = screen.getByText('Book a Table');
    expect(bookButton).toBeInTheDocument();
  });
