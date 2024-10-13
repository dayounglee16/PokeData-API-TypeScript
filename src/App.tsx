import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRouter from "./routes/AppRouter";
import { RecoilRoot } from "recoil";
import GlobalStyle from "./assets/styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { colors } from "./assets/styles/theme";

const App = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <ThemeProvider theme={colors}>
          <GlobalStyle />
          <AppRouter />
        </ThemeProvider>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;
