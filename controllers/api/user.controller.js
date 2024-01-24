const Validator = require('fastest-validator');
const { user } = require('./../../models');
const v = new Validator();
var bcrypt = require('bcryptjs');

module.exports = {
    index: async (req, res) => {
        try {
            const response = await user.findAll({
                attribute: ['id', 'name', 'email', 'created_at', 'updated_at'],
            });
            return res.status(200).json(response);
        } catch (err) {
            return res.status(500).json({message: err.message});
        }
    }
}