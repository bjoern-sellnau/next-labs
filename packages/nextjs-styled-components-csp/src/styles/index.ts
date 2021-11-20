import { createGlobalStyle } from 'styled-components';
import reset from './reset';
import global from './global';

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${global}
`;

export default GlobalStyle;
