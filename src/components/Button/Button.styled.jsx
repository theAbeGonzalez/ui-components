import styled, { css } from 'styled-components';
import { applyIf, applyIfTernary } from '@utils/style';

const inactiveCss = css`
  background: ${({ theme }) => theme.background.black};
  border: 1px solid ${({ theme }) => theme.accents.two};
  color: ${({ theme }) => theme.background.white};
`;

const activeCss = css`
  background: ${({ theme }) => theme.background.white};
  color: ${({ theme }) => theme.background.black};
  border: 1px solid ${({ theme }) => theme.background.black};
`;

const getButtonStyles = ({ loading, disabled }) =>
  applyIfTernary(loading || disabled, activeCss, inactiveCss);

const getCursorStyle = ({ loading, disabled }) => {
  if (loading) {
    return 'cursor: wait;';
  } else if (disabled) {
    return 'cursor: not-allowed;';
  }

  return 'cursor: pointer;';
};

const getDisabledStyle = ({ disabled }) =>
  applyIf(
    disabled,
    css`
      background: ${({ theme }) => theme.accents.one};
      color: ${({ theme }) => theme.accents.three};
      border: 1px solid ${({ theme }) => theme.accents.two};
    `
  );

const getHoverStyle = ({ disabled }) =>
  applyIf(
    !disabled,
    css`
      &:hover {
        background: ${({ theme }) => theme.background.white};
        color: ${({ theme }) => theme.background.black};
        border: 1px solid ${({ theme }) => theme.background.black};
      }
    `
  );

const Button = styled.button`
  display: inline-block;
  padding: 0 1.57rem;
  border-radius: 5px;
  font-weight: 500;
  font-size: 0.85rem;
  user-select: none;
  outline: none;
  text-transform: uppercase;
  text-align: center;
  height: 2.71rem;
  min-width: 14.28rem;
  overflow: hidden;
  position: relative;
  ${getButtonStyles}
  ${getCursorStyle}
  ${getDisabledStyle}
  ${getHoverStyle}
`;

const Ripple = styled.div`
  ${({ y, x, size }) => `top: ${y}px; left: ${x}px; height: ${size}px; width: ${size}px; `}
  transform: scale(0);
  border-radius: 100%;
  position: absolute;
  opacity: 0.75;
  background-color: ${({ theme }) => theme.accents.two};
  animation: ripple 1000ms;
  @keyframes ripple {
    to {
      opacity: 0;
      transform: scale(2);
    }
  }
`;

export { Button, Ripple };
