import React from 'react';
import '@testing-library/jest-dom';
import { renderThemed } from '@utils/test';
import Button from './Button.component';

const buttonProps = { children: "I'm a Button" };

test('shows Button with correct content', () => {
  const { getByText } = renderThemed(<Button {...buttonProps} />);

  expect(getByText(buttonProps.children)).toBeInTheDocument();
});
