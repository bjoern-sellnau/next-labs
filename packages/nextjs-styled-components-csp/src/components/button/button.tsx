import React from 'react';
import Styles from './button.styles';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return <Styles.Button onClick={onClick}>{children}</Styles.Button>;
};

export default Button;
