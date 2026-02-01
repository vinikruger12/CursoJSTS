"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize');
var _Foto = require('../models/Foto'); var _Foto2 = _interopRequireDefault(_Foto);

 class Aluno extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: _sequelize.DataTypes.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'Campo nome deve ter entre 3 e 255 caracteres',
            }
          }
        },
        sobrenome: {
          type: _sequelize.DataTypes.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'Campo nome deve ter entre 3 e 255 caracteres',
            }
          }
        },
        email: {
          type: _sequelize.DataTypes.STRING,
          defaultValue: '',
          unique: {
            msg: "Email ja existe",
          },
          validate: {
            isEmail: {
              msg: 'Email Invalido',
            }
          }
        },
        idade:{
          type: _sequelize.DataTypes.INTEGER,
          defaultValue: '',
          validate: {
            isInt: {
              msg: 'Campo nome deve ser um numero inteiro',
            }
          }
        },
        peso: {
          type: _sequelize.DataTypes.FLOAT,
          defaultValue: '',
          validate: {
            isFloat: {
              msg: 'Campo nome deve ser um numero',
            }
          }
        },
        altura: {
          type: _sequelize.DataTypes.FLOAT,
          defaultValue: '',
          validate: {
            isFloat: {
              msg: 'Campo nome deve ser um numero',
            }
          }
        },
      },
      {
        sequelize,
        tableName: 'alunos',
      }
    );
    return this;
  }



  static associate(models) {
    this.hasMany(models.Foto, { foreignKey: 'aluno_id' });
  }

} exports.default = Aluno;
