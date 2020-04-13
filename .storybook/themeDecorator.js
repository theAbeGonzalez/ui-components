import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../src/themes/default';

const ThemeDecorator = (storyFn) => <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>;

export default ThemeDecorator;
