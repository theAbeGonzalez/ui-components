import React from 'react';
import { renderThemedComponent } from 'v2/utils/tests';
import Loader from './Loader.component';

const loaderProps = {};

test('shows Loader', () => {
  const { getByTestId } = renderThemedComponent(<Loader {...loaderProps} />);

  expect(getByTestId('automation-loader-container')).toBeInTheDocument();
});
