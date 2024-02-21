const { Op, where } = require("sequelize");
const db = require("../../models");
const Category = db.categories;
const sequelize = db.sequelize;

module.exports = {
  index: async (req, res) => {
    try {
      const categories = await Category.findAll({ include: ["books"] });

      res.status(200).json(categories);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  getBooksCount: async (req, res) => {
    try {
      let query =
        "SELECT c.name, COUNT(b.category_id) AS jumlah_buku FROM books b INNER JOIN categories c ON b.category_id = c.id GROUP BY b.category_id";

      let [data, _] = await sequelize.query(query);

      res.status(200).json(data);
    } catch (error) {
      return res.status(200).json({ message: error.message });
    }
  },
};
