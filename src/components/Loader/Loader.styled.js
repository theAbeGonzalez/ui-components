import styled from 'styled-components';

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

  .loader,
  .loader:before,
  .loader:after {
    background: ${({ theme }) => theme.accents.four};
    animation: load1 1s infinite ease-in-out;
    width: 1em;
    height: 4em;
  }
  .loader {
    color: ${({ theme }) => theme.accents.four};
    font-size: ${({ fs }) => fs}em;
    text-indent: -9999em;
    margin: 88px auto;
    position: relative;
    transform: translateZ(0);
    animation-delay: -0.16s;
  }
  .loader:before,
  .loader:after {
    position: absolute;
    top: 0;
    content: '';
  }
  .loader:before {
    left: -1.5em;
    animation-delay: -0.32s;
  }
  .loader:after {
    left: 1.5em;
  }
  @keyframes load1 {
    0%,
    80%,
    100% {
      box-shadow: 0 0;
      height: 4em;
    }
    40% {
      box-shadow: 0 -2em;
      height: 5em;
    }
  }
`;

export { LoaderContainer };
