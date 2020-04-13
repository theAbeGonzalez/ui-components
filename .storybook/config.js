import { addParameters, addDecorator } from '@storybook/react';
import themeDecorator from './themeDecorator';

addParameters({
  backgrounds: [
    { name: 'Black', value: '#111111' },
    { name: 'Grey1', value: '#8D8D8D' },
    { name: 'Grey2', value: '#CCCCCC' },
    { name: 'Grey3', value: '#E5E5E5' },
    { name: 'Grey4', value: '#F5F5F5' },
    { name: 'Grey5', value: '#FAFAFA' },
  ],
});

addDecorator(themeDecorator);
