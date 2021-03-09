import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 2rem;
`;

export const Input = styled.input`
  border: 0.5px solid rgb(59, 46, 29);
  border-radius: 5px;
  outline: none;
  height: 40px;
  font-family: Montserrat;
  box-sizing: border-box;
  width: 100%;
  padding: 0.75rem;
`;

export const Button = styled.button`
  margin-left: 1rem;
  width: max-content;
  padding: 0.75rem 1.75rem;
  border-radius: 5px;
  outline: none;
  border: none;
  font-weight: bold;
  font-size: 14px;
  text-decoration: none;
  overflow-wrap: break-word;
  background-color: rgb(59, 46, 29);
  color: rgb(255, 255, 255);
  filter: none;
  cursor: pointer;
`;
