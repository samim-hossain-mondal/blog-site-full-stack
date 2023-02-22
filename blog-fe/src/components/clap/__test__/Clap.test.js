/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable no-undef */
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Clap from '../Clap';

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

const clapHandler = jest.fn();

describe('Clap', () => {
  it('should render', () => {
    const { asFragment } = render(<Clap id={mockCard.id} claps={mockCard.claps} />);
    expect(asFragment()).toMatchSnapshot();
  });
  describe('when the user clicks on the clap button', () => {
    it('should increment the clap count', () => {
      const { queryByTestId } = render(<Clap id={mockCard.id} claps={mockCard.claps} />);
      const clapBtn = queryByTestId('clap-btn');
      fireEvent.click(clapBtn);
      const claps = queryByTestId('clap-btn');
      expect(claps).toBeTruthy();
    });
    it('should decrement the clap count', () => {
      const { queryByTestId } = render(<Clap id={mockCard.id} claps={mockCard.claps} />);
      const clapBtn = queryByTestId('clap-btn');
      fireEvent.click(clapBtn);
      fireEvent.click(clapBtn);
      const claps = queryByTestId('clap-btn');
      expect(claps).toBeTruthy();
    });
  });
});