import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../Button';

describe('Button Component', () => {
  it('renders children correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('applies primary variant styles by default', () => {
    render(<Button>Primary Button</Button>);
    const button = screen.getByText('Primary Button');
    expect(button).toHaveClass('bg-blue-500');
  });

  it('applies secondary variant styles when specified', () => {
    render(<Button variant="secondary">Secondary Button</Button>);
    const button = screen.getByText('Secondary Button');
    expect(button).toHaveClass('bg-gray-200');
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('disables the button when disabled prop is true', () => {
    render(<Button disabled>Disabled Button</Button>);
    const button = screen.getByText('Disabled Button');

    expect(button).toBeDisabled();
    expect(button).toHaveClass('opacity-50');
    expect(button).toHaveClass('cursor-not-allowed');
  });
});
