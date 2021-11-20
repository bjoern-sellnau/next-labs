import Link from 'next/link';
import React from 'react';
import { useTheme } from '../../contexts/theme';
import Styles from './header.styles';

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Styles.Header>
      <Styles.Nav aria-label='Main navigation'>
        <Link href='/' passHref>
          <Styles.NavLink>Home</Styles.NavLink>
        </Link>
        <Link href='/about' passHref>
          <Styles.NavLink>About</Styles.NavLink>
        </Link>
      </Styles.Nav>
      <Styles.Nav aria-label='Secondary navigation'>
        <Styles.NavButton
          aria-label={`Change to ${
            theme.name === 'light' ? 'dark' : 'light'
          } mode`}
          onClick={() => setTheme(theme.name === 'light' ? 'dark' : 'light')}
        >
          <Styles.NavButtonIcon
            icon={theme.name === 'light' ? 'moon' : 'sun'}
          />
        </Styles.NavButton>
      </Styles.Nav>
    </Styles.Header>
  );
};

export default Header;
