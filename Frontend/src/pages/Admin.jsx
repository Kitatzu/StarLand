import css from "../css/Admin.module.css";
import { useProductStore } from "../store/Store";

export const Admin = () => {
  const { products, fetchDeleteProduct } = useProductStore();

  const handleDelete = (productId) => {
    fetchDeleteProduct(productId);
  };

  const handleEdit = () => {};

  return (
    <div className={css.admin_container}>
      <button className={css.create_btn}>Crear Nuevo Producto</button>
      <div className={css.table_container}>
        <table className={css.table}>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Descripción</th>
              <th> Acciones </th>
              {/* Agrega más encabezados si es necesario */}
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>{product.description}</td>
                <td>
                  <div className={css.btn_container}>
                    <button onClick={() => handleEdit(product.id)}>
                      Editar
                    </button>
                    <button onClick={() => handleDelete(product.id)}>
                      Eliminar
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
