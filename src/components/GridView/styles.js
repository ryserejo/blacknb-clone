import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  gap: 3.5rem;
  width: 100%;
  margin-bottom: 2rem;

  @media (min-width: 992px) {
    grid-template-columns: 6fr 4fr;
  }
`;

export const ColumCardsHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 1.25rem;
  > h1 {
    margin: 0;
    font-weight: bold;
    font-size: 24px;
  }
  > p {
    margin: 0;
  }
`;
export const ColumCardsContents = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem 2rem;
`;
export const ColumCards = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: unset;
  padding: 0px;
  text-align: unset;
  margin: unset;
`;
export const ColumInfos = styled.div`
  @media (max-width: 992px) {
    display: none;
    flex: 0;
  }
`;
