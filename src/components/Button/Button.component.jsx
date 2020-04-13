import React from 'react';
import { func, node } from 'prop-types';
import { Button } from './Button.styled';

const ButtonComponent = ({ children, onClick }) => <Button onClick={onClick}>{children}</Button>;

ButtonComponent.propTypes = {
  onClick: func,
  children: node,
};

ButtonComponent.defaultProps = {
  onClick: () => {},
};

export default ButtonComponent;
