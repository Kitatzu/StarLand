import { Routes, Route } from "react-router-dom";
import { Landing } from "../pages/Landing";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { ProductDetails } from "../components/ProductDetails";
import { Register } from "../pages/Register";
import { Login } from "../pages/Login";
import { Admin } from "../pages/Admin";
import { ProtectedRoutes } from "../components/ProtectedRoutes";
import { useUserStore } from "../store/Store";

export const AppRouter = () => {
  const { isLogin } = useUserStore();

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="*" element={<NotFound />} />

        <Route element={<ProtectedRoutes isLogin={isLogin} />}>
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
    </>
  );
};
