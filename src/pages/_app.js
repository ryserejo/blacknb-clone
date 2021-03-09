import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Montserrat';
  src: url('/montserrat-bold.ttf')
}

@font-face {
  font-family: 'Montserrat';
  src: url('/montserrat-regular.ttf')
}

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    line-height: 1.5;
  }

  html, body {
    font-family: Montserrat;
    font-kerning: 300;
  }
`;

const theme = {
  colors: {
    primary: "#bf8514",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
