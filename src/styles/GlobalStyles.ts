import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    overflow-x: hidden;
  }

  html, body, #root{
    height: 100%;
  }

  *, button, input{
    font-family: 'Roboto', sans-serif;
    border: 0;
    outline: 0;
  }

  :root{
    --gray: #313338;;
    --gray-primary: #1e1f22;
    --gray-secondary: #313338;
    --gray-tertiary: #2b2d31;
    --gray-light: #b5bac1;
    --gray-hover: #35373c;
    --gray-text: #949ba4;
    --gray-scroll: #1a1b1e;
    --gray-input-chat: #393c41;

    --blue: #5865f2;
    --blue-mention: #4a4b6f;
    --blue-text-mention: #c9cdfb;
    --blue-link: #00a8fc;

    --yellow-primary: #f0b132;
    --yellow-secondary: #454037;

    --black: #1e1f22;
    --black-hover: #2e3035;

    --white: #ffffff;
    --white-light: #2b2d31;

    --red: #f84a4b
  }
`;
