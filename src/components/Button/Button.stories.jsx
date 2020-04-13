import React from 'react';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';
import Button from './Button.component';

const StoryContainer = styled.div`
  width: 220px;
  button {
    margin: 5px;
  }
`;

const storyConfig = {
  title: 'Button',
  component: Button,
  decorators: [(storyFn) => <StoryContainer>{storyFn()}</StoryContainer>],
};

const buttonProps = {
  onClick: action('button was clicked'),
};

const primary = () => <Button {...buttonProps}>Default</Button>;

export { primary };
export default storyConfig;
