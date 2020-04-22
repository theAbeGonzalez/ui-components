import React, { useState, useCallback } from 'react';
import _debounce from 'lodash/debounce';
import { func, node } from 'prop-types';
import { Button, Ripple } from './Button.styled';

const getNewRipple = (e) => {
  const rippleContainer = e.currentTarget;
  const size = rippleContainer.offsetWidth;
  const pos = rippleContainer.getBoundingClientRect();
  const x = e.pageX - pos.left - size / 2;
  const y = e.pageY - pos.top - size / 2;
  return { y, x, size };
};

const ButtonComponent = ({ children, onClick }) => {
  const [ripples, setRipples] = useState([]);

  const addRipple = (e) => {
    const newRipple = getNewRipple(e);
    setRipples([...ripples, newRipple]);
  };

  const cleanRipples = useCallback(
    _debounce(() => {
      console.log('cleread');
      setRipples([]);
    }, 2000),
    []
  );
  return (
    <Button onMouseUp={cleanRipples} onMouseDown={addRipple} onClick={onClick}>
      {children}
      {ripples.map((rippleStyleProps, index) => (
        <Ripple key={index} {...rippleStyleProps} />
      ))}
    </Button>
  );
};

ButtonComponent.propTypes = {
  onClick: func,
  children: node,
};

ButtonComponent.defaultProps = {
  onClick: () => {},
};

export default ButtonComponent;
