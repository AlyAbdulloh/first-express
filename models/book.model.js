module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define(
    "book",
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        field: "id",
      },
      title: {
        type: DataTypes.STRING(100),
        allowNull: false,
        field: "title",
      },
      category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "stock",
      },
      created_at: {
        type: DataTypes.DATE,
        field: "created_at",
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updated_at: {
        type: DataTypes.DATE,
        field: "updated_at",
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      tableName: "books",
      underscored: true,
      timestamps: false,
    }
  );

  Book.associate = function (models) {
    Book.belongsTo(models.category, { foreignKey: "category_id" });
  };

  return Book;
};
