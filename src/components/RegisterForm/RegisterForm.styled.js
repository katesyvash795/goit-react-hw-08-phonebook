import styled from 'styled-components';

export const Form = styled.form`
display: flex;
    flex-direction: column;
    background-color: #d9d9d9;
    padding: 50px;
    border-radius: 10px;
    width: 400px;
    margin: 0 auto;
    `;

export const Label = styled.label`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 8px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const SubmitButton = styled.button`
padding: 10px 20px;
background-color: #007bff;
color: #fff;
border: none;
border-radius: 4px;
cursor: pointer;
font-size: 16px;

&:hover {
  background-color: #e30b0b;
}
`;
