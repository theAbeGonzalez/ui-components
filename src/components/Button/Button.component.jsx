import React, { useState, useCallback } from 'react';
import _debounce from 'lodash/debounce';
import { bool, func, node } from 'prop-types';
import { Button, Ripple } from './Button.styled';
import Loader from '@components/Loader';

const getNewRipple = (e) => {
  const rippleContainer = e.currentTarget;
  const size = rippleContainer.offsetWidth;
  const pos = rippleContainer.getBoundingClientRect();
  const x = e.pageX - pos.left - size / 2;
  const y = e.pageY - pos.top - size / 2;
  return { y, x, size };
};

const ButtonComponent = ({ children, onClick, loading, disabled }) => {
  const [ripples, setRipples] = useState([]);
  const isDisabled = loading || disabled;

  const addRipple = (e) => {
    const newRipple = getNewRipple(e);
    setRipples([...ripples, newRipple]);
  };

  const cleanRipples = useCallback(
    _debounce(() => {
      setRipples([]);
    }, 2000),
    []
  );

  return (
    <Button
      disabled={isDisabled}
      loading={loading}
      onMouseUp={cleanRipples}
      onMouseDown={addRipple}
      onClick={onClick}
    >
      {loading ? <Loader fs={0.2} /> : children}
      {ripples.map((rippleStyleProps, index) => (
        <Ripple key={index} {...rippleStyleProps} />
      ))}
    </Button>
  );
};

ButtonComponent.propTypes = {
  loading: bool,
  disabled: bool,
  onClick: func,
  children: node,
};

ButtonComponent.defaultProps = {
  loading: false,
  disabled: false,
  onClick: () => {},
};

export default ButtonComponent;
