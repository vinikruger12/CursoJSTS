"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize');
var _appConfig = require('../config/appConfig'); var _appConfig2 = _interopRequireDefault(_appConfig);

 class Foto extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        originalname: {
          type: _sequelize.DataTypes.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'Campo nao pode ficar vazio',
            }
          }
        },
        filename: {
          type: _sequelize.DataTypes.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'Campo nao pode ficar vazio',
            }
          }
        },
        url:{
          type: _sequelize.DataTypes.VIRTUAL,
          get(){
            return _appConfig2.default.url + '/images/' +this.getDataValue('filename');
          }
        }
      }, {
        sequelize,
        tableName: 'fotos',
      }
    );
    return this;
  }

  static associate(models){
    this.belongsTo(models.Aluno, {foreignKey: 'aluno_id'});
  }

} exports.default = Foto;
