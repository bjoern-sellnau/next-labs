import styled from 'styled-components';
import { TextType } from './text';

interface TextProps {
  design: TextType;
}
const Text = styled.p<TextProps>`
  font-size: 1.6rem;
  font-weight: 300;
  line-height: 3rem;
`;

export default { Text };
