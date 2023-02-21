/* eslint-disable no-undef */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Like from '../Like';

describe('Like', () => {
  it('should render', () => {
    const { asFragment } = render(<Like />);
    expect(asFragment()).toMatchSnapshot();
  });
  describe('when the user clicks on the like button', () => {
    it('should change the color of the like button', () => {
      const { queryByTestId } = render(<Like />);
      const likeBtn = queryByTestId('like-btn');
      fireEvent.click(likeBtn);
      expect(likeBtn).toHaveAttribute('src', 'heart-red.svg');
    });
  });
});