import styled from 'styled-components';

const ErrorStyles = styled.div`
  min-height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 90vw;
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
    margin-top: -3rem;
  }
  h5 {
    margin-bottom: 0.5rem;
    font-size: 2rem;
  }

  p {
    line-height: 1.5;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    color: var(--grey-500);
    font-size: 1.5rem;
  }
  a {
    color: var(--primary-500);
    text-transform: capitalize;
    font-size: 1.25rem;
  }
`;

export default ErrorStyles;