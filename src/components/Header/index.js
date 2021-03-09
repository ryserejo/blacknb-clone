import {
  Container,
  Content,
  LogoContainer,
  Logo,
  LocationPickerButton,
  LocationPickerContainer,
  LocationIcon,
  LoginButton,
  ButtonsContainer,
  MenuButtonContainer,
  MenuButton,
} from "./style";

export default function Header() {
  return (
    <Container>
      <Content>
        <LogoContainer>
          <Logo src="/images/blacknbLogo.svg"></Logo>
        </LogoContainer>
        <ButtonsContainer>
          <LocationPickerButton>
            <LocationPickerContainer>
              <LocationIcon src="/images/locationIcon.svg"></LocationIcon>
              <p>Localização:</p>
              <p>Escolher uma localização</p>
            </LocationPickerContainer>
          </LocationPickerButton>
          <LoginButton>Login</LoginButton>
        </ButtonsContainer>
      </Content>
      <MenuButtonContainer>
        <MenuButton>
          <img src="/images/menuIcon.svg"></img>
        </MenuButton>
      </MenuButtonContainer>
    </Container>
  );
}
