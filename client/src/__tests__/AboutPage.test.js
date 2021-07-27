import { render, screen } from '@testing-library/react';
import AboutPage from '../pages/AboutPage';

test('renders title', async () => {
  render(<AboutPage />);
  const element = screen.getByText('About Project Quack');
  expect(element).toBeInTheDocument();
});
