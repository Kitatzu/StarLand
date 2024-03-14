import db from "../../testDb.mjs";

const { Product, Brand } = db;

async function getAllProducts(req, res) {
  try {
    const allProduct = await Product.findAll({ includes: Brand });
    res.status(200).json({ allProduct });
  } catch (error) {
    res.status(400).json({ message: `Error: ${error}` });
  }
}

async function getForId(req, res) {
  const { id } = req.params;

  try {
    const product = await Product.findByPk(id, { includes: Brand });
    if (!product) {
      res.status(400).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ message: `Error: ${error}` });
  }
}

async function addProduct(req, res) {
  const { name, description, img, price, brandName } = req.body;

  try {
    const brand = await Brand.findOne({ where: { name: brandName } });
    if (!brand) {
      return res.status(404).json({ error: "Marca no encontrada" });
    }

    const newProduct = await Product.create({
      name,
      description,
      img,
      price,
      BrandId: brand.id,
    });
    res.status(200).json({ message: "Your new product", newProduct });
  } catch (error) {
    res.status(400).json({ message: `Error: ${error}` });
  }
}

async function editProduct(req, res) {
  const { id } = req.params;
  const updateFields = req.body;

  try {
    const find = await Product.findByPk(id);
    if (!find) {
      res.status(400).json({ message: "Product not found for id" });
    }

    await find.update(updateFields);
    res
      .status(200)
      .json({ message: "Producto actualizado correctamente", find });
  } catch (error) {
    res.status(400).json({ message: `Error: ${error}` });
  }
}

async function deleteProduct(req, res) {
  const { id } = req.params;

  try {
    const find = await Product.findByPk(id);
    if (!find) {
      res.status(400).json({ message: "Product not found for id" });
    }

    await find.destroy();
    res.status(200).json({ message: "Product deleted" });
  } catch {
    res.status(400).json({ message: `Error: ${error}` });
  }
}

export { getAllProducts, getForId, addProduct, editProduct, deleteProduct };
