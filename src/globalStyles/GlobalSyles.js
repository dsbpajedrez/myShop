import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root{
        box-sizing:border-box;
        margin:0;
        padding:0;
        font-size:62.5%;

        --verde-claro :hsl(116, 73%, 74%);
        --azul-claro:hsl(181, 32%, 63%);
        --gris-claro:hsl(181, 2%, 71%);

    }
    body{
      
        font-family: Open-Sans, Helvetica, Sans-Serif;
    }
`