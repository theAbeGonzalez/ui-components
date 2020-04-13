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
  justify-content: center;
  text-transform: uppercase;
  text-align: center;
  height: 2.71rem;
  line-height: 2.71rem;
  width: auto;
  min-width: 14.28rem;
  white-space: nowrap;
  transition: border 0.2s, background 0.2s, color 0.2s ease-out;
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.primary.white};
  border: 1px solid ${({ theme }) => theme.accents.lighter};
  color: ${({ theme }) => theme.accents.darkest};
`;

export { Button };
