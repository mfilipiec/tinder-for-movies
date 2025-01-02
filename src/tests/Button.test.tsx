import { vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../components/Button/Button';

describe('Button Component', () => {
  test('Renders button with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });

  test('Calls onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
