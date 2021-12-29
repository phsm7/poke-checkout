import { createGlobalStyle } from 'styled-components';
import PokemonSolid from 'assets/fonts/PokemonSolid.ttf';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default createGlobalStyle`
  @font-face {
    font-family: 'PokemonSolid';
    src: url(${PokemonSolid});
  }

  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100%;
  }
  html {
    font-size: 62.5%;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
  }

  @keyframes fadeOut {
      0% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }
`;
