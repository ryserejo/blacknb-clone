import styled from "styled-components";

export const Container = styled.div`
  font-family: Montserrat;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0px;
  :not(:last-child) {
    margin-bottom: 2rem;
  }
`;
export const BackButtonContainer = styled.div`
  > button {
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
  }
`;
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: none;
  text-align: unset;
`;
export const TitleContent = styled.div`
  display: flex;
  flex-direction: column;

  > h1 {
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 0.25rem;
  }
`;
export const RatingContainer = styled.div`
display: flex;
flex-direction: row;

  > h3 {
    font-weight: bold;
    font-size: 13.3px;
    margin: 0;
    padding: 0;
  }
`;
export const StarsContainer = styled.div``;
export const RatingStar = styled.div``;
