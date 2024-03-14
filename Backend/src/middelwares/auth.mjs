import jwt from "jsonwebtoken";
const secret = process.env.SECRET;

const generateToken = (payload) => {
  return jwt.sign(payload, secret, { expiresIn: "7d" });
};

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Token not exist" });
  }

  const token = authHeader.split(" ")[1]; // Extraer el token después de "Bearer"

  try {
    // Verificar el token y obtener la información del usuario
    const payload = jwt.verify(token, secret);

    if (payload.role !== "admin") {
      // Si no tiene el rol de administrador, redirigir al usuario a la página de productos
      return res.redirect("/products");
    }
    // Llamar a next() para pasar al siguiente middleware o ruta
    next();
  } catch (error) {
    // Si hay un error en la verificación del token, devolver un mensaje de error
    return res.status(403).json({ message: error });
  }
};

export { generateToken, verifyToken };
