const Validator = require('fastest-validator');
var jwt = require("jsonwebtoken");
const { user } = require('./../../models');
const v = new Validator();
var bcrypt = require('bcryptjs');

module.exports = {
    signup: async (req, res) => {
        try {
            //data validation
            const schema = {
                name: 'string',
                email: 'email',
                password: 'string',
            }

            const validate = v.validate(req.body, schema);

            if(validate.length){
                return res
                    .status(400)
                    .json(validate);
            }

            //signup
            await user.create({
                name: req.body.name,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 8)
            });

            return res.status(200).json({message: "User Registered Successfully"});
        } catch (error) {
            return res.status(500).json({message: error.message});
        }
    },

    signin: async (req, res) => {

    }
}