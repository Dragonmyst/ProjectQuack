import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders header', async () => {
  render(<App />);
  const element = screen.getByText('Project Quack');
  expect(element).toBeInTheDocument();
});
