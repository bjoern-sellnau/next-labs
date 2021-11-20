import styled from 'styled-components';
import { HeadingType } from './heading';

interface HeadingProps {
  design: HeadingType;
}
const Heading = styled.h1<HeadingProps>`
  font-size: ${({ design }) =>
    (design === 'h1' && '2.6rem') || (design === 'h2' && '2.3rem')};
  margin-bottom: 1.5rem;
`;

export default { Heading };
