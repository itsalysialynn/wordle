import { fireEvent, act, render, screen } from '@testing-library/react';
import Keyboard from './Keyboard';
import { KeyboardProvider } from '../../hooks/useKeyboard';

describe('Keyboard', () => {
  it('renders the letters that are clicked in order', async () => {
    render(
      <KeyboardProvider>
        <Keyboard word="queen" />
      </KeyboardProvider>,
    );

    act(() => {
      fireEvent.click(screen.getByLabelText(/a key/i));
      fireEvent.click(screen.getByLabelText(/p key/i));
      fireEvent.click(screen.getByLabelText(/p key/i));
      fireEvent.click(screen.getByLabelText(/l key/i));
    });

    await expect(screen.getByText(/appl/i)).toBeDefined();
  });

  it('removes the last letter when the backspace button is clicked', async () => {
    render(
      <KeyboardProvider>
        <Keyboard word="queen" />
      </KeyboardProvider>,
    );

    act(() => {
      fireEvent.click(screen.getByLabelText(/a key/i));
      fireEvent.click(screen.getByLabelText(/p key/i));
      fireEvent.click(screen.getByLabelText(/p key/i));
      fireEvent.click(screen.getByLabelText(/backspace key/i));
    });

    await expect(screen.getByText(/ap/i)).toBeDefined();
  });
});
