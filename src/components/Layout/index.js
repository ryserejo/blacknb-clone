import Header from "../Header";
import Footer from "../Footer";

import { Main } from "./styles";

export default function Layout({children}) {
  return (
    <Main>
      <Header></Header>
      {children}
      <Footer></Footer>
    </Main>
  );
}
