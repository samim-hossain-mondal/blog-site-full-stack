/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable no-undef */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Like from '../Like';

const mockCard = {
  id: 1,
  title: 'title',
  description: 'description',
  image: 'image',
  date: 'date',
  readingTime: 'readingTime',
  claps: 0,
  liked: false,
};

describe('Like', () => {
  it('should render', () => {
    const { asFragment } = render(<Like id={mockCard.id} liked={mockCard.liked} />);
    expect(asFragment()).toMatchSnapshot();
  });
  describe('when the user clicks on the like button', () => {
    it('should change the color of the like button to red', () => {
      const { queryByTestId } = render(<Like id={mockCard.id} liked={mockCard.liked} />);
      const likeBtn = queryByTestId('like-btn');
      fireEvent.click(likeBtn);
      expect(likeBtn).toHaveAttribute('src', 'heart-red.svg');
    });
    it('should change the color of the like button to black', () => {
      const { queryByTestId } = render(<Like id={mockCard.id} liked={mockCard.liked} />);
      const likeBtn = queryByTestId('like-btn');
      fireEvent.click(likeBtn);
      expect(likeBtn).toHaveAttribute('src', 'heart-red.svg');
      fireEvent.click(likeBtn);
      expect(likeBtn).toHaveAttribute('src', 'heart-black.svg');
    });
  });
});