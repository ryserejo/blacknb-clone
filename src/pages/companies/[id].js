import axios from "axios";
import Layout from "../../components/Layout";
import CompaniesHeaders from "../../components/CompaniesHeader";
import CompaniesAbout from "../../components/CompaniesAbout";
import { Section } from "./styles";

export default function Index({ data }) {
  console.log(data);
  return (
    <Layout>
      <Section>
        <CompaniesHeaders data={data} />
        <CompaniesAbout data={data} />
      </Section>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  try {
    const res = await axios.get(`http://localhost:1337/companies/1`);
    const company = res.data;
    return { props: { data: company } };
  } catch (error) {
    return { error };
  }
}
