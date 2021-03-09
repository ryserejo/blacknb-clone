import styled from "styled-components";

export const ButtonContainer = styled.button`
  ::before {
    content: "";
    display: block;
    padding-bottom: 70%;
    margin: 0;
  }
  padding: 0;
  position: relative;
  border: none;
  outline: none;
  overflow: hidden;
  cursor: pointer;
  width: 100%;
  max-width: 500px;
  font-size: 14px;
  font-weight: bold;
  color: rgb(255, 255, 255);
  font-family: Montserrat, sans-serif;
  border-radius: 5px;

  ::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    background-color: rgb(59, 46, 29);
    opacity: 0.5;
    margin: 0;
  }
`;

export const BackgroundImage = styled.img`
  margin: 0;
  position: absolute;
  z-index: 0;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`;
export const Title = styled.span`
  position: absolute;
  z-index: 1;
  inset: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin: 0;

  :hover {
    background-color: rgba(191, 133, 20, 0.5);
  }
`;
