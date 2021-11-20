import styled from 'styled-components';

const Button = styled.button`
  padding: 1.5rem;
  border-radius: 0.3rem;
  background: ${props => props.theme.ui.button.background_color};
  border: none;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

export default { Button };
