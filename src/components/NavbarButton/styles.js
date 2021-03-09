import styled from "styled-components";

export const Button = styled.button`
  background: unset;
  border-top: unset;
  border-right: unset;
  border-left: unset;
  border-image: unset;
  padding: 1rem;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  color: ${(props) =>
    props.active ? "color: rgb(191, 133, 20)" : "rgb(191, 133, 20)"};
  opacity: ${(props) => (props.active ? 1 : 0.5)};
  filter: ${(props) => (props.active ? "none" : "saturate(0.25)")};
  border-bottom: 1px solid rgb(191, 133, 20);
`;
export const ButtonContent = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: row;
  width: auto;
`;
export const Badge = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 0.009rem;
  height: 0.009rem;
  border-radius: 50%;
  background: rgb(191, 133, 20);
  font-size: 11px;
  font-weight: bold;
  text-align: center;
  color: rgb(255, 255, 255);
  padding: 10px;
  margin-right: 0.5rem;
`;
