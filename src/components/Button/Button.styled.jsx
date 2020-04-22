import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  padding: 0 1.57rem;
  border-radius: 5px;
  font-weight: 500;
  font-size: 0.85rem;
  cursor: pointer;
  user-select: none;
  outline: none;
  text-transform: uppercase;
  text-align: center;
  height: 2.71rem;
  min-width: 14.28rem;
  background: ${({ theme }) => theme.background.black};
  border: 1px solid ${({ theme }) => theme.accents.two};
  color: ${({ theme }) => theme.background.white};
  overflow: hidden;
  position: relative;

  &:hover {
    background: ${({ theme }) => theme.background.white};
    color: ${({ theme }) => theme.background.black};
    border: 1px solid ${({ theme }) => theme.background.black};
  }
`;

const Ripple = styled.div`
  ${({ y, x, size }) => `top: ${y}px; left: ${x}px; height: ${size}px; width: ${size}px; `}
  transform: scale(0);
  border-radius: 100%;
  position: absolute;
  opacity: 0.75;
  background-color: ${({ theme }) => theme.accents.five};
  animation: ripple 1000ms;
  @keyframes ripple {
    to {
      opacity: 0;
      transform: scale(2);
    }
  }
`;

export { Button, Ripple };
