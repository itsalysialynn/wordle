import React from 'react';
import { render } from '@testing-library/react';
import Tile, { TileValidation } from './Tile';

describe('Tile', () => {
  it('renders a blank tile with a boarder when no letter is provided', async () => {
    const { container } = render(<Tile />);
    expect(container.firstChild).toHaveStyleRule('border', '2px solid #d3d6da');
  });

  it('renders a blank tile with a boarder when no letter is provided and validation is CORRECT', async () => {
    const { container } = render(<Tile validation={TileValidation.CORRECT} />);
    expect(container.firstChild).toHaveStyleRule('border', '2px solid #d3d6da');
  });

  it('renders a blank tile with a boarder when no letter is provided and validation is PRESENT', async () => {
    const { container } = render(<Tile validation={TileValidation.PRESENT} />);
    expect(container.firstChild).toHaveStyleRule('border', '2px solid #d3d6da');
  });

  it('renders a blank tile with a boarder when no letter is provided and validation is INCORRECT', async () => {
    const { container } = render(<Tile validation={TileValidation.INCORRECT} />);
    expect(container.firstChild).toHaveStyleRule('border', '2px solid #d3d6da');
  });

  it('renders a green tile with when a letter is provided and validation is CORRECT', async () => {
    const { container } = render(<Tile letter="a" validation={TileValidation.CORRECT} />);
    expect(container.firstChild).toHaveStyleRule('border', '2px solid #6aaa64');
    expect(container.firstChild).toHaveStyleRule('background-color', '#6aaa64');
  });

  it('renders a yellow tile with when a letter is provided and validation is PRESENT', async () => {
    const { container } = render(<Tile letter="a" validation={TileValidation.PRESENT} />);
    expect(container.firstChild).toHaveStyleRule('border', '2px solid #c9b458');
    expect(container.firstChild).toHaveStyleRule('background-color', '#c9b458');
  });

  it('renders a grey tile with when a letter is provided and validation is INCORRECT', async () => {
    const { container } = render(<Tile letter="a" validation={TileValidation.INCORRECT} />);
    expect(container.firstChild).toHaveStyleRule('border', '2px solid #787c7e');
    expect(container.firstChild).toHaveStyleRule('background-color', '#787c7e');
  });
});