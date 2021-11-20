import React from 'react';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import Styles from './icon.styles';

interface IconProps {
  icon: IconName;
  'aria-label'?: string;
  className?: string;
}

const Icon = ({ icon, 'aria-label': ariaLabel, className }: IconProps) => {
  return (
    <Styles.Icon icon={icon} aria-label={ariaLabel} className={className} />
  );
};

export default Icon;
