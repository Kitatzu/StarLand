import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppRouter } from "./AppRouter";

export const AppMain = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/*" element={<AppRouter />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
