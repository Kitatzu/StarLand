import { DataTypes } from "sequelize";

export default (sequelize) => {
  sequelize.define("Product", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
    },

    price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      validate: {
        min: 1.0,
      },
    },
  });
};
