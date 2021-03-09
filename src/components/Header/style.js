import styled from "styled-components";

export const Container = styled.div`
  box-shadow: rgb(0 0 0 / 6%) 0px 4px 4px;
  padding: 0.75rem 2rem;
  position: relative;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Content = styled.div`
  @media (max-width: 992px) {
    justify-content: center;
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
export const LogoContainer = styled.div``;
export const LocationPickerButton = styled.button`
  @media (max-width: 992px) {
    display: none;
    flex: 0;
  }
  cursor: pointer;
  border: none;
  background: none;
  padding: 0px;
`;
export const LocationPickerContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: auto;
  color: #bf8514;
  padding: 0.5rem 0px;

  > p {
    font-family: Montserrat;
    font-weight: 700;
    margin: 0px 0.5rem 0px 0px;
  }
`;
export const LocationIcon = styled.img`
  margin: 0px 0.5rem 0px 0px;
`;
export const LoginButton = styled.div`
  @media (max-width: 992px) {
    display: none;
    flex: 0;
  }
  width: max-content;
  padding: 0.75rem 1.75rem;
  border-radius: 5px;
  outline: none;
  border: none;
  font-weight: bold;
  font-size: 14px;
  text-decoration: none;
  overflow-wrap: break-word;
  background-color: rgb(255, 255, 255);
  color: rgb(43, 43, 43);
  filter: none;
  cursor: pointer;
`;
export const Logo = styled.img``;

export const MenuButtonContainer = styled.div`
  @media (min-width: 992px) {
    display: none;
    flex: 0;
  }
  position: absolute;
  right: 0.75rem;
  top: 0px;
  bottom: 0px;
  margin: auto;
  height: max-content;
`;

export const MenuButton = styled.button`
  width: max-content;
  padding: 0.75rem 0px;
  border-radius: 5px;
  outline: none;
  border: none;
  font-weight: bold;
  font-size: 14px;
  text-decoration: underline;
  overflow-wrap: break-word;
  background-color: rgb(255, 255, 255);
  color: rgb(43, 43, 43);
  filter: none;
  cursor: pointer;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: row;
  width: auto;
`;
