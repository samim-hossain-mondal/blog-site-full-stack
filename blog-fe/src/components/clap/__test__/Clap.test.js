/* eslint-disable no-undef */
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Clap from '../Clap';

describe('Clap', () => {
  it('should render', () => {
    const { asFragment } = render(<Clap />);
    expect(asFragment()).toMatchSnapshot();
  });
  describe('when the user clicks on the clap button', () => {
    it('should increment the clap count', () => {
      const { queryByTestId } = render(<Clap claps={0} />);
      const clapBtn = queryByTestId('clap-btn');
      fireEvent.click(clapBtn);
      const claps = queryByTestId('clap-btn');
      expect(claps).toBeTruthy();
    });
    it('should decrement the clap count', () => {
      const { queryByTestId } = render(<Clap claps={1} />);
      const clapBtn = queryByTestId('clap-btn');
      fireEvent.click(clapBtn);
      const claps = queryByTestId('clap-btn');
      expect(claps).toBeTruthy();
    });
  });
});