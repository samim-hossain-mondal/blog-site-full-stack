/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import Card from '../Card';

describe('Card', () => {
  it('should render', () => {
    const { asFragment } = render(<Card />);
    expect(asFragment()).toMatchSnapshot();
  });
});