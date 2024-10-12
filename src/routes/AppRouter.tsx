import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Detail from "../pages/Detail/Detail";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
  );
};

export default AppRouter;
