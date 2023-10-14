import React from 'react';
import { NavContainer, StyledNavLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <NavContainer>
      <StyledNavLink to="/register">Register</StyledNavLink>
      <StyledNavLink to="/login">Log In</StyledNavLink>
    </NavContainer>
  );
};

export default AuthNav;
