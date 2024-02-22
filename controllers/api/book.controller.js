const Validator = require("fastest-validator");
const v = new Validator();
var bcrypt = require("bcryptjs");
const { Op, where } = require("sequelize");
const db = require("../../models");
const Book = db.book;
const Category = db.category;

module.exports = {
  index: async (req, res) => {
    try {
      //get all
      const data = await Book.findAll({
        include: [{ model: Category }],
        order: [["id", "DESC"]],
      });

      //when data is empty
      if (data.length == 0) {
        return res.status(204).json({ message: "Data is Empty" });
      }

      // let extractData = data.map((item) => ({
      //   id: item.id,
      //   title: item.title,
      //   category_name: item.category,
      // }));
      // return json
      return res.status(200).json(data);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },

  show: async (req, res) => {
    try {
      //get data
      let id = req.params.id;
      const data = await Book.findByPk(id, { include: ["category"] });
      // const data = await Category.findByPk(id, { include: ["books"] });

      // if not found
      if (!data) {
        return res.status(404).json({ message: "Data not found!" });
      }

      // return json
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  store: async (req, res) => {
    try {
      const { title, category_id, stock } = req.body;
      //validation
      const schema = {
        title: "string",
      };

      const validate = v.validate(req.body, schema);

      if (validate.length) {
        return res.status(400).json(validate);
      }

      //insert
      await Book.create({
        title: title,
        category_id: category_id,
        stock: stock,
      });

      //return json
      return res.status(201).json({ message: "Data was inserted" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  update: async (req, res) => {
    try {
      //cek data
      const id = req.params.id;

      let data = await book.findByPk(id);
      // if not found
      if (!data) {
        return res.status(404).json({ message: "Data not found!" });
      }

      // validate
      // const schema = {
      //     title: 'string|optional',
      //     category: 'string|optional',
      //     // stock: 'integer|optional',
      // }
      const schema = {
        title: { type: "string", optional: true },
        category: { type: "string", optional: true },
        stock: { type: "number", optional: true, integer: true },
      };

      const validate = v.validate(req.body, schema);

      if (validate.length) {
        return res.status(400).json(validate);
      }

      // update
      const response = await data.update({
        title: req.body.title,
        category: req.body.category,
        stock: req.body.stock,
      });

      // return json
      return res.status(200).json(response);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
};
