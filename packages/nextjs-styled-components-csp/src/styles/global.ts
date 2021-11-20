import { css } from 'styled-components';

export default css`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background: ${props => props.theme.site.background_color};
  }

  body,
  input,
  textarea,
  button,
  select,
  label,
  span,
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Lexend' !important;
    color: ${({ theme }) => theme.colors.primary};
  }

  body,
  input,
  textarea,
  button,
  select {
    font-size: 1.6rem;
  }
`;
