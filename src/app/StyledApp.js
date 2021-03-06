import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *:after,
  *:before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }

  body {
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: normal;
  background-color: white;
  
  }

  

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    border: none;
    background: none;
    outline: none;
  }

 

`;
