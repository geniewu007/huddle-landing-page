import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
    box-sizing: border-box;
  }
  body {
    font-family: 'Poppins', sans-serif;
    color: white;
    background-image: url(./images/bg-desktop.svg);
    background-color: hsl(257, 40%, 49%);
    opacity: 0.95;
  }

  h2 {
    font-weight: 600;
    width: 80%;
    
    @media (max-width: 768px) {
      max-width: 100%;
      margin: 20px auto;
    }
  }



  p {
    font-weight: 400;
    opacity: 0.6;
    line-height: 1.5;
  }

`