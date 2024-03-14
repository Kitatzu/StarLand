import jsonwebtoken from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json({ message: "Token is invalid or not exist!" });
  }

  try {
    // Verificar el token y obtener la información del usuario
    const decoded = jwt.verify(token, "secreto"); // Reemplaza 'secreto' con tu clave secreta

    // Adjuntar la información del usuario al objeto de solicitud para que esté disponible en las rutas protegidas
    req.user = decoded;

    // Llamar a next() para pasar al siguiente middleware o ruta
    next();
  } catch (error) {
    // Si hay un error en la verificación del token, devolver un mensaje de error
    return res.status(403).json({ message: "Token inválido" });
  }
};
