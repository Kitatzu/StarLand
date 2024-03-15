import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppRouter } from "./AppRouter";
import { Navbar } from "../components/Navbar";

export const AppMain = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/*" element={<AppRouter />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
