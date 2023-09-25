import { render } from '@testing-library/react';
import Key from './Key';
import { LetterValidation } from '../types';

describe('Key', () => {
  it('renders a smaller text when keyText is escape', async () => {
    const { container } = render(<Key keyText="escape" />);
    expect(container.firstChild).toHaveStyleRule('font-size', '1.25em');
  });

  it('renders a grey key when no validation is provided', async () => {
    const { container } = render(<Key keyText="a" />);
    expect(container.firstChild).toHaveStyleRule('background-color', '#d3d6da');
  });

  it('renders a green key with when validation is CORRECT', async () => {
    const { container } = render(<Key keyText="a" validation={LetterValidation.CORRECT} />);
    expect(container.firstChild).toHaveStyleRule('background-color', '#6aaa64');
  });

  it('renders a yellow key with when validation is PRESENT', async () => {
    const { container } = render(<Key keyText="a" validation={LetterValidation.PRESENT} />);
    expect(container.firstChild).toHaveStyleRule('background-color', '#c9b458');
  });

  it('renders a dark grey key with when validation is INCORRECT', async () => {
    const { container } = render(<Key keyText="a" validation={LetterValidation.INCORRECT} />);
    expect(container.firstChild).toHaveStyleRule('background-color', '#787c7e');
  });
});
