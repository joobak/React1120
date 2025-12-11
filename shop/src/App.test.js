import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
<<<<<<< HEAD
});
=======
});
>>>>>>> f40a1f6919915875ca33c8551b1bedd315ab6d41
