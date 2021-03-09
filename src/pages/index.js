import Layout from "../components/Layout";
import WelcomeMessage from "../components/WelcomeMessage";
import LocationPicker from "../components/LocationPicker";
import SerachForm from "../components/SerachForm";
import GridView from "../components/GridView";

import { Section, Container, MobileSearchAndLocation } from "./styles";

import axios from "axios";
export default function Index({ companies = [] }) {
  console.log(companies);
  return (
    <Layout>
      <Section>
        <Container>
          <WelcomeMessage></WelcomeMessage>
          <MobileSearchAndLocation>
            <LocationPicker />
            <SerachForm nobutton />
          </MobileSearchAndLocation>
          <GridView companies={companies}></GridView>
        </Container>
      </Section>
    </Layout>
  );
}

Index.getInitialProps = async (ctx) => {
  try {
    const res = await axios.get("http://localhost:1337/companies");
    const companies = res.data;
    return { companies };
  } catch (error) {
    return { error };
  }
};
