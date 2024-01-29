module.exports = (sequelize, DataTypes) => {
    const Book = sequelize.define('book', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            field: 'id'
          },
          title: {
            type: DataTypes.STRING(100),
            allowNull: false,
            field: 'title',
          },
          category: {
            type: DataTypes.STRING(20),
            allowNull: false,
            field: 'category'
          },
          stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'stock',
          },
          created_at: {
            type: DataTypes.DATE,
            field: 'created_at',
            allowNull: false,
            defaultValue: DataTypes.NOW
          },
          updated_at: {
            type: DataTypes.DATE,
            field: 'updated_at',
            allowNull: false,
            defaultValue: DataTypes.NOW
          }
    }, {
        tableName: 'books',
        underscored: true
    });

    return Book;
}