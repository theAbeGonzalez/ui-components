import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '@themes/default';

const renderThemed = (component) =>
  render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);

export { renderThemed };
