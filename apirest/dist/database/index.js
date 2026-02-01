"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _databasejs = require('../config/database.js'); var _databasejs2 = _interopRequireDefault(_databasejs);

var _Alunojs = require('../models/Aluno.js'); var _Alunojs2 = _interopRequireDefault(_Alunojs);
var _Usersjs = require('../models/Users.js'); var _Usersjs2 = _interopRequireDefault(_Usersjs);
var _Fotojs = require('../models/Foto.js'); var _Fotojs2 = _interopRequireDefault(_Fotojs);

const models = [_Alunojs2.default, _Usersjs2.default, _Fotojs2.default];

const connection = new (0, _sequelize2.default)(_databasejs2.default);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));

exports. default = connection;
