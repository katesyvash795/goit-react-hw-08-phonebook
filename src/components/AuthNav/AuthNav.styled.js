import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.div`
  display: flex;
  gap:10px;
  justify-content: center;
  align-items: center;
`;

export const StyledNavLink = styled(NavLink)`
padding: 10px 20px;
background-color: #007bff;
color: #fff;
border: none;
text-decoration: none;
border-radius: 4px;
cursor: pointer;
font-size: 16px;

&:hover {
  background-color: #014287;
}
`;
