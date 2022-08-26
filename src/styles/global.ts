import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }
  html {
    scroll-behavior: smooth;
  }
  @media (max-width: 1080px){
    html{
      font-size: 93.75%;
    }
  }
  @media (max-width: 720px){
    html{
      font-size: 87.5%;
    }
  }
  button, a{
    cursor: pointer;
  }
  a{
    text-decoration: none;
    color: inherit;
  }
  *::-webkit-scrollbar {
    width: 10px;               /* width of the entire scrollbar */
  }
  *::-webkit-scrollbar-track {
    background: #F0F0F0;        /* color of the tracking area */
  }
  *::-webkit-scrollbar-thumb {
    background-color: #696969;    /* color of the scroll thumb */
    border-radius: 20px;       /* roundness of the scroll thumb */
    border: 3px solid #F0F0F0;  /* creates padding around scroll thumb */
  }
`;

export { GlobalStyle };