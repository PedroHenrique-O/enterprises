import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  :root{
    --bg-white #FFFFFF;
    --background #E5E5E5;
    --brandcolor-primary-default:#4F46BB;
    --brandcolor-primary-light:#8E85FF;
    --border-color-hover: #bbb8d9;
    --textcolor-primary: #302E45;
    --textcolor-secondary #6D6C7B;
    --outline-gray-dark: #C4C4C4;


  }

  *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;

  }
 
  html{
    @media (max-width: 720px){
      font-size: 87.5%;
    }
    @media (max-width: 1080px){
      font-size: 93.75%;
    }
  }

  body{
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button, select{
    font-family: "Inter", sans-serif; 
    font-weight: 400;
  }

  h1, h2, h3,{
    font-weight: 700;
  }

  button{
    cursor: pointer;
  }

`;
