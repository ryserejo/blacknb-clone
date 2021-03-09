import styled from "styled-components";

export const Main = styled.div`
  position: relative;
  min-height: 100vh;
`;

export const Section = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  max-width: 1440px;
  margin: auto;
  padding: 1rem 2rem 20rem;

  @media (min-width: 992px) {
    padding: 3rem 2rem 10rem;
  }
`;

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  color: unset;
  padding: 0px;
  text-align: unset;
  margin: unset;
`;
export const MobileSearchAndLocation = styled.div`
  @media (min-width: 992px) {
    display: none;
    flex: 0;
  }
`;
