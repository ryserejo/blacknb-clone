import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0.75rem 1rem;
  background: rgb(244, 244, 244);
  border-radius: 5px;
  margin-bottom: 1.5rem;

  > h1 {
    line-height: 1.25;
    font-weight: bold;
    font-size: 24px;
    margin: 0px;
  }

  > button {
    margin-top: 10px;
  }

  > p {
    font-size: 14px;
    font-weight: 300;
    max-width: 500px;
    margin-bottom: 0.5rem;
  }
`;
