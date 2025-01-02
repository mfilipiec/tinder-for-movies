import { vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Discover from '../components/Discover/Discover';
import movies from '../data/exampleData';

describe('Discover Component', () => {
  test('Should show loading state initially', () => {
    render(<Discover />);
    expect(screen.getByText('Loading movies...')).toBeInTheDocument();
  });

  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.useRealTimers();
  });

  test('Should display movie card after loading', async () => {
    render(<Discover />);

    vi.advanceTimersToNextTimer();
    await vi.runOnlyPendingTimersAsync();

    const firstMovie = movies[0].list[0];
    expect(screen.getByText(firstMovie.title)).toBeInTheDocument();
    expect(screen.getByText(firstMovie.summary)).toBeInTheDocument();
  });

  test('Should handle accepting a movie', async () => {
    render(<Discover />);

    vi.advanceTimersToNextTimer();
    await vi.runOnlyPendingTimersAsync();

    const acceptButton = screen.getByRole('button', { name: /accept/i });
    fireEvent.click(acceptButton);

    vi.advanceTimersToNextTimer();
    await vi.runOnlyPendingTimersAsync();

    const secondMovie = movies[0].list[1];
    expect(screen.getByText(secondMovie.title)).toBeInTheDocument();
  });
});
