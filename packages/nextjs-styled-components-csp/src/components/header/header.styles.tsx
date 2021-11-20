import styled from 'styled-components';
import Icon from '../icon';

const Header = styled.header`
  width: 700px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 0;
  margin: 0 auto;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

const NavLink = styled.a`
  opacity: 0.8;
  color: inherit;
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 1rem;

  &:hover {
    opacity: 1;
  }

  &:not(:last-child) {
    margin-right: 3.5rem;
  }
`;

const NavButton = styled.button`
  position: relative;
  padding: 2rem;
  width: 2rem;
  height: 1rem;
  border-radius: 50%;
  background: transparent;
  transition: all 0.2s ease;

  &:hover {
    background: ${props => props.theme.ui.button.background_color};
  }
`;

const NavButtonIcon = styled(Icon)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default { Header, Nav, NavLink, NavButton, NavButtonIcon };
