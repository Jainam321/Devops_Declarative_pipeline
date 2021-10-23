import { render, screen } from '@testing-library/react';
import App from './App';


test('Test login', () => {
  render(<App />);
  const linkElement = screen.getByText(/Login Form/i);
  expect(linkElement).toBeInTheDocument();
});


test('Remember me', () => {
  render(<App />);
  const linkElement= screen.getByText(/Remember ME/i)
  expect(linkElement).toBeInTheDocument();
});
