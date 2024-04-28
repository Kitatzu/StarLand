# Challenge Técnico StoryDots

Este repositorio contiene el código fuente para el challenge técnico proporcionado por Story Dots, el mismo se basa en un E-Commerce, del cual he elegido la temática de venta de Telescopios (No pregunten solamente paso... )

## Estructura del Repositorio

El repositorio está organizado de la siguiente manera:

**Frontend:** Contiene el código fuente del frontend de la aplicación.

**Backend:** Contiene el código fuente del backend de la aplicación.

## Tecnologías Utilizadas

**Frontend:**

- React con Vite como estructura básica del proyecto.
- Zustand 🐻 para el manejo de los estados.
- Axios para las peticiones al servidor.
- Fontsource para algunas fuentes.

**Backend:**

- RDS (Relational Database Service) el servicio de bases de datos de Amazon para nuestra base de datos.
- NodeJs y Express para la construcción de la base del Servidor.
- Sequelize para la construcción de los modelos de la base de datos.
- Bcrypt para encriptado de las contraseñas.

<span style="color:#FF3308"> **API ENDPOINTS** </span>  
Se presentan los siguientes endpoints:

```javascript
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
```

## Funcionalidades del Proyecto:

**Frontend:**

- Lista de Productos (Cada producto tiene nombre, precio, marca y descripción haciendo click en el mismo)
- Detalles de Productos.
- Scroll Infinito mientras haya productos.
- Registro y Login de usuario.
- Vista de admin para listar todos los productos y poder eliminarlos (Queda en proceso el poder editarlos y agregarlos).
- Posee persistencia de datos.

**Backend:**

- Gestión de productos (CRUD completo de productos, GET, POST, DELETE, PUT).
- Creación de marcas de productos mediante las rutas /brands
- Registro.
- Login.
- Rutas protegidas mediante un middelware Json Web Token (Rutas de agregar, editar y eliminar productos).
- Manejo de errores para evitar la caída del servidor.
- Validaciones en la base de datos para evitar datos repetidos de usuarios o de marcas.

## Instrucciones para probar el proyecto de manera Local.

## Backend

- **Clonar el repositorio:**
  Clonar el repositorio desde Github o descargarlo en zip, abrirlo con el editor de código de preferencia y cambiar hasta la carpeta **Backend** con el comando cd

```bash
git clone https://github.com/Kitatzu/Challenge-StoryDots-Exequiel.git

cd Backend
```

- **Instalar Yarn (Si se lo tiene saltar este paso) y las dependencias:**

```bash
corepack enable
```

```bash
yarn
```

- **Agregar variables de entorno**

Crear un archivo .env en la carpeta raíz (del Backend) y agregar estar variables de entorno necesarias para conectar la DB, llenar con su base de datos de preferencia, en este caso particular se usa postgres pero se puede cambiar en el archivo **testDb.mjs**

```
DB_USER=
DB_PASSWORD=
DB_NAME=
DB_HOST=
DB_PORT=
SECRET=
PORTHOST=
```

- **Iniciar Proyecto**

Usar el comando yarn dev para iniciar el proyecto en modo desarrollo!!

```bash
yarn dev
```

## Frontend

- **Clonar el repositorio:**
  Clonar el repositorio desde Github o descargarlo en zip, abrirlo con el editor de código de preferencia y cambiar hasta la carpeta **Frontend** con el comando cd (Saltar el paso de clonar el repo si ya lo tienen aunque todavía deben moverse a la carpeta Frontend)

```bash
git clone https://github.com/Kitatzu/Challenge-StoryDots-Exequiel.git

cd Frontend
```

- **Instalar Yarn (Si se lo tiene saltar este paso) y las dependencias:**
  Si se habilito **corepack** en el Backend, también en el Frontend, no es necesario realizarlo de nuevo

```bash
corepack enable
```

```bash
yarn
```

- **Agregar variables de entorno**

Crear un archivo .env en la carpeta raíz (del Frontend) y agregar esta variable de entorno necesaria para agregar la URI a la que se le van a realizar las peticiones desde el Frontend

```
VITE_HOST=
```

- **Iniciar Proyecto**

Usar el comando yarn dev para iniciar el proyecto en modo desarrollo!!

```bash
yarn dev
```

## Mejoras a realizar

**Se puede realizar las siguientes mejoras al proyecto:**

- Completar el uso del CRUD de productos desde el Frontend en la pestaña Admin
- Mejorar estilos generales de la aplicación
- Mejora de la claridad en la que se presenta la información (Modales de aviso, colores para avisar login correcto o incorrecto, etc).

## Contacto

Por cualquier duda o consulta no dudes en contactarme en los canales que figuran a continuación

- 📧 [Email](exequielmrodriguez@gmail.com)
- 🌎 [LinkedIn](www.linkedin.com/in/exequielmr)
