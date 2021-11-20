import React from 'react';
import Styles from './heading.styles';

export type HeadingType = 'h1' | 'h2';
interface HeadingProps {
  as?: HeadingType;
  design?: HeadingType;
  children: React.ReactNode;
}

const Heading = ({ as = 'h1', design, children }: HeadingProps) => {
  return (
    <Styles.Heading as={as} design={design || as}>
      {children}
    </Styles.Heading>
  );
};

export default Heading;
