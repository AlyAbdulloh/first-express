const Validator = require('fastest-validator');
const { user } = require('./../../models');
const v = new Validator();
var bcrypt = require('bcryptjs');