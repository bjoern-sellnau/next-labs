import React from 'react';
import Styles from './container.styles';

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <Styles.Container>{children}</Styles.Container>;
};

export default Container;
