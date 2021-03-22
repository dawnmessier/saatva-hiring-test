import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('increases item count when clicking add-to-cart button', () => {
  const { getByTestId } = render(<App />);
  const cartCount = getByTestId('cartCount');
  const submit = getByTestId('addToCart')

  fireEvent.click(submit);

  //neither of these works
  //async/await does not work here either

  // expect(cartCount).toHaveValue('1');
  expect(cartCount).toHaveValue(1);
});
