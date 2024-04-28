import { DataTypes } from "sequelize";

export default (sequelize) => {
  const Brand = sequelize.define("Brand", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    logo_url: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });

  return Brand;
};
