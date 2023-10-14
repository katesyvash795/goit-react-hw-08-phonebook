import styled from 'styled-components';

export const UserMenuContainer = styled.div`
display: flex;
    gap: 10px;
    flex-direction: row;
`;

export const WelcomeMessage = styled.p`
  font-size: 18px;
`;

export const LogoutButton = styled.button`
padding: 10px 20px;
background-color: #e30b0b;
color: #fff;
border: none;
text-decoration: none;
border-radius: 4px;
cursor: pointer;
font-size: 16px;

&:hover {
  background-color:#9d0000;
}
`;
