import React from 'react';
import { render } from '@testing-library/react';
import {HelloName} from './HelloName';
import HelloNameDecorated from './HelloName';

test('Says Hello James', () => {
  const { getByText } = render(<HelloNameDecorated />);
  const element = getByText(/Hello James/i);
  expect(element).toBeInTheDocument();
});
test('Says Hello Mike', () => {
  const { getByText } = render(<HelloName name='Mike' />);
  const element = getByText(/Hello Mike/i);
  expect(element).toBeInTheDocument();
});
test('Says Hello Danstan', () => {
  const { getByText } = render(<HelloName name='Danstan' />);
  const element = getByText(/Hello Danstan/i);
  expect(element).toBeInTheDocument();
});
test('Says Hello Mary', () => {
  const { getByText } = render(<HelloName name='Mary' />);
  const element = getByText(/Hello Mary/i);
  expect(element).toBeInTheDocument();
});
