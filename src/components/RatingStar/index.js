import styled from "styled-components";
import { useEffect, useState } from "react";

const Container = styled.span`
  display: flex;
  align-items: unset;
  flex-direction: row;
  width: auto;
  margin-left: 0.3rem;
  margin-bottom: 0.2rem;
  > span {
    opacity: 1;
    display: inline-block;
    direction: 10;
  }
`;

export default function RatingStar({ rating }) {
  const [stars, setStars] = useState([]);
  useEffect(() => {
    const startsList = [];
    for (let i = 0; i < rating; i++) {
      startsList.push(i);
    }
    console.log(rating);
    setStars(startsList);
  }, []);

  return (
    <Container>
      {stars.map((ob, index) => (
        <img key={index} src="/images/starIcon.svg" />
      ))}
    </Container>
  );
}
