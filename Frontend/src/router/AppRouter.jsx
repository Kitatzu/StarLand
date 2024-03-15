import { Routes, Route } from "react-router-dom";
import { Landing } from "../pages/Landing";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { ProductDetails } from "../components/ProductDetails";
import { Register } from "../pages/Register";
import { Login } from "../pages/Login";
import { Admin } from "../pages/Admin";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
