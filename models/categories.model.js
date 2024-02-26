"use strict";

module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    "category",
    {
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
    },
    {
      tableName: "categories",
      underscored: true,
      timestamps: false,
    }
  );

  Category.associate = function (models) {
    Category.hasMany(models.book, { foreignKey: "category_id" });
  };

  return Category;
};
