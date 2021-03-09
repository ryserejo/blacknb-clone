import {
  Content,
  Container,
  LinksContainer,
  SocialMediaContainer,
  LangSelector,
  SocialMediaIcon,
} from "./styles";

export default function Footer() {
  return (
    <Container>
      <Content>
        <LinksContainer>
          <span>Copyright© 2020 DYSOFT</span>
          <a href="/">Sobre</a>
          <a href="/">Formulário de Contato</a>
          <a href="/">Política de Privacidade</a>
          <a href="/">Termos de Uso</a>
        </LinksContainer>
        <SocialMediaContainer>
          <SocialMediaIcon>
            <img src="/images/facebookIcon.svg"></img>
          </SocialMediaIcon>
          <SocialMediaIcon>
            <img src="/images/linkedinIcon.svg"></img>
          </SocialMediaIcon>
          <SocialMediaIcon>
            <img src="/images/instagramIcon.svg"></img>
          </SocialMediaIcon>
          <LangSelector>
            <option value="en">en</option>
            <option value="pt">pt</option>
            <option value="fr">fr</option>
            <option value="es">es</option>
          </LangSelector>
        </SocialMediaContainer>
      </Content>
    </Container>
  );
}
