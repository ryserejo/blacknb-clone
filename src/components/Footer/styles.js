import styled from "styled-components";

export const Container = styled.footer`
  font-size: 14px;
  font-weight: 400;
  display: flex;
  width: 100%;
  background-color: rgb(59, 46, 29);
  color: rgb(255, 255, 255);
  padding: 1.5rem 0;
  font-family: Montserrat, sans-serif;
  position: absolute;
  bottom: 0;
  left: 0;
`;
export const Content = styled.div`
  @media (max-width: 839px) {
    flex-direction: column;
    align-items: flex-start;
  }
  padding: 0 3rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;
export const LinksContainer = styled.div`
  @media (max-width: 839px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  margin-right: 1rem;
  margin-bottom: 1rem;

  > span {
    margin: 0px 1.5rem 0px 0px;
    @media (max-width: 839px) {
      margin: 0px 0px 1rem;
    }
  }
  > a {
    line-height: 1.5;
    font-size: 14px;
    margin: 0px 1rem 0px 0px;
    color: white;
    text-decoration: none;
    @media (max-width: 839px) {
      margin: 0px 0px 1rem;
    }
  }
`;
export const SocialMediaContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const SocialMediaIcon = styled.div`
  margin: 0px 1.5rem 0px 0px;
  color: white;
  text-decoration: none;
`;

export const LangSelector = styled.select`
  border: 0.5px solid rgb(59, 46, 29);
  background-color: rgb(255, 255, 255);
  border-radius: 5px;
  outline: none;
  min-height: 35px;
  font-family: Montserrat, sans-serif;
  box-sizing: border-box;
  padding: 0.75rem;

  > option {
    font-weight: normal;
    display: block;
    white-space: nowrap;
    min-height: 1.2em;
  }
`;
