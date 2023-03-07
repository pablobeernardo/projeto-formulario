import React from 'react';
import { render, screen } from '@testing-library/react';
import { UserController } from './controller/user-controller';

test('renders learn react link', () => {
  render(<UserController />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
