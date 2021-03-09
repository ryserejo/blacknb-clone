import { ButtonContainer, BackgroundImage, Title, Container } from "./styles";

export default function Card({eventClickFunction, TitleText, ImageSRC, data}) {
  return (
    <ButtonContainer onClick={() => eventClickFunction(data)}>
        <BackgroundImage src={ImageSRC} />
        <Title>{TitleText}</Title>
    </ButtonContainer>
  );
}
