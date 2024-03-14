import express from "express";
import {
  getAllProducts,
  getForId,
  addProduct,
  deleteProduct,
  editProduct,
} from "../controllers/productController.mjs";

import { addBrands, getBrands } from "../controllers/brandController.mjs";

const router = express.Router();

//Routes products
router.get("/products", getAllProducts);
router.get("/products/:id", getForId);
router.post("/products", addProduct);
router.put("/products/:id", editProduct);
router.delete("/products/:id", deleteProduct);

//Brands
router.get("/brands", getBrands);
router.post("/brands", addBrands);

//Routes users
router.post("/users");

router.use((req, res) => {
  res.status(400).send("Resource not found, invalid route");
});

export default router;
