import { render, screen } from '@testing-library/react';
import Home from '../src/app/page'; 

describe('Home Page', () => {
  it('renders a welcome heading', () => {
    render(<Home />);
    const heading = screen.getByText(/Hello, next!/i);
    expect(heading).toBeInTheDocument();
  });
});