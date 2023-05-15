import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app details form', () => {
  render(<App />);
  const textElement = screen.getByText(/Select Application Type/i);
  expect(textElement).toBeInTheDocument();
});
