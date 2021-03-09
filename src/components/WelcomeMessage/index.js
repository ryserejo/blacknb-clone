import { Container } from "./styles";
import Button from "../Button";

export default function WelcomeMessage() {
  return (
    <Container>
        <h1>Bem vindo(a) a Comunidade BlacknB</h1>
        <p>
          BlacknB é uma plataforma para ajudar negócios de pessoas negras. Nós
          buscamos dar visibilidade para seu negócio, seja ele qual for.
        </p>

      <Button>Sobre nós</Button>
    </Container>
  );
}
