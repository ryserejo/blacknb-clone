import { useState } from "react";
import NavbarButton from "../NavbarButton";
import { Container, Spacing, Content } from "./styles";

export default function CompanyNavbar() {
  const [navbarActive, setNavbarActive] = useState([
    false,
    false,
    false,
    false,
  ]);

  const eventClickNavbarButtons = (i) => {
    const newstate = [false, false, false, false];
    newstate[i] = true;
    setNavbarActive(newstate);
  };
  return (
    <Container>
      <Spacing>
        <Content>
          <NavbarButton
            i={0}
            eventClickFunction={eventClickNavbarButtons}
            active={true}
            title="Sobre a Empresa"
          />
          <NavbarButton
            i={1}
            eventClickFunction={eventClickNavbarButtons}
            active={navbarActive[1]}
            title="Colaboradores"
            badge
          />
          <NavbarButton
            i={2}
            eventClickFunction={eventClickNavbarButtons}
            active={navbarActive[2]}
            title="Entrevistas"
            badge
          />
          <NavbarButton
            i={3}
            eventClickFunction={eventClickNavbarButtons}
            active={navbarActive[3]}
            title="Produtos"
            badge
          />
          <NavbarButton
            i={4}
            eventClickFunction={eventClickNavbarButtons}
            active={navbarActive[4]}
            title="Vagas de Emprego"
            badge
          />
        </Content>
      </Spacing>
    </Container>
  );
}
