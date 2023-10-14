import styled from 'styled-components';
import { Field, Form } from 'formik';
export const FormContainer = styled.div`
display: flex;
    flex-direction: column;
    background-color: #d9d9d9;
    padding: 50px;
    border-radius: 10px;
    width: 400px;
    margin: 0 auto;
    `;

export const Label = styled.label`
  margin-bottom: 5px;
`;
export const StyleForm = styled(Form)`
  flex-direction: column;
  align-items: center;
  justyfy-content: center;
  display: flex;
`;
export const InputField = styled(Field)`
  padding: 5px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
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
    background-color: #014287;
  }
`;
