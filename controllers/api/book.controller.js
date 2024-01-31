const Validator = require('fastest-validator');
const { book } = require('./../../models');
const v = new Validator();
var bcrypt = require('bcryptjs');
const { Op, where } = require("sequelize");

module.exports= {
    index: async (req, res) => {
        try {
            //get all
            const data = await book.findAll({
                attributes: { exclude: ['created_at', 'updated_at'] }
            });

            //when data is empty
            if(data.length == 0){
                return res.status(204).json({message: "Data is Empty"});
            }
            // return json
            return res.status(200).json(data);
        } catch (err) {
            return res.status(500).json({message: err.message});
        }
    },

    show: async (req, res) => {
        try {
            //get data
            let id = req.params.id;
            const data = await book.findByPk(id);
            
            // if not found
            if(!data){
                return res.status(404).json({message: "Data not found!"});
            }

            // return json
            return res.status(200).json(data);
        } catch (error) {
            return res.status(500).json({message: error.message});
        }
    }
}