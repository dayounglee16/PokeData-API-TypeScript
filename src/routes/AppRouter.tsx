import { Routes, Route } from "react-router-dom";
import AppRouterContainer from "../assets/styles/AppRouterContainer";
import Header from "../components/Header";
import Home from "../pages/Home/Home";
import Detail from "../pages/Detail/Detail";

const AppRouter = () => {
  return (
    <AppRouterContainer>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </AppRouterContainer>
  );
};

export default AppRouter;
