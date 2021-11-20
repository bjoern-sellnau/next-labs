import React from 'react';
import Styles from './text.styles';

export type TextType = 'p' | 'span';
interface TextProps {
  as?: TextType;
  design?: TextType;
  children: React.ReactNode;
}

const Text = ({ as = 'p', design, children }: TextProps) => {
  return (
    <Styles.Text as={as} design={design || as}>
      {children}
    </Styles.Text>
  );
};

export default Text;
