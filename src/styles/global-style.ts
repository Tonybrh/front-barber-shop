import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #fff;
    color: #000;
  }

  #__next {
    height: 100%;
  }
`;

const GlobalContainer = styled.div`
    display: flex;
    color: white;
    width: 100%;
    height: 100%;
`;

export {
    GlobalStyle,
    GlobalContainer
};
