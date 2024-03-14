import express from "express";
import {
  getAllProducts,
  getForId,
  addProduct,
  deleteProduct,
  editProduct,
} from "../controllers/productController.mjs";

import { addBrands, getBrands } from "../controllers/brandController.mjs";
import { getUsers, login, register } from "../controllers/userController.mjs";
import { verifyToken } from "../middelwares/auth.mjs";

const router = express.Router();

//Routes products
router.get("/products", getAllProducts);
router.get("/products/:id", getForId);
router.post("/products", verifyToken, addProduct);
router.put("/products/:id", verifyToken, editProduct);
router.delete("/products/:id", verifyToken, deleteProduct);

//Brands
router.get("/brands", getBrands);
router.post("/brands", addBrands);

//Routes users
router.get("/users", getUsers);
router.post("/register", register);
router.post("/login", login);

router.use((req, res) => {
  res.status(400).send("Resource not found, invalid route");
});

export default router;
