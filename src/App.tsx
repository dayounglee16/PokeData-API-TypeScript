import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRouter from "./routes/AppRouter";
import { RecoilRoot } from "recoil";
import GlobalStyle from "./assets/styles/GlobalStyles";

const App = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <GlobalStyle />
        <AppRouter />
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;
